const fs = require('fs');
const path = require('path');

const ICON_DIR = 'icons';

// 读取新JSON数据
const raw = fs.readFileSync('htzx_5star_heroes.json', 'utf8');
const data = JSON.parse(raw);
const heroes = Object.values(data);

console.log('处理', heroes.length, '个武将...');

const lv50 = (base, growth) => Math.round((base + growth * 49) * 10) / 10;

// 构建新数据
const newHeroes = heroes.map(h => {
  const a = h.attributes;
  const img = h.images || {};
  return {
    id: h.id,
    name: h.name,
    faction: h.faction,
    cost: h.cost,
    troop: h.troop,
    force: a.force.base,
    forceG: a.force.growth,
    def: a.defense.base,
    defG: a.defense.growth,
    int: a.intellect.base,
    intG: a.intellect.growth,
    spd: a.speed.base,
    spdG: a.speed.growth,
    pol: a.politics.base,
    polG: a.politics.growth,
    cha: a.charm.base,
    chaG: a.charm.growth,
    msName: h.mainSkill?.name || '',
    msQual: h.mainSkill?.quality || '',
    msType: h.mainSkill?.type || '',
    msProb: h.mainSkill?.trigger || '',
    msDesc: h.mainSkill?.desc || '',
    ssName: h.selfSkill?.name || '',
    ssQual: h.selfSkill?.quality || '',
    ssType: h.selfSkill?.type || '',
    ssDesc: h.selfSkill?.desc || '',
    esName: h.extraSkill?.name || '',
    esQual: h.extraSkill?.quality || '',
    esType: h.extraSkill?.type || '',
    esDesc: h.extraSkill?.desc || '',
    bonds: h.bonds || [],
    mainTag: h.mainTag || [],
    selfTag: h.selfTag || [],
    // 使用本地相对路径
    iconUrl: img.icon ? `./icons/${path.basename(img.icon)}` : '',
    bigUrl: img.big ? `./icons/${path.basename(img.big)}` : '',
    // 计算50级总属性
    total: lv50(a.force.base, a.force.growth) + lv50(a.defense.base, a.defense.growth) + 
           lv50(a.intellect.base, a.intellect.growth) + lv50(a.speed.base, a.speed.growth) + 
           lv50(a.politics.base, a.politics.growth) + lv50(a.charm.base, a.charm.growth)
  };
});

// 生成排行榜 - 按50级属性排序
const dims = [
  { key: 'force', base: 'force', growth: 'forceG' },
  { key: 'def', base: 'def', growth: 'defG' },
  { key: 'int', base: 'int', growth: 'intG' },
  { key: 'spd', base: 'spd', growth: 'spdG' },
  { key: 'pol', base: 'pol', growth: 'polG' },
  { key: 'cha', base: 'cha', growth: 'chaG' },
];

const RANKINGS = {};
dims.forEach(d => {
  const sorted = [...newHeroes].sort((a, b) => lv50(b[d.base], b[d.growth]) - lv50(a[d.base], a[d.growth]));
  RANKINGS[d.key] = sorted.slice(0, 20).map(h => ({
    name: h.name,
    base: h[d.base],
    growth: h[d.growth]
  }));
});

// 输出文件
const output = `const HEROES=${JSON.stringify(newHeroes)};\nconst RANKINGS=${JSON.stringify(RANKINGS)};`;
fs.writeFileSync('heroes_data.js', output);

console.log('完成!');
console.log('heroes_data.js 大小:', fs.statSync('heroes_data.js').size);
console.log('武将数:', newHeroes.length);
console.log('示例头像:', newHeroes[0].iconUrl);