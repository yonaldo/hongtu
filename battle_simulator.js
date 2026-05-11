// ============================================================
// 鸿图之下 - 战斗模拟器 v1.0
// 基于：伤害公式(增伤/减伤)、技能数据、兵种克制、速度机制
// ============================================================

const BattleSim = (() => {
  // ===== 常量配置 =====
  const CONFIG = {
    BATTLE_DURATION: 90,        // 战斗总时长（秒）
    ROUND_TIME: 10,             // 每回合时间（秒）
    TOTAL_ROUNDS: 9,            // 总回合数 (90/10)
    SPD_THRESHOLD: 229,         // 速度阈值
    SPD_BONUS_PER_POINT: 0.1,   // 每超1点速度提前0.1秒释放
    CRIT_MULTIPLIER: 2.5,       // 暴击倍率250%
    CRIT_BASE_RATE: 0.05,       // 基础暴击率5%
    TROOP_COUNTER_BONUS: 0.15,  // 兵种克制增伤15%
    BASE_TROOPS: 10000,         // 初始兵力
    DEF_REDUCTION_FACTOR: 1.0,  // 防御减伤系数（防御值直接减免等量武力伤害）
    INT_REDUCTION_FACTOR: 1.0   // 智力减伤系数（智力值直接减免等量智力伤害）
  };

  // 兵种克制表：攻击方 -> 被克制的目标
  const TROOP_COUNTER = {
    '枪兵': '骑兵',
    '骑兵': '步兵',
    '步兵': '枪兵',
    '弓兵': null  // 弓兵克制所有也被所有克制
  };

  // ===== 工具函数 =====

  // 计算LV50属性
  function lv50(base, growth) {
    return base + growth * 49;
  }

  // 计算武将LV50六维
  function calcHeroAttrs(hero) {
    return {
      force: lv50(hero.force, hero.forceG),
      def: lv50(hero.def, hero.defG),
      int: lv50(hero.int, hero.intG),
      spd: lv50(hero.spd, hero.spdG),
      pol: lv50(hero.pol, hero.polG),
      cha: lv50(hero.cha, hero.chaG),
      troop: hero.troop,
      name: hero.name,
      id: hero.id
    };
  }

  // 从skills_data.js查找技能
  function findSkill(skillName) {
    if (!skillName || !window.SKILLS) return null;
    return window.SKILLS.find(s => s.name === skillName);
  }

  // 解析技能描述中的伤害倍率（如"造成150.0%武力伤害"）
  function parseDamageRate(desc) {
    if (!desc) return { rate: 100, type: 'force', isHeal: false };
    
    // 检查是否为治疗/回复
    if (/回复|恢复|治疗|回复率/i.test(desc)) {
      const healMatch = desc.match(/(\d+\.?\d*)%.*?回复率|总回复率[^\d]*(\d+\.?\d*)%/i);
      const healRate = healMatch ? parseFloat(healMatch[1] || healMatch[2]) : 50;
      return { rate: healRate, type: 'int', isHeal: true };
    }
    
    // 武力伤害
    const forceMatch = desc.match(/(\d+\.?\d*)%.*?武力伤害/i);
    if (forceMatch) return { rate: parseFloat(forceMatch[1]), type: 'force', isHeal: false };
    
    // 智力伤害
    const intMatch = desc.match(/(\d+\.?\d*)%.*?智力伤害/i);
    if (intMatch) return { rate: parseFloat(intMatch[1]), type: 'int', isHeal: false };
    
    // 默认
    return { rate: 100, type: 'force', isHeal: false };
  }

  // 解析技能descMax中的满级倍率（优先使用）
  function parseDamageRateMax(skill) {
    if (!skill) return { rate: 100, type: 'force', isHeal: false };
    return parseDamageRate(skill.descMax || skill.desc);
  }

  // 解析技能描述中的效果概率
  function parseEffectProb(desc) {
    if (!desc) return 0;
    const match = desc.match(/(\d+\.?\d*)%.*?(?:概率|几率)/i);
    return match ? parseFloat(match[1]) / 100 : 0;
  }

  // ===== 战斗单位 =====
  class BattleUnit {
    constructor(heroData, slotIndex, teamSide) {
      this.hero = calcHeroAttrs(heroData);
      this.rawHero = heroData;
      this.slotIndex = slotIndex;     // 0=主将, 1=副将1, 2=副将2
      this.teamSide = teamSide;       // 'A' or 'B'
      
      this.troops = CONFIG.BASE_TROOPS;
      this.maxTroops = CONFIG.BASE_TROOPS;
      this.alive = true;

      // 技能列表 [主将技, 自带技, 自选技1, 自选技2]
      this.skills = [];
      
      // 增减伤状态
      this.buffs = {
        dmgBoost1: [],    // 一类增伤 [{value, source, duration}]
        dmgBoost2: [],    // 二类增伤
        dmgReduce1: [],   // 一类减伤
        dmgReduce2: []    // 二类减伤
      };

      // 状态效果
      this.statusEffects = [];  // {type, duration, value}
      
      // 统计
      this.stats = {
        totalDamageDealt: 0,
        totalDamageTaken: 0,
        totalHealing: 0,
        critCount: 0,
        attackCount: 0,
        skillCasts: {}  // {skillName: count}
      };
    }

    get spd() { return this.hero.spd; }
    get force() { return this.hero.force; }
    get def() { return this.hero.def; }
    get int() { return this.hero.int; }
    get troop() { return this.hero.troop; }
    get name() { return this.hero.name; }

    // 计算普攻间隔
    getAttackInterval() {
      if (this.spd >= CONFIG.SPD_THRESHOLD) {
        return Math.max(1, CONFIG.ROUND_TIME - (this.spd - CONFIG.SPD_THRESHOLD) * CONFIG.SPD_BONUS_PER_POINT);
      }
      return CONFIG.ROUND_TIME;
    }

    // 受到伤害
    takeDamage(amount) {
      amount = Math.max(0, Math.floor(amount));
      this.troops -= amount;
      this.stats.totalDamageTaken += amount;
      if (this.troops <= 0) {
        this.troops = 0;
        this.alive = false;
      }
      return amount;
    }

    // 回复兵力
    heal(amount) {
      if (!this.alive) return 0;
      amount = Math.min(amount, this.maxTroops - this.troops);
      this.troops += amount;
      this.stats.totalHealing += amount;
      return amount;
    }

    // 计算当前一类增伤总和
    getDmgBoost1() {
      let sum = 0;
      this.buffs.dmgBoost1.forEach(b => { if (b.duration > 0) sum += b.value; });
      return sum;
    }

    // 计算当前二类增伤总和
    getDmgBoost2() {
      let sum = 0;
      this.buffs.dmgBoost2.forEach(b => { if (b.duration > 0) sum += b.value; });
      return sum;
    }

    // 计算当前一类减伤总和
    getDmgReduce1() {
      let sum = 0;
      this.buffs.dmgReduce1.forEach(b => { if (b.duration > 0) sum += b.value; });
      return sum;
    }

    // 计算当前二类减伤总和
    getDmgReduce2() {
      let sum = 0;
      this.buffs.dmgReduce2.forEach(b => { if (b.duration > 0) sum += b.value; });
      return sum;
    }

    // 回合结束处理（减少buff持续时间）
    onRoundEnd() {
      ['dmgBoost1','dmgBoost2','dmgReduce1','dmgReduce2'].forEach(key => {
        this.buffs[key] = this.buffs[key].filter(b => {
          b.duration--;
          return b.duration > 0;
        });
      });
      this.statusEffects = this.statusEffects.filter(s => {
        s.duration--;
        return s.duration > 0;
      });
    }
  }

  // ===== 战斗引擎 =====
  class BattleEngine {
    constructor(teamA, teamB) {
      this.teamAUnits = this._buildUnits(teamA, 'A');
      this.teamBUnits = this._buildUnits(teamB, 'B');
      this.log = [];
      this.roundLogs = [];
      this.currentRound = 0;
      this.currentTime = 0;
    }

    _buildUnits(teamConfig, side) {
      const units = [];
      const slots = ['main', 'sub1', 'sub2'];
      slots.forEach((slot, idx) => {
        const hero = teamConfig.heroes[idx];
        if (hero) {
          const unit = new BattleUnit(hero, idx, side);
          
          // 构建技能列表
          unit.skills.push({
            type: '主动',
            data: findSkill(hero.msName) || {name: hero.msName, type:'主动', rate: hero.msRate||0.35, prepare:20, desc:hero.msDesc||'', descMax:''},
            slotType: 'ms'
          });
          
          unit.skills.push({
            type: hero.ssType || '被动',
            data: findSkill(hero.ssName) || {name: hero.ssName, type:hero.ssType||'被动', rate:hero.ssRate||1, prepare:0, desc:hero.ssDesc||'', descMax:''},
            slotType: 'ss'
          });
          
          // 自选技能
          const customSkills = teamConfig.skills[slot] || [];
          customSkills.forEach(cs => {
            if (cs && cs.name) {
              unit.skills.push({
                type: cs.type || '主动',
                data: cs,
                slotType: 'custom'
              });
            }
          });
          
          units.push(unit);
        }
      });
      return units;
    }

    // 运行完整战斗模拟
    run() {
      this.log.push('⚔️ 战斗开始！');
      this.log.push('【甲方】' + this.teamAUnits.map(u => u.name).join(' / '));
      this.log.push('【乙方】' + this.teamBUnits.map(u => u.name).join(' / '));
      this.log.push('---');

      for (let round = 1; round <= CONFIG.TOTAL_ROUNDS; round++) {
        this.currentRound = round;
        this.roundLogs[round] = { events: [], damages: {A:{}, B:{}}, heals: {A:{}, B:{}}};
        
        this.log.push('\n📋 第' + round + '回合 (' + ((round-1)*10) + '-' + (round*10) + 's)');

        // 1. 收集本回合所有行动，按时间排序
        const actions = [];

        // A队行动
        this.teamAUnits.forEach(unit => {
          if (!unit.alive) return;
          actions.push(...this._getUnitActions(unit, round));
        });

        // B队行动
        this.teamBUnits.forEach(unit => {
          if (!unit.alive) return;
          actions.push(...this._getUnitActions(unit, round));
        });

        // 按执行时间排序（被动/指挥优先级最高，同时间按速度排序）
        actions.sort((a, b) => {
          if (a.priority !== b.priority) return a.priority - b.priority;
          if (Math.abs(a.time - b.time) < 0.01) return b.unitSpd - a.unitSpd;
          return a.time - b.time;
        });

        // 2. 执行行动
        for (const action of actions) {
          if (!action.unit.alive) continue;
          this._executeAction(action, round);
        }

        // 3. 回合结束处理
        var allUnits = this.teamAUnits.concat(this.teamBUnits);
        allUnits.forEach(function(u) { u.onRoundEnd(); });

        // 检查战斗是否提前结束
        var aliveA = this.teamAUnits.filter(function(u) { return u.alive; }).length;
        var aliveB = this.teamBUnits.filter(function(u) { return u.alive; }).length;
        if (aliveA === 0 || aliveB === 0) {
          this.log.push('\n💀 第' + round + '回合结束，一方全灭！');
          break;
        }
      }

      this.log.push('\n---');
      this.log.push('⚔️ 战斗结束！');
      return this._generateResult();
    }

    // 获取单位本回合的所有行动
    _getUnitActions(unit, round) {
      var actions = [];

      unit.skills.forEach(function(skillWrapper, idx) {
        var skill = skillWrapper.data;
        if (!skill || !skill.type) return;

        var sType = skill.type;

        switch (sType) {
          case '主动': {
            var prep = skill.prepare || 20;
            var castTime;
            
            if (unit.spd >= CONFIG.SPD_THRESHOLD) {
              castTime = Math.max(0.5, CONFIG.ROUND_TIME - (unit.spd - CONFIG.SPD_THRESHOLD) * CONFIG.SPD_BONUS_PER_POINT);
            } else {
              castTime = CONFIG.ROUND_TIME + (CONFIG.SPD_THRESHOLD - prep) * 0.2;
            }
            
            for (var r = round; r <= CONFIG.TOTAL_ROUNDS; r++) {
              var t = castTime + (r - round) * CONFIG.ROUND_TIME;
              if (t <= CONFIG.BATTLE_DURATION) {
                var triggerRate = skill.rate || 0.35;
                actions.push({
                  type: 'active_skill',
                  unit: unit,
                  skill: skill,
                  skillIdx: idx,
                  time: t,
                  priority: 1,
                  unitSpd: unit.spd,
                  triggerRate: triggerRate,
                  round: r
                });
              }
            }
            break;
          }

          case '连击': {
            var atkInterval = unit.getAttackInterval();
            for (var r2 = round; r2 <= CONFIG.TOTAL_ROUNDS; r2++) {
              var t2 = atkInterval + (r2 - round) * CONFIG.ROUND_TIME;
              if (t2 <= CONFIG.BATTLE_DURATION) {
                var comboRate = skill.rate || 0.1;
                actions.push({
                  type: 'combo_skill',
                  unit: unit,
                  skill: skill,
                  skillIdx: idx,
                  time: t2,
                  priority: 2,
                  unitSpd: unit.spd,
                  triggerRate: comboRate,
                  round: r2
                });
              }
            }
            break;
          }

          case '指挥':
          case '被动': {
            var pt = (round - 1) * CONFIG.ROUND_TIME + 0.1;
            actions.push({
              type: 'passive_skill',
              unit: unit,
              skill: skill,
              skillIdx: idx,
              time: pt,
              priority: 0,
              unitSpd: unit.spd,
              triggerRate: 1.0,
              round: round
            });
            break;
          }
        }
      });

      // 普攻
      var atkInt = unit.getAttackInterval();
      for (var r3 = round; r3 <= CONFIG.TOTAL_ROUNDS; r3++) {
        var t3 = atkInt + (r3 - round) * CONFIG.ROUND_TIME;
        if (t3 <= CONFIG.BATTLE_DURATION) {
          actions.push({
            type: 'normal_attack',
            unit: unit,
            time: t3,
            priority: 3,
            unitSpd: unit.spd,
            round: r3
          });
        }
      }

      return actions;
    }

    // 执行单个行动
    _executeAction(action, round) {
      var type = action.type;
      var unit = action.unit;
      var skill = action.skill;
      var enemies = unit.teamSide === 'A' ? this.teamBUnits : this.teamAUnits;
      var allies = unit.teamSide === 'A' ? this.teamAUnits : this.teamBUnits;
      var aliveEnemies = enemies.filter(function(e) { return e.alive; });
      var aliveAllies = allies.filter(function(a) { return a.alive; });

      if (aliveEnemies.length === 0) return;

      switch (type) {
        case 'normal_attack': {
          var target = this._selectTarget(aliveEnemies, unit);
          if (!target) return;
          
          var dmgInfo = this._calcNormalAttack(unit, target);
          var actualDmg = target.takeDamage(dmgInfo.damage);
          
          unit.attackCount++;
          unit.stats.skillCasts['普攻'] = (unit.stats.skillCasts['普攻'] || 0) + 1;
          
          this._logAction(round, 
            '💥 ' + unit.name + ' 普攻 → ' + target.name + '，伤害 ' + actualDmg + (dmgInfo.isCrit ? ' 💥暴击!' : '') + (dmgInfo.isCounter ? ' ⚔️克制!' : ''), 
            unit.teamSide, actualDmg);
          break;
        }

        case 'active_skill': {
          if (Math.random() > action.triggerRate) {
            this._logAction(round, '⏭️ ' + unit.name + ' 的「' + skill.name + '」未触发', unit.teamSide, 0);
            return;
          }
          
          this._applySkillEffect(unit, skill, aliveEnemies, aliveAllies, round, action.triggerRate);
          break;
        }

        case 'combo_skill': {
          if (Math.random() > action.triggerRate) return;
          
          var cTarget = this._selectTarget(aliveEnemies, unit);
          if (!cTarget) return;
          
          var cDmgInfo = this._calcSkillDamage(unit, cTarget, skill);
          var cActualDmg = cTarget.takeDamage(cDmgInfo.damage);
          
          unit.stats.skillCasts[skill.name] = (unit.stats.skillCasts[skill.name] || 0) + 1;
          unit.stats.totalDamageDealt += cActualDmg;
          
          this._logAction(round, 
            '⚡ ' + unit.name + ' 连击「' + skill.name + '」→ ' + cTarget.name + '，伤害 ' + cActualDmg + (cDmgInfo.isCrit ? ' 💥暴击!' : '') + (cDmgInfo.isCounter ? ' ⚔️克制!' : ''), 
            unit.teamSide, cActualDmg);
          break;
        }

        case 'passive_skill': {
          this._applyPassiveEffect(unit, skill, aliveAllies, aliveEnemies, round);
          break;
        }
      }
    }

    // 选择目标（默认选择敌方兵力最低的）
    _selectTarget(enemies, attacker) {
      var alive = enemies.filter(function(e) { return e.alive; });
      if (alive.length === 0) return null;
      return alive.reduce(function(a, b) { return a.troops < b.troops ? a : b; });
    }

    // 计算普攻伤害
    _calcNormalAttack(attacker, defender) {
      var baseDmg = attacker.force * (attacker.troops / CONFIG.BASE_TROOPS);
      var defReduction = defender.def * CONFIG.DEF_REDUCTION_FACTOR;
      var damage = Math.max(1, baseDmg - defReduction);
      
      // 兵种克制
      var isCounter = false;
      if (this._isCounter(attacker.troop, defender.troop)) {
        damage *= (1 + CONFIG.TROOP_COUNTER_BONUS);
        isCounter = true;
      }

      // 暴击
      var critRate = CONFIG.CRIT_BASE_RATE;
      var isCrit = Math.random() < critRate;
      if (isCrit) damage *= CONFIG.CRIT_MULTIPLIER;

      // 应用目标的减伤
      damage = this._applyDefenderReduction(damage, defender);

      // 乱数浮动 ±5%
      damage *= (0.95 + Math.random() * 0.1);

      return { damage: Math.floor(damage), isCrit: isCrit, isCounter: isCounter };
    }

    // 计算技能伤害
    _calcSkillDamage(attacker, defender, skill) {
      var dmgInfo = parseDamageRateMax(skill);
      
      var baseDmg;
      if (dmgInfo.isHeal) {
        baseDmg = attacker.int * (dmgInfo.rate / 100) * (attacker.troops / CONFIG.BASE_TROOPS);
        return { damage: Math.floor(baseDmg), isHeal: true, isCrit: false, isCounter: false };
      }

      if (dmgInfo.type === 'force') {
        baseDmg = attacker.force * (dmgInfo.rate / 100) * (attacker.troops / CONFIG.BASE_TROOPS);
        var defReduction = defender.def * CONFIG.DEF_REDUCTION_FACTOR;
        baseDmg = Math.max(1, baseDmg - defReduction);
      } else {
        baseDmg = attacker.int * (dmgInfo.rate / 100) * (attacker.troops / CONFIG.BASE_TROOPS);
        var intReduction = defender.int * CONFIG.INT_REDUCTION_FACTOR;
        baseDmg = Math.max(1, baseDmg - intReduction);
      }

      // 兵种克制
      var isCounter = false;
      if (this._isCounter(attacker.troop, defender.troop)) {
        baseDmg *= (1 + CONFIG.TROOP_COUNTER_BONUS);
        isCounter = true;
      }

      // 一类增伤
      var boost1 = attacker.getDmgBoost1();
      if (boost1 > 0) {
        baseDmg *= (1 + boost1);
      }

      // 二类增伤
      var boost2 = attacker.getDmgBoost2();
      if (boost2 > 0) {
        baseDmg *= (1 + boost2);
      }

      // 目标减伤
      baseDmg = this._applyDefenderReduction(baseDmg, defender);

      // 暴击
      var isCrit = Math.random() < CONFIG.CRIT_BASE_RATE;
      if (isCrit) baseDmg *= CONFIG.CRIT_MULTIPLIER;

      // 乱数
      baseDmg *= (0.95 + Math.random() * 0.1);

      return { damage: Math.floor(baseDmg), isHeal: false, isCrit: isCrit, isCounter: isCounter };
    }

    // 应用目标方的减伤
    _applyDefenderReduction(damage, defender) {
      // 一类减伤（乘算）
      var reduce1 = defender.getDmgReduce1();
      if (reduce1 > 0) {
        damage *= (1 - reduce1);
      }
      // 二类减伤（从基础扣除）
      var reduce2 = defender.getDmgReduce2();
      if (reduce2 > 0) {
        damage = Math.max(1, damage * (1 - reduce2));
      }
      return damage;
    }

    // 兵种克制判断
    _isCounter(attackerTroop, defenderTroop) {
      if (attackerTroop === '弓兵') return true;
      if (defenderTroop === '弓兵') return true;
      var counterTarget = TROOP_COUNTER[attackerTroop];
      return counterTarget === defenderTroop;
    }

    // 应用主动技能效果
    _applySkillEffect(caster, skill, enemies, allies, round, triggerRate) {
      caster.stats.skillCasts[skill.name] = (caster.stats.skillCasts[skill.name] || 0) + 1;
      
      var dmgInfo = parseDamageRateMax(skill);
      
      if (dmgInfo.isHeal) {
        var targets = allies.filter(function(a) { return a.alive; }).slice(0, 2);
        targets.forEach(function(t) {
          var healAmt = BattleEngine.prototype._calcSkillDamage.call(this, caster, t, skill).damage;
          var actualHeal = t.heal(healAmt);
          this._logAction(round, '💚 ' + caster.name + ' 「' + skill.name + '」→ ' + t.name + '，回复 ' + actualHeal, caster.teamSide, 0, true);
        }.bind(this));
        return;
      }

      // 伤害技能 - 确定目标数量
      var desc = skill.descMax || skill.desc || '';
      var targetCount = 1;
      if (/全体|所有|全军|我方全体|敌方全体/.test(desc)) {
        targetCount = enemies.length;
      } else if (/随机?\d*名|选取\d*名|\d*名敌方/.test(desc)) {
        var numMatch = desc.match(/(\d+)名/);
        targetCount = numMatch ? parseInt(numMatch[1]) : Math.min(2, enemies.length);
      }
      
      var targets = enemies.filter(function(e) { return e.alive; }).slice(0, targetCount);
      var totalDmg = 0;
      var self = this;
      
      targets.forEach(function(target) {
        var d = self._calcSkillDamage(caster, target, skill);
        var actualDmg = target.takeDamage(d.damage);
        totalDmg += actualDmg;
        caster.stats.totalDamageDealt += actualDmg;
        
        self._logAction(round,
          '🔥 ' + caster.name + ' 「' + skill.name + '」→ ' + target.name + '，伤害 ' + actualDmg + (d.isCrit ? ' 💥暴击!' : '') + (d.isCounter ? ' ⚔️克制!' : ''),
          caster.teamSide, actualDmg);
      });

      this._parseAndApplyExtraEffects(caster, skill, targets, allies, round);
    }

    // 应用被动/指挥技能效果
    _applyPassiveEffect(caster, skill, allies, enemies, round) {
      caster.stats.skillCasts[skill.name] = (caster.stats.skillCasts[skill.name] || 0) + 1;
      
      var desc = skill.descMax || skill.desc || '';
      
      // 解析增益效果
      var boostMatch = desc.match(/提高.*?(\d+\.?\d*)%.*?(?:攻击|伤害|武力|智力|防御)/i);
      if (boostMatch) {
        var boostVal = parseFloat(boostMatch[1]) / 100;
        var bt = /我方|自身|全军/.test(desc) ? allies : [caster];
        bt.forEach(function(t) {
          t.buffs.dmgBoost2.push({value: boostVal, source: skill.name, duration: 2});
        });
        this._logAction(round, '🛡️ ' + caster.name + ' 「' + skill.name + '」生效，' + bt.map(function(t){return t.name}).join(',') + ' 获得 ' + (boostVal*100) + '% 增伤', caster.teamSide, 0);
        return;
      }

      // 解析减伤效果
      var reduceMatch = desc.match(/降低.*?(\d+\.?\d*)%.*?(?:受到.*?伤害)|受到.*?伤害降低.*?(\d+\.?\d*)%/i);
      if (reduceMatch) {
        var reduceVal = parseFloat(reduceMatch[1] || reduceMatch[2]) / 100;
        var rt = /我方|自身|全军/.test(desc) ? allies : [caster];
        rt.forEach(function(t) {
          t.buffs.dmgReduce1.push({value: reduceVal, source: skill.name, duration: 2});
        });
        this._logAction(round, '🛡️ ' + caster.name + ' 「' + skill.name + '」生效，' + rt.map(function(t){return t.name}).join(',') + ' 获得 ' + (reduceVal*100) + '% 减伤', caster.teamSide, 0);
        return;
      }

      this._logAction(round, '✨ ' + caster.name + ' 「' + skill.name + '」被动生效', caster.teamSide, 0);
    }

    // 解析并应用技能的附加效果
    _parseAndApplyExtraEffects(caster, skill, hitTargets, allies, round) {
      var desc = skill.descMax || skill.desc || '';
      
      // 嘲讽
      if (/嘲讽/i.test(desc)) {
        hitTargets.forEach(function(t) {
          t.statusEffects.push({type: 'taunt', duration: 1, source: caster.name});
        });
      }
      
      // 缴械
      if (/缴械/i.test(desc)) {
        var prob = parseEffectProb(desc);
        hitTargets.forEach(function(t) {
          if (Math.random() < prob) {
            t.statusEffects.push({type: 'disarm', duration: 1, source: skill.name});
          }
        });
      }

      // 状态效果
      var effectTypes = [
        {pattern: /眩晕|晕眩/, type: 'stun'},
        {pattern: /沉默/, type: 'silence'},
        {pattern: /混乱/, type: 'confuse'}
      ];
      effectTypes.forEach(function(et) {
        if (et.pattern.test(desc)) {
          var ep = parseEffectProb(desc);
          hitTargets.forEach(function(t) {
            if (Math.random() < ep) {
              t.statusEffects.push({type: et.type, duration: 1, source: skill.name});
            }
          });
        }
      });
    }

    // 记录行动日志
    _logAction(round, msg, side, damage, isHeal) {
      this.log.push(msg);
      if (!this.roundLogs[round]) this.roundLogs[round] = {events:[], damages:{A:{},B:{}}, heals:{A:{},B:{}}};
      this.roundLogs[round].events.push({time: this.currentTime, msg: msg, side: side, damage: damage, isHeal: isHeal || false});
    }

    // 生成战斗结果
    _generateResult() {
      var self = this;
      var teamATotal = this.teamAUnits.reduce(function(s, u) { return s + u.troops; }, 0);
      var teamBTotal = this.teamBUnits.reduce(function(s, u) { return s + u.troops; }, 0);
      var teamADmg = this.teamAUnits.reduce(function(s, u) { return s + u.stats.totalDamageDealt; }, 0);
      var teamBDmg = this.teamBUnits.reduce(function(s, u) { return s + u.stats.totalDamageDealt; }, 0);
      var teamAHeal = this.teamAUnits.reduce(function(s, u) { return s + u.stats.totalHealing; }, 0);
      var teamBHeal = this.teamBUnits.reduce(function(s, u) { return s + u.stats.totalHealing; }, 0);

      var winner;
      if (teamATotal > teamBTotal) winner = 'A';
      else if (teamBTotal > teamATotal) winner = 'B';
      else winner = 'draw';

      return {
        winner: winner,
        teamA: {
          units: this.teamAUnits.map(function(u) {
            return {
              name: u.name,
              remainingTroops: u.troops,
              maxTroops: u.maxTroops,
              alive: u.alive,
              damageDealt: u.stats.totalDamageDealt,
              damageTaken: u.stats.totalDamageTaken,
              healing: u.stats.totalHealing,
              critCount: u.stats.critCount,
              attackCount: u.stats.attackCount,
              skillCasts: Object.assign({}, u.stats.skillCasts)
            };
          }),
          totalRemaining: teamATotal,
          totalDamage: teamADmg,
          totalHealing: teamAHeal
        },
        teamB: {
          units: this.teamBUnits.map(function(u) {
            return {
              name: u.name,
              remainingTroops: u.troops,
              maxTroops: u.maxTroops,
              alive: u.alive,
              damageDealt: u.stats.totalDamageDealt,
              damageTaken: u.stats.totalDamageTaken,
              healing: u.stats.totalHealing,
              critCount: u.stats.critCount,
              attackCount: u.stats.attackCount,
              skillCasts: Object.assign({}, u.stats.skillCasts)
            };
          }),
          totalRemaining: teamBTotal,
          totalDamage: teamBDmg,
          totalHealing: teamBHeal
        },
        rounds: this.currentRound,
        log: this.log,
        roundLogs: this.roundLogs
      };
    }
  }

  // ===== 对外接口 =====
  return {
    simulate: function(teamA, teamB) {
      var engine = new BattleEngine(teamA, teamB);
      return engine.run();
    },
    CONFIG: CONFIG,
    BattleUnit: BattleUnit,
    BattleEngine: BattleEngine
  };
})();

window.BattleSim = BattleSim;
