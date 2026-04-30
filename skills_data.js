// 鸿图之下武技数据 - 自动生成
const SKILLS = [
  {
    "id": 43480,
    "name": "苦肉计",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_209.png",
    "desc": "对随机2名敌方武将施加嘲讽(强制目标普攻对象转为自己)，并使自身受到武力伤害降低20.0%，持续10秒，黄盖使用此技能时，额外附加免疫暴击效果，持续10秒，技能冷却20秒。",
    "descMax": "对随机2名敌方武将施加嘲讽(强制目标普攻对象转为自己)，并使自身受到武力伤害降低40.0%，持续10秒，黄盖使用此技能时，额外附加免疫暴击效果，持续10秒，技能冷却20秒。",
    "type": "主动",
    "prepare": 16,
    "rate": 0.4,
    "hero": "黄盖",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "控制",
      "增益"
    ]
  },
  {
    "id": 43482,
    "name": "百克连捷",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_143.png",
    "desc": "普攻时，额外对普攻目标造成一次107.5%武力伤害。",
    "descMax": "普攻时，额外对普攻目标造成一次215.0%武力伤害。",
    "type": "连击",
    "prepare": 19,
    "rate": 0.1,
    "hero": "华雄（上将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体"
    ]
  },
  {
    "id": 43484,
    "name": "黄天蔽日",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_348.png",
    "desc": "普攻时，额外对普攻目标造成一次77.5%智力伤害，如果目标处于雷暴，则此次伤害额外提高30%。",
    "descMax": "普攻时，额外对普攻目标造成一次155.0%智力伤害，如果目标处于雷暴，则此次伤害额外提高30%。",
    "type": "连击",
    "prepare": 25,
    "rate": 0.12,
    "hero": "张宝（上将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力单体"
    ]
  },
  {
    "id": 43486,
    "name": "战以养战",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_244.png",
    "desc": "提高我方所有弓兵武将7.5%励军(基于造成的武力伤害回复一定兵力)，提高其他兵种武将7.5%防御。",
    "descMax": "提高我方所有弓兵武将15.0%励军(基于造成的武力伤害回复一定兵力)，提高其他兵种武将15.0%防御。",
    "type": "指挥",
    "prepare": 28,
    "rate": 1,
    "hero": "郭汜",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43487,
    "name": "宣抚镇军",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_273.png",
    "desc": "随机选取2名我方武将，对其施加恢复状态(持续回复兵力，总回复率65.0%，受智力影响)，并使其受到智力伤害降低15.0%，持续10秒，蔡文姬使用此技能时，选取我方全体武将，技能冷却10秒。",
    "descMax": "随机选取2名我方武将，对其施加恢复状态(持续回复兵力，总回复率130.0%，受智力影响)，并使其受到智力伤害降低30.0%，持续10秒，蔡文姬使用此技能时，选取我方全体武将，技能冷却10秒。",
    "type": "主动",
    "prepare": 29,
    "rate": 0.4,
    "hero": "蔡文姬",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "治疗",
      "增益"
    ]
  },
  {
    "id": 43490,
    "name": "忌克妒魅",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_281.png",
    "desc": "选取2名魅力最高的敌方武将，对其施加中毒(持续毒属性智力伤害，总伤害率60.0%)及禁疗(无法回复兵力)，持续10秒，技能冷却10秒。",
    "descMax": "选取2名魅力最高的敌方武将，对其施加中毒(持续毒属性智力伤害，总伤害率120.0%)及禁疗(无法回复兵力)，持续10秒，技能冷却10秒。",
    "type": "主动",
    "prepare": 32,
    "rate": 0.5,
    "hero": "何太后（上将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体",
      "减益"
    ]
  },
  {
    "id": 43492,
    "name": "斗勇夺械",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_165.png",
    "desc": "普攻时，额外对普攻目标造成一次80.0%武力伤害，17.5%概率对目标施加缴械(无法普通攻击)，持续10秒。",
    "descMax": "普攻时，额外对普攻目标造成一次160.0%武力伤害，35.0%概率对目标施加缴械(无法普通攻击)，持续10秒。",
    "type": "连击",
    "prepare": 34,
    "rate": 0.1,
    "hero": "张梁（上将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体",
      "控制"
    ]
  },
  {
    "id": 43495,
    "name": "乘间击瑕",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_253.png",
    "desc": "对所有带负面状态的敌方武将造成62.5%智力伤害；如果不存在此类目标，则对自身恢复一定兵力(回复率62.5%，受智力影响)，技能冷却20秒。",
    "descMax": "对所有带负面状态的敌方武将造成125.0%智力伤害；如果不存在此类目标，则对自身恢复一定兵力(回复率125.0%，受智力影响)，技能冷却20秒。",
    "type": "主动",
    "prepare": 40,
    "rate": 0.5,
    "hero": "刘表",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体",
      "治疗"
    ]
  },
  {
    "id": 43497,
    "name": "破虏",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_450.png",
    "desc": "提高自身及随机1名友方武将20.0%闪避(触发时令所受伤害无效)，持续10秒。孙坚使用此技能时，施加闪避的目标改为我方全体且对我方全体武将施加净化；开场时提高我方全体吴国武将20.0%闪避，持续10秒，并且我方武将每成功闪避一次非普攻非持续性伤害，对攻击者施加缴械，持续10秒，技能冷却10秒。",
    "descMax": "提高自身及随机1名友方武将40.0%闪避(触发时令所受伤害无效)，持续10秒。孙坚使用此技能时，施加闪避的目标改为我方全体且对我方全体武将施加净化；开场时提高我方全体吴国武将40.0%闪避，持续10秒，并且我方武将每成功闪避一次非普攻非持续性伤害，对攻击者施加缴械，持续10秒，技能冷却10秒。",
    "type": "主动",
    "prepare": 47,
    "rate": 0.6,
    "hero": "孙坚",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益",
      "控制"
    ]
  },
  {
    "id": 43499,
    "name": "源清流净",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_298.png",
    "desc": "净化(移除目标负面状态)2名友方武将，并提高其15.0点武力、智力、攻速，持续10秒，技能冷却10秒。",
    "descMax": "净化(移除目标负面状态)2名友方武将，并提高其30.0点武力、智力、攻速，持续10秒，技能冷却10秒。",
    "type": "主动",
    "prepare": 56,
    "rate": 0.5,
    "hero": "郭皇后",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43500,
    "name": "抽刀断丝",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_184.png",
    "desc": "每次释放主动技能、主将技能后，随机选取2名敌方武将，使其武力、智力均降低15.0%并禁疗(无法回复兵力)，持续10秒。",
    "descMax": "每次释放主动技能、主将技能后，随机选取2名敌方武将，使其武力、智力均降低30.0%并禁疗(无法回复兵力)，持续10秒。",
    "type": "被动",
    "prepare": 57,
    "rate": 1,
    "hero": "张春华（上将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "减益"
    ]
  },
  {
    "id": 43502,
    "name": "孤注一掷",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_298.png",
    "desc": "随机驱散1名敌方武将身上的所有增益状态，并造成77.5%智力伤害，每驱散1个增益状态，则伤害率额外提高17.5%(最高额外提高4次)，技能冷却10秒。",
    "descMax": "随机驱散1名敌方武将身上的所有增益状态，并造成155.0%智力伤害，每驱散1个增益状态，则伤害率额外提高35.0%(最高额外提高4次)，技能冷却10秒。",
    "type": "主动",
    "prepare": 59,
    "rate": 0.5,
    "hero": "伏寿",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力单体",
      "减益"
    ]
  },
  {
    "id": 43504,
    "name": "犯颜激辩",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_313.png",
    "desc": "对政治最低敌方武将施加力竭(无法造成伤害)，并降低其20%防御，持续10秒，技能冷却20秒。",
    "descMax": "对政治最低敌方武将施加力竭(无法造成伤害)，并降低其20%防御，持续10秒，技能冷却20秒。",
    "type": "主动",
    "prepare": 61,
    "rate": 0.2,
    "hero": "张昭（上将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "控制",
      "减益"
    ]
  },
  {
    "id": 43506,
    "name": "乘隙捣虚",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_321.png",
    "desc": "对敌方防御最低的武将造成102.5%武力伤害，技能冷却20秒。",
    "descMax": "对敌方防御最低的武将造成205.0%武力伤害，技能冷却20秒。",
    "type": "主动",
    "prepare": 65,
    "rate": 0.5,
    "hero": "颜良（上将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体"
    ]
  },
  {
    "id": 43507,
    "name": "擒龙缚虎",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_321.png",
    "desc": "对敌方武力最高的武将造成102.5%的武力伤害，技能冷却20秒。",
    "descMax": "对敌方武力最高的武将造成205.0%的武力伤害，技能冷却20秒。",
    "type": "主动",
    "prepare": 66,
    "rate": 0.5,
    "hero": "文丑（上将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体"
    ]
  },
  {
    "id": 43508,
    "name": "扶危持倾",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_284.png",
    "desc": "普攻时，额外对普攻目标造成一次75.0%智力伤害，并对自身恢复一定兵力(回复率75.0%，受智力影响)，姜维使用此技能时，回复率额外提高50%。",
    "descMax": "普攻时，额外对普攻目标造成一次150.0%智力伤害，并对自身恢复一定兵力(回复率150.0%，受智力影响)，姜维使用此技能时，回复率额外提高50%。",
    "type": "连击",
    "prepare": 67,
    "rate": 0.1,
    "hero": "姜维",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力单体",
      "治疗"
    ]
  },
  {
    "id": 43536,
    "name": "感召黄天",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_220.png",
    "desc": "普攻时，额外对普攻目标造成一次100.0%武力伤害；如果目标为黄巾领袖(张角、张宝、张梁、张宁)，则造成双倍伤害。",
    "descMax": "普攻时，额外对普攻目标造成一次200.0%武力伤害；如果目标为黄巾领袖(张角、张宝、张梁、张宁)，则造成双倍伤害。",
    "type": "连击",
    "prepare": 12,
    "rate": 0.1,
    "hero": "皇甫嵩（上将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体"
    ]
  },
  {
    "id": 43537,
    "name": "荡击",
    "grade": "B",
    "gradeNum": 2,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_284.png",
    "desc": "普攻时，对普攻目标施加溃散(持续武力伤害，总伤害率60.0%)，持续10秒。",
    "descMax": "普攻时，对普攻目标施加溃散(持续武力伤害，总伤害率120.0%)，持续10秒。",
    "type": "连击",
    "prepare": 218,
    "rate": 0.1,
    "hero": "范强",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体"
    ]
  },
  {
    "id": 43538,
    "name": "精策",
    "grade": "B",
    "gradeNum": 2,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_094.png",
    "desc": "对自身施加免控(免疫所有控制效果)，持续10秒，技能冷却10秒。",
    "descMax": "对自身施加免控(免疫所有控制效果)，持续10秒，技能冷却10秒。",
    "type": "主动",
    "prepare": 219,
    "rate": 0.15,
    "hero": "伊籍",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43539,
    "name": "英武",
    "grade": "B",
    "gradeNum": 2,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_373.png",
    "desc": "提高自身10.0%武力，持续10秒，技能冷却10秒。",
    "descMax": "提高自身20.0%武力，持续10秒，技能冷却10秒。",
    "type": "主动",
    "prepare": 4428,
    "rate": 0.4,
    "hero": "公孙渊",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43540,
    "name": "密计",
    "grade": "B",
    "gradeNum": 2,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_219.png",
    "desc": "普攻时，额外对普攻目标造成一次50.0%智力伤害。",
    "descMax": "普攻时，额外对普攻目标造成一次100.0%智力伤害。",
    "type": "连击",
    "prepare": 222,
    "rate": 0.1,
    "hero": "龚景",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力单体"
    ]
  },
  {
    "id": 43541,
    "name": "连坐",
    "grade": "B",
    "gradeNum": 2,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_253.png",
    "desc": "随机对1名敌方武将造成35.0%智力伤害，并有50%概率对另1名武将造成35.0%智力伤害，技能冷却10秒。",
    "descMax": "随机对1名敌方武将造成70.0%智力伤害，并有50%概率对另1名武将造成70.0%智力伤害，技能冷却10秒。",
    "type": "主动",
    "prepare": 4429,
    "rate": 0.4,
    "hero": "王烈",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体"
    ]
  },
  {
    "id": 43547,
    "name": "心计",
    "grade": "B",
    "gradeNum": 2,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_376.png",
    "desc": "对智力最低的敌方武将造成50.0%智力伤害，技能冷却20秒。",
    "descMax": "对智力最低的敌方武将造成100.0%智力伤害，技能冷却20秒。",
    "type": "主动",
    "prepare": 4430,
    "rate": 0.5,
    "hero": "辛敞",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力单体"
    ]
  },
  {
    "id": 43556,
    "name": "逐北",
    "grade": "B",
    "gradeNum": 2,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_220.png",
    "desc": "普攻时，额外对普攻目标造成一次50.0%武力伤害。",
    "descMax": "普攻时，额外对普攻目标造成一次100.0%武力伤害。",
    "type": "连击",
    "prepare": 4431,
    "rate": 0.1,
    "hero": "马铁",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体"
    ]
  },
  {
    "id": 43543,
    "name": "机变",
    "grade": "B",
    "gradeNum": 2,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_373.png",
    "desc": "提高自身10.0%神算几率(触发时智力伤害翻倍)，持续10秒，技能冷却10秒。",
    "descMax": "提高自身20.0%神算几率(触发时智力伤害翻倍)，持续10秒，技能冷却10秒。",
    "type": "主动",
    "prepare": 226,
    "rate": 0.4,
    "hero": "虞翻",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43545,
    "name": "睚眦",
    "grade": "B",
    "gradeNum": 2,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_254.png",
    "desc": "提高自身5.0%反戈(受到普攻后反击一段伤害)，持续全场。",
    "descMax": "提高自身10.0%反戈(受到普攻后反击一段伤害)，持续全场。",
    "type": "被动",
    "prepare": 228,
    "rate": 1,
    "hero": "张济",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43546,
    "name": "助阵",
    "grade": "B",
    "gradeNum": 2,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_274.png",
    "desc": "提高自身及随机1名友方武将15.0点武力。",
    "descMax": "提高自身及随机1名友方武将30.0点武力。",
    "type": "指挥",
    "prepare": 229,
    "rate": 1,
    "hero": "公孙越",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43549,
    "name": "振奋",
    "grade": "B",
    "gradeNum": 2,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_274.png",
    "desc": "提高自身及随机1名友方武将5.0%武力伤害。",
    "descMax": "提高自身及随机1名友方武将10.0%武力伤害。",
    "type": "指挥",
    "prepare": 231,
    "rate": 1,
    "hero": "成济",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43548,
    "name": "守护",
    "grade": "B",
    "gradeNum": 2,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_217.png",
    "desc": "对距离自身最近的2名敌方武将施加嘲讽(强制目标普攻对象转为自己)，持续10秒，技能冷却20秒。",
    "descMax": "对距离自身最近的2名敌方武将施加嘲讽(强制目标普攻对象转为自己)，持续10秒，技能冷却20秒。",
    "type": "主动",
    "prepare": 232,
    "rate": 0.2,
    "hero": "管亥",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "控制"
    ]
  },
  {
    "id": 43554,
    "name": "天师",
    "grade": "B",
    "gradeNum": 2,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_373.png",
    "desc": "提高2名友方武将15.0点武力、智力，持续10秒，技能冷却10秒。",
    "descMax": "提高2名友方武将30.0点武力、智力，持续10秒，技能冷却10秒。",
    "type": "主动",
    "prepare": 236,
    "rate": 0.5,
    "hero": "阚泽",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43560,
    "name": "击虚",
    "grade": "B",
    "gradeNum": 2,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_260.png",
    "desc": "对兵力最低的敌方武将造成50.0%武力伤害，技能冷却20秒。",
    "descMax": "对兵力最低的敌方武将造成100.0%武力伤害，技能冷却20秒。",
    "type": "主动",
    "prepare": 235,
    "rate": 0.5,
    "hero": "赵昂",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体"
    ]
  },
  {
    "id": 43565,
    "name": "拊背奇袭",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_234.png",
    "desc": "普攻时，额外对普攻目标造成一次97.5%武力伤害，首次触发时此伤害额外提高60%，此后每次触发，伤害提升率降低三分之一，最多降低至0，马岱使用此技能时，每30秒重置此技能伤害。",
    "descMax": "普攻时，额外对普攻目标造成一次195.0%武力伤害，首次触发时此伤害额外提高60%，此后每次触发，伤害提升率降低三分之一，最多降低至0，马岱使用此技能时，每30秒重置此技能伤害。",
    "type": "连击",
    "prepare": 214,
    "rate": 0.1,
    "hero": "马岱",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体"
    ]
  },
  {
    "id": 43566,
    "name": "盘弓错马",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_258.png",
    "desc": "随机对2名敌方武将造成67.5%武力伤害，如果其为骑兵、弓兵，则降低其30%伤害，持续10秒，技能冷却20秒，韩当使用此技能时，持续时间额外增加10秒。",
    "descMax": "随机对2名敌方武将造成135.0%武力伤害，如果其为骑兵、弓兵，则降低其30%伤害，持续10秒，技能冷却20秒，韩当使用此技能时，持续时间额外增加10秒。",
    "type": "主动",
    "prepare": 216,
    "rate": 0.45,
    "hero": "韩当",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力群体",
      "减益"
    ]
  },
  {
    "id": 43569,
    "name": "明火执仗",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_463.png",
    "desc": "随机对2名敌方武将造成72.5%武力伤害，如果目标已经处于焚烧，则此次伤害提高30%，技能冷却20秒。",
    "descMax": "随机对2名敌方武将造成145.0%武力伤害，如果目标已经处于焚烧，则此次伤害提高30%，技能冷却20秒。",
    "type": "主动",
    "prepare": 240,
    "rate": 0.4,
    "hero": "兀突骨",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力群体"
    ]
  },
  {
    "id": 43578,
    "name": "势如破竹",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_483.png",
    "desc": "随机降低2名敌方武将50.0点防御，持续10秒，并对其造成82.5%武力伤害，技能冷却20秒；曹彰使用此技能时，此伤害附加20%破甲(无视目标一定比例防御及武力减伤)。",
    "descMax": "随机降低2名敌方武将100.0点防御，持续10秒，并对其造成165.0%武力伤害，技能冷却20秒；曹彰使用此技能时，此伤害附加20%破甲(无视目标一定比例防御及武力减伤)。",
    "type": "主动",
    "prepare": 244,
    "rate": 0.4,
    "hero": "曹彰",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力群体",
      "减益"
    ]
  },
  {
    "id": 43580,
    "name": "画地为牢",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_276.png",
    "desc": "前20秒，选取2名敌方政治最低的武将，20.0%概率对其施加缴械(无法普通攻击)，如果目标政治低于自身，则触发概率翻倍，曹丕使用此技能时，额外施加缚足(无法移动)。",
    "descMax": "前20秒，选取2名敌方政治最低的武将，40.0%概率对其施加缴械(无法普通攻击)，如果目标政治低于自身，则触发概率翻倍，曹丕使用此技能时，额外施加缚足(无法移动)。",
    "type": "指挥",
    "prepare": 54,
    "rate": 1,
    "hero": "曹丕",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "控制"
    ]
  },
  {
    "id": 43583,
    "name": "穷兵黩武",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_431.png",
    "desc": "随机对2名敌方武将造成100.0%武力伤害，50%概率对自身施加力竭(无法造成伤害)，持续10秒，技能冷却20秒。",
    "descMax": "随机对2名敌方武将造成200.0%武力伤害，50%概率对自身施加力竭(无法造成伤害)，持续10秒，技能冷却20秒。",
    "type": "主动",
    "prepare": 246,
    "rate": 0.4,
    "hero": "潘凤",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力群体",
      "控制"
    ]
  },
  {
    "id": 43585,
    "name": "抬棺决战",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_471.png",
    "desc": "提高自身25%武力伤害但受到伤害提高25%，持续10秒，并随机对2名敌方武将造成90.0%武力伤害，庞德使用此技能时，不附加受到伤害提高效果，技能冷却20秒。",
    "descMax": "提高自身25%武力伤害但受到伤害提高25%，持续10秒，并随机对2名敌方武将造成180.0%武力伤害，庞德使用此技能时，不附加受到伤害提高效果，技能冷却20秒。",
    "type": "主动",
    "prepare": 71,
    "rate": 0.45,
    "hero": "庞德",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力群体",
      "增益",
      "减益"
    ]
  },
  {
    "id": 43587,
    "name": "神智启明",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_426.png",
    "desc": "前30秒，提高2名我方武将10.0%智力伤害。",
    "descMax": "前30秒，提高2名我方武将20.0%智力伤害。",
    "type": "指挥",
    "prepare": 249,
    "rate": 1,
    "hero": "甘夫人（上将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43589,
    "name": "扶危济困",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_320.png",
    "desc": "当主将兵量低于50%时，为主将分担50.0%的伤害，持续20秒(可驱散)，全场只能触发1次。",
    "descMax": "当主将兵量低于50%时，为主将分担100.0%的伤害，持续20秒(可驱散)，全场只能触发1次。",
    "type": "被动",
    "prepare": 80,
    "rate": 1,
    "hero": "李典（上将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "援护"
    ]
  },
  {
    "id": 43590,
    "name": "半济而击",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_447.png",
    "desc": "随机对2名敌方武将造成62.5%武力伤害，并降低其50.0点智力，持续10秒，冷却20秒。",
    "descMax": "随机对2名敌方武将造成125.0%武力伤害，并降低其100.0点智力，持续10秒，冷却20秒。",
    "type": "主动",
    "prepare": 251,
    "rate": 0.4,
    "hero": "韩遂",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力群体",
      "减益"
    ]
  },
  {
    "id": 43591,
    "name": "鸩弑",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_487.png",
    "desc": "随机对2名敌方武将造成72.5%智力伤害，如果目标已经中毒，则此次伤害提高30%，技能冷却20秒。",
    "descMax": "随机对2名敌方武将造成145.0%智力伤害，如果目标已经中毒，则此次伤害提高30%，技能冷却20秒。",
    "type": "主动",
    "prepare": 83,
    "rate": 0.4,
    "hero": "李儒",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体"
    ]
  },
  {
    "id": 43592,
    "name": "疏财尚义",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_497.png",
    "desc": "随机对1名我方武将恢复一定兵力(回复率为72.5%，受智力影响)，技能冷却10秒。",
    "descMax": "随机对1名我方武将恢复一定兵力(回复率为145.0%，受智力影响)，技能冷却10秒。",
    "type": "主动",
    "prepare": 211,
    "rate": 0.6,
    "hero": "糜竺（上将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "治疗"
    ]
  },
  {
    "id": 43593,
    "name": "将飞龙城",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_479.png",
    "desc": "随机对1名敌方武将造成120.0%武力伤害，40%概率对其施加缴械(无法普通攻击)，持续10秒，技能冷却20秒。",
    "descMax": "随机对1名敌方武将造成240.0%武力伤害，40%概率对其施加缴械(无法普通攻击)，持续10秒，技能冷却20秒。",
    "type": "主动",
    "prepare": 252,
    "rate": 0.4,
    "hero": "文鸯",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体",
      "控制"
    ]
  },
  {
    "id": 43594,
    "name": "横行无忌",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_415.png",
    "desc": "随机对敌方武将造成3段37.5%武力伤害，每次攻击的目标独立判定，技能冷却10秒。",
    "descMax": "随机对敌方武将造成3段75.0%武力伤害，每次攻击的目标独立判定，技能冷却10秒。",
    "type": "主动",
    "prepare": 253,
    "rate": 0.4,
    "hero": "张绣",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力群体"
    ]
  },
  {
    "id": 43595,
    "name": "痛剿穷追",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_329.png",
    "desc": "随机对1名敌方武将造成120.0%武力伤害，且有40%概率使其沉默，持续10秒，技能冷却20秒。",
    "descMax": "随机对1名敌方武将造成240.0%武力伤害，且有40%概率使其沉默，持续10秒，技能冷却20秒。",
    "type": "主动",
    "prepare": 254,
    "rate": 0.4,
    "hero": "丁奉",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体",
      "控制"
    ]
  },
  {
    "id": 43596,
    "name": "伪命加身",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_427.png",
    "desc": "前30秒，提高自身10.0%主动技能释放概率，但使自身受到伤害提高20%。",
    "descMax": "前30秒，提高自身20.0%主动技能释放概率，但使自身受到伤害提高20%。",
    "type": "被动",
    "prepare": 255,
    "rate": 1,
    "hero": "袁术",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益",
      "减益"
    ]
  },
  {
    "id": 43598,
    "name": "砺戈秣马",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_346.png",
    "desc": "普攻时，额外对普攻目标造成一次80.0%智力伤害，并随机提高1名友方武将15.0%武力伤害，持续10秒。",
    "descMax": "普攻时，额外对普攻目标造成一次160.0%智力伤害，并随机提高1名友方武将30.0%武力伤害，持续10秒。",
    "type": "连击",
    "prepare": 260,
    "rate": 0.1,
    "hero": "张姬（上将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力单体",
      "增益"
    ]
  },
  {
    "id": 43600,
    "name": "摇唇鼓舌",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_426.png",
    "desc": "30秒时，若自身释放主动技能次数高于敌方主将，则对全体敌方武将造成77.5%智力伤害并对其施加沉默(无法使用主动技能)，持续10秒；反之则对自身造成同等效果。",
    "descMax": "30秒时，若自身释放主动技能次数高于敌方主将，则对全体敌方武将造成155.0%智力伤害并对其施加沉默(无法使用主动技能)，持续10秒；反之则对自身造成同等效果。",
    "type": "指挥",
    "prepare": 77,
    "rate": 1,
    "hero": "王朗",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体",
      "控制"
    ]
  },
  {
    "id": 43601,
    "name": "贯甲提兵",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_428.png",
    "desc": "随机对2名敌方武将造成82.5%武力伤害，此次伤害附加精准(无视闪避、抵挡、盾阵)，技能冷却20秒。",
    "descMax": "随机对2名敌方武将造成165.0%武力伤害，此次伤害附加精准(无视闪避、抵挡、盾阵)，技能冷却20秒。",
    "type": "主动",
    "prepare": 262,
    "rate": 0.4,
    "hero": "徐荣",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力群体"
    ]
  },
  {
    "id": 43602,
    "name": "百战强师",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_318.png",
    "desc": "提高自身20.0点武力、智力、防御、攻速。",
    "descMax": "提高自身40.0点武力、智力、防御、攻速。",
    "type": "被动",
    "prepare": 78,
    "rate": 1,
    "hero": "李傕",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43603,
    "name": "湍矢涛兵",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_428.png",
    "desc": "随机对1名敌方武将造成105.0%武力伤害，若目标已处于水浸，则本次攻击附加50%暴击几率(触发时武力伤害翻倍)，技能冷却20秒。",
    "descMax": "随机对1名敌方武将造成210.0%武力伤害，若目标已处于水浸，则本次攻击附加50%暴击几率(触发时武力伤害翻倍)，技能冷却20秒。",
    "type": "主动",
    "prepare": 263,
    "rate": 0.4,
    "hero": "蒋钦",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体"
    ]
  },
  {
    "id": 43604,
    "name": "反戈一击",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_317.png",
    "desc": "受到普攻时，50%概率反弹25.0%受到的伤害。",
    "descMax": "受到普攻时，50%概率反弹50.0%受到的伤害。",
    "type": "被动",
    "prepare": 264,
    "rate": 1,
    "hero": "夏侯霸",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43605,
    "name": "截粮断辎",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_428.png",
    "desc": "随机对1名敌方武将造成120.0%武力伤害，并对其施加禁疗(无法回复兵力)，持续10秒，技能冷却20秒。",
    "descMax": "随机对1名敌方武将造成240.0%武力伤害，并对其施加禁疗(无法回复兵力)，持续10秒，技能冷却20秒。",
    "type": "主动",
    "prepare": 266,
    "rate": 0.4,
    "hero": "夏侯尚",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体",
      "减益"
    ]
  },
  {
    "id": 43606,
    "name": "献马救主",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_428.png",
    "desc": "对距离自身最近的2名敌方武将施加嘲讽(强制目标普攻对象转为自己)，并提高自身50.0点防御，持续10秒，技能冷却20秒。",
    "descMax": "对距离自身最近的2名敌方武将施加嘲讽(强制目标普攻对象转为自己)，并提高自身100.0点防御，持续10秒，技能冷却20秒。",
    "type": "主动",
    "prepare": 76,
    "rate": 0.4,
    "hero": "曹洪",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "控制",
      "增益"
    ]
  },
  {
    "id": 43607,
    "name": "横甲刁军",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_333.png",
    "desc": "普攻时，驱散普攻目标身上的所有增益状态，并对其造成95.0%武力伤害。",
    "descMax": "普攻时，驱散普攻目标身上的所有增益状态，并对其造成190.0%武力伤害。",
    "type": "连击",
    "prepare": 265,
    "rate": 0.1,
    "hero": "臧霸",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "减益",
      "武力单体"
    ]
  },
  {
    "id": 43608,
    "name": "先礼后兵",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_428.png",
    "desc": "随机对1名敌方武将造成120.0%智力伤害，40%概率对其施加力竭(无法造成伤害)，持续10秒，技能冷却20秒。",
    "descMax": "随机对1名敌方武将造成240.0%智力伤害，40%概率对其施加力竭(无法造成伤害)，持续10秒，技能冷却20秒。",
    "type": "主动",
    "prepare": 75,
    "rate": 0.4,
    "hero": "陈登",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力单体",
      "控制"
    ]
  },
  {
    "id": 43745,
    "name": "舍我其谁",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_387.png",
    "desc": "普攻时，额外对普攻目标造成一次125.0%武力伤害，并且替我方主将分担50%伤害，持续10秒。",
    "descMax": "普攻时，额外对普攻目标造成一次250.0%武力伤害，并且替我方主将分担50%伤害，持续10秒。",
    "type": "连击",
    "rate": 0.1,
    "hero": "程普/典韦",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体",
      "援护"
    ]
  },
  {
    "id": 43699,
    "name": "天义",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_240.png",
    "desc": "普攻时，额外对普攻目标造成一次72.5%武力伤害，目标每有1个负面状态(上限为6个)，则伤害率额外提高17.5%。",
    "descMax": "普攻时，额外对普攻目标造成一次145.0%武力伤害，目标每有1个负面状态(上限为6个)，则伤害率额外提高35.0%。",
    "type": "连击",
    "rate": 0.12,
    "hero": "太史慈",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体"
    ]
  },
  {
    "id": 43700,
    "name": "兵者诡道",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_436.png",
    "desc": "随机对1名敌方武将造成87.5%智力伤害，如果目标处于中毒状态，则对全体敌方武将造成25.0%智力伤害(此次伤害无视目标智力)，技能冷却10秒。",
    "descMax": "随机对1名敌方武将造成175.0%智力伤害，如果目标处于中毒状态，则对全体敌方武将造成50.0%智力伤害(此次伤害无视目标智力)，技能冷却10秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "贾诩",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体"
    ]
  },
  {
    "id": 43734,
    "name": "勇冠三军",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_511.png",
    "desc": "随机对2名敌方武将造成75.0%的武力伤害，如果目标已经处于缴械，则此次伤害额外提高30%，技能冷却20秒。",
    "descMax": "随机对2名敌方武将造成150.0%的武力伤害，如果目标已经处于缴械，则此次伤害额外提高30%，技能冷却20秒。",
    "type": "主动",
    "rate": 0.5,
    "hero": "于禁",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力群体"
    ]
  },
  {
    "id": 43703,
    "name": "风诡云谲",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_323.png",
    "desc": "随机对2名敌方武将造成35.0%智力伤害，并施加风罡(持续风属性智力伤害，总伤害率50.0%)，持续20秒，如果处于大风战场，则50%概率额外使其处于沉默(无法使用主动技能)，持续10秒，技能冷却20秒。",
    "descMax": "随机对2名敌方武将造成70.0%智力伤害，并施加风罡(持续风属性智力伤害，总伤害率100.0%)，持续20秒，如果处于大风战场，则50%概率额外使其处于沉默(无法使用主动技能)，持续10秒，技能冷却20秒。",
    "type": "主动",
    "rate": 0.5,
    "hero": "卞夫人",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体",
      "控制"
    ]
  },
  {
    "id": 43704,
    "name": "釜底抽薪",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_329.png",
    "desc": "随机对2名敌方武将施加沉默(无法使用主动技能)，持续10秒，技能冷却20秒。",
    "descMax": "随机对2名敌方武将施加沉默(无法使用主动技能)，持续10秒，技能冷却20秒。",
    "type": "主动",
    "rate": 0.2,
    "hero": "荀攸（上将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "控制"
    ]
  },
  {
    "id": 43706,
    "name": "强勇胜机",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_401.png",
    "desc": "对敌方智力最高的武将造成120.0%武力伤害，技能冷却10秒。",
    "descMax": "对敌方智力最高的武将造成240.0%武力伤害，技能冷却10秒。",
    "type": "主动",
    "rate": 0.35,
    "hero": "夏侯渊",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体"
    ]
  },
  {
    "id": 43707,
    "name": "八门金锁",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_037.png",
    "desc": "前20秒，提高我方全体武将25.0点武力，50.0%概率使自身及敌方前排1名随机武将处于缚足状态(无法移动)，如果自身攻速小于目标，则缚足失效。",
    "descMax": "前20秒，提高我方全体武将50.0点武力，100.0%概率使自身及敌方前排1名随机武将处于缚足状态(无法移动)，如果自身攻速小于目标，则缚足失效。",
    "type": "指挥",
    "rate": 1,
    "hero": "曹仁",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益",
      "控制"
    ]
  },
  {
    "id": 43746,
    "name": "烽火连天",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_434.png",
    "desc": "随机对2名敌方武将造成80.0%风属性武力伤害，并随机提高2名我方武将10.0%励军(基于造成的武力伤害回复一定兵力)，持续10秒，技能冷却20秒。",
    "descMax": "随机对2名敌方武将造成160.0%风属性武力伤害，并随机提高2名我方武将20.0%励军(基于造成的武力伤害回复一定兵力)，持续10秒，技能冷却20秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "徐晃/张郃",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力群体",
      "增益"
    ]
  },
  {
    "id": 43761,
    "name": "怒目退敌",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_368.png",
    "desc": "普攻时，降低普攻目标50.0点防御，持续10秒，并对其造成95.0%武力伤害。",
    "descMax": "普攻时，降低普攻目标100.0点防御，持续10秒，并对其造成190.0%武力伤害。",
    "type": "连击",
    "rate": 0.1,
    "hero": "许褚",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体",
      "减益"
    ]
  },
  {
    "id": 43708,
    "name": "烈火燎原",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_378.png",
    "desc": "随机对2名敌方武将造成35.0%智力伤害，并对其施加焚烧(持续火属性智力伤害，总伤害率50.0%)，持续20秒，如果处于晴天战场，则40%概率额外对其施加缴械(无法普通攻击)，技能冷却20秒。",
    "descMax": "随机对2名敌方武将造成70.0%智力伤害，并对其施加焚烧(持续火属性智力伤害，总伤害率100.0%)，持续20秒，如果处于晴天战场，则40%概率额外对其施加缴械(无法普通攻击)，技能冷却20秒。",
    "type": "主动",
    "rate": 0.5,
    "hero": "黄月英（上将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体",
      "控制"
    ]
  },
  {
    "id": 43760,
    "name": "缄默无言",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_271.png",
    "desc": "对自身施加免控(免疫所有控制效果)，但降低自身60.0%伤害。",
    "descMax": "对自身施加免控(免疫所有控制效果)，但降低自身30.0%伤害。",
    "type": "被动",
    "rate": 1,
    "hero": "徐庶",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益",
      "减益"
    ]
  },
  {
    "id": 43713,
    "name": "士别三日",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_328.png",
    "desc": "前30秒使自身受到伤害降低20.0%，30秒后提高自身20.0%神算几率(触发时智力伤害翻倍，不可驱散)，持续到战斗结束。",
    "descMax": "前30秒使自身受到伤害降低40.0%，30秒后提高自身40.0%神算几率(触发时智力伤害翻倍，不可驱散)，持续到战斗结束。",
    "type": "被动",
    "rate": 1,
    "hero": "吕蒙",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43714,
    "name": "雄姿英发",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_277.png",
    "desc": "对2名敌方魅力最低的武将造成97.5%智力伤害，如果目标魅力低于自身，则使其受到的智力伤害提高10.0%，持续10秒，反之本次伤害减半，技能冷却20秒。",
    "descMax": "对2名敌方魅力最低的武将造成195.0%智力伤害，如果目标魅力低于自身，则使其受到的智力伤害提高20.0%，持续10秒，反之本次伤害减半，技能冷却20秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "周瑜",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体",
      "减益"
    ]
  },
  {
    "id": 43715,
    "name": "酒池肉林",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_363.png",
    "desc": "普攻时，额外对普攻目标造成一次100.0%武力伤害，此伤害获得50%励军(基于造成的武力伤害回复一定兵力)。",
    "descMax": "普攻时，额外对普攻目标造成一次200.0%武力伤害，此伤害获得50%励军(基于造成的武力伤害回复一定兵力)。",
    "type": "连击",
    "rate": 0.1,
    "hero": "董卓",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体",
      "治疗"
    ]
  },
  {
    "id": 43716,
    "name": "合聚群雄",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_274.png",
    "desc": "当3名我方武将为不同阵营时，提高我方主将12.5%暴击几率(触发时武力伤害翻倍)、神算几率(触发时智力伤害翻倍)，并使副将受到伤害降低12.5%。",
    "descMax": "当3名我方武将为不同阵营时，提高我方主将25.0%暴击几率(触发时武力伤害翻倍)、神算几率(触发时智力伤害翻倍)，并使副将受到伤害降低25.0%。",
    "type": "指挥",
    "rate": 1,
    "hero": "袁绍",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43717,
    "name": "枕戈待旦",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_057.png",
    "desc": "每释放1次主动技能、主将技能后，提高自身10.0%武力伤害(最高叠加5次，可驱散)，持续全场。",
    "descMax": "每释放1次主动技能、主将技能后，提高自身20.0%武力伤害(最高叠加5次，可驱散)，持续全场。",
    "type": "被动",
    "rate": 1,
    "hero": "黄忠",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43718,
    "name": "推波助澜",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_289.png",
    "desc": "对敌方全体武将造成47.5%武力伤害，如果目标已处于水浸，则额外对其施加沉默(无法使用主动技能)，持续10秒，技能冷却20秒。",
    "descMax": "对敌方全体武将造成95.0%武力伤害，如果目标已处于水浸，则额外对其施加沉默(无法使用主动技能)，持续10秒，技能冷却20秒。",
    "type": "主动",
    "rate": 0.5,
    "hero": "甘宁",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力群体",
      "控制"
    ]
  },
  {
    "id": 43728,
    "name": "勇盖天下",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_340.png",
    "desc": "随机对2名敌方武将造成42.5%武力伤害，并降低其20.0%武力，持续20秒，技能冷却20秒。",
    "descMax": "随机对2名敌方武将造成85.0%武力伤害，并降低其40.0%武力，持续20秒，技能冷却20秒。",
    "type": "主动",
    "rate": 0.5,
    "hero": "夏侯惇/孙策",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力群体",
      "减益"
    ]
  },
  {
    "id": 43720,
    "name": "十胜十败",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_439.png",
    "desc": "随机净化(移除目标负面状态)2名我方武将并随机驱散2名敌方武将身上的所有增益状态，每驱散1个增益状态，对该武将造成25.0%智力伤害(上限为125.0%)，技能冷却20秒。",
    "descMax": "随机净化(移除目标负面状态)2名我方武将并随机驱散2名敌方武将身上的所有增益状态，每驱散1个增益状态，对该武将造成50.0%智力伤害(上限为250.0%)，技能冷却20秒。",
    "type": "主动",
    "rate": 0.5,
    "hero": "郭嘉",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体",
      "增益",
      "减益"
    ]
  },
  {
    "id": 43721,
    "name": "西凉铁骑",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_204.png",
    "desc": "前30秒，提高我方全体骑兵武将20.0%武力伤害。",
    "descMax": "前30秒，提高我方全体骑兵武将40.0%武力伤害。",
    "type": "指挥",
    "rate": 1,
    "hero": "马超",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43722,
    "name": "万人之敌",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_401.png",
    "desc": "对敌方全体武将造成55.0%的武力伤害，并使其下一次主动技能伤害降低15.0%，技能冷却20秒。",
    "descMax": "对敌方全体武将造成110.0%的武力伤害，并使其下一次主动技能伤害降低30.0%，技能冷却20秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "张飞",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力群体",
      "减益"
    ]
  },
  {
    "id": 43723,
    "name": "孤勇飞鸾",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_389.png",
    "desc": "普攻时，额外对普攻目标造成一次80.0%武力伤害，并有30%概率对目标施加沉默(无法使用主动技能)，持续10秒(如果目标为异性，则施加沉默概率额外提高20%)。",
    "descMax": "普攻时，额外对普攻目标造成一次160.0%武力伤害，并有30%概率对目标施加沉默(无法使用主动技能)，持续10秒(如果目标为异性，则施加沉默概率额外提高20%)。",
    "type": "连击",
    "rate": 0.12,
    "hero": "孙尚香",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体",
      "控制"
    ]
  },
  {
    "id": 43724,
    "name": "辕门射戟",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_349.png",
    "desc": "对距离自身最远的武将造成75.0%武力伤害，此伤害附加精准(无视闪避、抵挡、盾阵)及35%暴击几率(触发时武力伤害翻倍)，技能冷却10秒。",
    "descMax": "对距离自身最远的武将造成150.0%武力伤害，此伤害附加精准(无视闪避、抵挡、盾阵)及35%暴击几率(触发时武力伤害翻倍)，技能冷却10秒。",
    "type": "主动",
    "rate": 0.5,
    "hero": "吕布",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体"
    ]
  },
  {
    "id": 43725,
    "name": "计略百出",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_314.png",
    "desc": "随机选取2名敌方武将，有70%概率为其施加焚烧、中毒、风罡状态(持续火属性、毒属性、风属性智力伤害，每种状态的总伤害率35.0%，分别判定)，持续10秒，技能冷却10秒。",
    "descMax": "随机选取2名敌方武将，有70%概率为其施加焚烧、中毒、风罡状态(持续火属性、毒属性、风属性智力伤害，每种状态的总伤害率70.0%，分别判定)，持续10秒，技能冷却10秒。",
    "type": "主动",
    "rate": 0.5,
    "hero": "荀彧/于吉",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体"
    ]
  },
  {
    "id": 43726,
    "name": "乱世枭雄",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_101.png",
    "desc": "受到控制时，25.0%概率免控(免疫所有控制效果)；受到伤害时，25.0%概率将受到伤害的50%转移给随机1名友方武将或者敌方武将(第二段效果没有友方武将时失效)。",
    "descMax": "受到控制时，50.0%概率免控(免疫所有控制效果)；受到伤害时，50.0%概率将受到伤害的50%转移给随机1名友方武将或者敌方武将(第二段效果没有友方武将时失效)。",
    "type": "被动",
    "rate": 1,
    "hero": "曹操",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43727,
    "name": "万军取将",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_030.png",
    "desc": "普攻时，额外对普攻目标造成一次87.5%武力伤害，如果目标已经处于沉默，则此次伤害额外提高50%。",
    "descMax": "普攻时，额外对普攻目标造成一次175.0%武力伤害，如果目标已经处于沉默，则此次伤害额外提高50%。",
    "type": "连击",
    "rate": 0.12,
    "hero": "张辽/乐进",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体"
    ]
  },
  {
    "id": 43729,
    "name": "空城计",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_048.png",
    "desc": "前20秒，选取敌方智力最高的2名武将，若目标智力高于其武力，则有40.0%概率对其施加缚足(无法移动)及沉默(无法释放主动技能)。",
    "descMax": "前20秒，选取敌方智力最高的2名武将，若目标智力高于其武力，则有80.0%概率对其施加缚足(无法移动)及沉默(无法释放主动技能)。",
    "type": "指挥",
    "rate": 1,
    "hero": "诸葛亮",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "控制"
    ]
  },
  {
    "id": 43730,
    "name": "黄龙",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_388.png",
    "desc": "对自身及1名友方武将分别随机施加以下其一效果：免控，40%破甲(无视目标一定比例防御及武力减伤)，40%暴击几率(触发时武力伤害翻倍)，40%闪避(触发时令所受伤害无效)，持续10秒，技能冷却10秒；若目标智力属性高于武力，破甲替换为破势(无视目标一定比例智力及智力减伤)，暴击替换为神算(触发时智力伤害翻倍)。",
    "descMax": "对自身及1名友方武将分别随机施加以下其一效果：免控，40%破甲(无视目标一定比例防御及武力减伤)，40%暴击几率(触发时武力伤害翻倍)，40%闪避(触发时令所受伤害无效)，持续10秒，技能冷却10秒；若目标智力属性高于武力，破甲替换为破势(无视目标一定比例智力及智力减伤)，暴击替换为神算(触发时智力伤害翻倍)。",
    "type": "主动",
    "rate": 0.3,
    "hero": "孙权",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43731,
    "name": "固本培元",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_141.png",
    "desc": "对自身及1名友方武将恢复一定兵力(回复率62.5%，受智力影响)，并使其受到武力伤害降低15.0%，持续10秒，技能冷却20秒。",
    "descMax": "对自身及1名友方武将恢复一定兵力(回复率125.0%，受智力影响)，并使其受到武力伤害降低30.0%，持续10秒，技能冷却20秒。",
    "type": "主动",
    "rate": 0.5,
    "hero": "大乔",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "治疗",
      "增益"
    ]
  },
  {
    "id": 43732,
    "name": "惠泽四方",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_390.png",
    "desc": "前30秒，提高自身15.0%闪避(触发时令所受伤害无效)，30秒时对我方全体武将恢复一定兵力(回复率75.0%，受智力影响)。",
    "descMax": "前30秒，提高自身30.0%闪避(触发时令所受伤害无效)，30秒时对我方全体武将恢复一定兵力(回复率150.0%，受智力影响)。",
    "type": "被动",
    "rate": 1,
    "hero": "小乔",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "治疗",
      "增益"
    ]
  },
  {
    "id": 43733,
    "name": "勇者无敌",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_052.png",
    "desc": "普攻时，额外对普攻目标造成一次95.0%武力伤害，并提高自身1.5%连击技能触发概率，持续10秒。",
    "descMax": "普攻时，额外对普攻目标造成一次190.0%武力伤害，并提高自身3.0%连击技能触发概率，持续10秒。",
    "type": "连击",
    "rate": 0.1,
    "hero": "赵云",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体",
      "增益"
    ]
  },
  {
    "id": 43702,
    "name": "水淹七军",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_018.png",
    "desc": "随机对2名敌方武将造成42.5%智力伤害，并施加水浸(持续水属性智力伤害，总伤害率57.5%)，持续20秒；如果处于雨天战场，则50%概率额外对其施加力竭(无法造成伤害)，持续10秒，技能冷却20秒。",
    "descMax": "随机对2名敌方武将造成85.0%智力伤害，并施加水浸(持续水属性智力伤害，总伤害率115.0%)，持续20秒；如果处于雨天战场，则50%概率额外对其施加力竭(无法造成伤害)，持续10秒，技能冷却20秒。",
    "type": "主动",
    "rate": 0.5,
    "hero": "关羽",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体",
      "控制"
    ]
  },
  {
    "id": 43735,
    "name": "厚德载物",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_258.png",
    "desc": "净化(移除目标负面状态)我方兵力最低的武将，并对其恢复一定兵力(回复率85.0%，受智力影响)，技能冷却10秒",
    "descMax": "净化(移除目标负面状态)我方兵力最低的武将，并对其恢复一定兵力(回复率170.0%，受智力影响)，技能冷却10秒",
    "type": "主动",
    "rate": 0.5,
    "hero": "刘备",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "治疗",
      "增益"
    ]
  },
  {
    "id": 43736,
    "name": "平地惊雷",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_168.png",
    "desc": "对敌方全体武将造成50.0%智力伤害，若目标已处于雷暴，则40%概率对其施加眩晕(无法行动，指挥被动无法造成伤害)，持续10秒，技能冷却20秒。",
    "descMax": "对敌方全体武将造成100.0%智力伤害，若目标已处于雷暴，则40%概率对其施加眩晕(无法行动，指挥被动无法造成伤害)，持续10秒，技能冷却20秒。",
    "type": "主动",
    "rate": 0.5,
    "hero": "张角",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体",
      "控制"
    ]
  },
  {
    "id": 43737,
    "name": "移祸江东",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_178.png",
    "desc": "随机选取2名敌方异性武将分别为自身分担15.0%伤害，持续10秒，技能冷却10秒。",
    "descMax": "随机选取2名敌方异性武将分别为自身分担30.0%伤害，持续10秒，技能冷却10秒。",
    "type": "主动",
    "rate": 0.5,
    "hero": "甄姬",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43756,
    "name": "坚如磐石",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_308.png",
    "desc": "对自身施加免疫暴击，并提高我方全体武将50.0点防御。",
    "descMax": "对自身施加免疫暴击，并提高我方全体武将100.0点防御。",
    "type": "指挥",
    "rate": 1,
    "hero": "孟获",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43738,
    "name": "修生养息",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_385.png",
    "desc": "每10秒对自身恢复一定兵力(回复率45.0%)。",
    "descMax": "每10秒对自身恢复一定兵力(回复率90.0%)。",
    "type": "被动",
    "rate": 1,
    "hero": "华佗",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "治疗"
    ]
  },
  {
    "id": 43739,
    "name": "明政",
    "grade": "B",
    "gradeNum": 2,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_229.png",
    "desc": "提高自身10.0点政治。",
    "descMax": "提高自身20.0点政治。",
    "type": "内政",
    "rate": 1,
    "hero": "蒋干",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "内政"
    ]
  },
  {
    "id": 43742,
    "name": "匠心",
    "grade": "B",
    "gradeNum": 2,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_239.png",
    "desc": "武将委任为冶金官时，提高1.0%铁矿产量。",
    "descMax": "武将委任为冶金官时，提高2.0%铁矿产量。",
    "type": "内政",
    "rate": 1,
    "hero": "韩馥",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "内政"
    ]
  },
  {
    "id": 43741,
    "name": "采伐",
    "grade": "B",
    "gradeNum": 2,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_225.png",
    "desc": "武将委任为林业官时，提高1.0%木材产量。",
    "descMax": "武将委任为林业官时，提高2.0%木材产量。",
    "type": "内政",
    "rate": 1,
    "hero": "曹安民",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "内政"
    ]
  },
  {
    "id": 43743,
    "name": "采掘",
    "grade": "B",
    "gradeNum": 2,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_249.png",
    "desc": "武将委任为石匠官时，提高1.0%石料产量。",
    "descMax": "武将委任为石匠官时，提高2.0%石料产量。",
    "type": "内政",
    "rate": 1,
    "hero": "刘繇",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "内政"
    ]
  },
  {
    "id": 43744,
    "name": "吉运",
    "grade": "B",
    "gradeNum": 2,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_222.png",
    "desc": "提高自身10.0点魅力。",
    "descMax": "提高自身20.0点魅力。",
    "type": "内政",
    "rate": 1,
    "hero": "王睿",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "内政"
    ]
  },
  {
    "id": 43740,
    "name": "丰收",
    "grade": "B",
    "gradeNum": 2,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_230.png",
    "desc": "武将委任为督粮官时，提高1.0%粮食产量。",
    "descMax": "武将委任为督粮官时，提高2.0%粮食产量。",
    "type": "内政",
    "rate": 1,
    "hero": "毌丘俭",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "内政"
    ]
  },
  {
    "id": 43750,
    "name": "合刃斗莽",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_451.png",
    "desc": "提高自身25.0%励军(基于造成的武力伤害回复一定兵力)、50.0点攻速，但使自身受到的智力伤害提高30%，持续20秒，冷却20秒。",
    "descMax": "提高自身50.0%励军(基于造成的武力伤害回复一定兵力)、100.0点攻速，但使自身受到的智力伤害提高30%，持续20秒，冷却20秒。",
    "type": "主动",
    "rate": 0.6,
    "hero": "祝融/魏延",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益",
      "减益"
    ]
  },
  {
    "id": 43762,
    "name": "迅雷风烈",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_292.png",
    "desc": "随机对2名敌方武将施加雷暴(持续雷属性智力伤害，总伤害率75.0%)，持续10秒，技能冷却10秒。",
    "descMax": "随机对2名敌方武将施加雷暴(持续雷属性智力伤害，总伤害率150.0%)，持续10秒，技能冷却10秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "朵思",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体"
    ]
  },
  {
    "id": 43747,
    "name": "倾世朱颜",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_382.png",
    "desc": "提高我方女性主将10.0%伤害，使女性副将受到来自敌方男性武将的伤害降低10.0%。",
    "descMax": "提高我方女性主将20.0%伤害，使女性副将受到来自敌方男性武将的伤害降低20.0%。",
    "type": "指挥",
    "rate": 1,
    "hero": "貂蝉",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43748,
    "name": "鹰视狼顾",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_467.png",
    "desc": "随机对2名敌方武将造成72.5%的智力伤害，如果命中敌方主将，则对敌方主将施加沉默(无法使用主动技能)，持续10秒，技能冷却20秒。",
    "descMax": "随机对2名敌方武将造成145.0%的智力伤害，如果命中敌方主将，则对敌方主将施加沉默(无法使用主动技能)，持续10秒，技能冷却20秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "司马懿",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体",
      "控制"
    ]
  },
  {
    "id": 43749,
    "name": "火烈风威",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_374.png",
    "desc": "随机对2名敌方武将造成102.5%火属性智力伤害，其中造成伤害15%转为自身的兵力，处于大风战场时额外提高15%，技能冷却20秒。",
    "descMax": "随机对2名敌方武将造成205.0%火属性智力伤害，其中造成伤害15%转为自身的兵力，处于大风战场时额外提高15%，技能冷却20秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "陆逊",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体",
      "治疗"
    ]
  },
  {
    "id": 43759,
    "name": "金蝉脱壳",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_469.png",
    "desc": "随机净化(移除目标负面状态)2名我方武将，50.0%概率使其获得1次抵挡(免疫1次主动技能、连击技能伤害)，技能冷却20秒。",
    "descMax": "随机净化(移除目标负面状态)2名我方武将，100.0%概率使其获得1次抵挡(免疫1次主动技能、连击技能伤害)，技能冷却20秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "左慈",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43751,
    "name": "文武兼攻",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_417.png",
    "desc": "对敌方武将造成一次75.0%的武力伤害和一次75.0%智力伤害，每次攻击的目标独立判定，技能冷却10秒。",
    "descMax": "对敌方武将造成一次150.0%的武力伤害和一次150.0%智力伤害，每次攻击的目标独立判定，技能冷却10秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "凌统",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力单体",
      "武力单体"
    ]
  },
  {
    "id": 43752,
    "name": "雄才锐武",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_319.png",
    "desc": "自身触发连击技能造成伤害后，提高自身15.0点攻速，触发主动技能、主将技能造成武力伤害、智力伤害后分别提高自身15.0点武力、智力(可叠加5次，可驱散)，持续全场。",
    "descMax": "自身触发连击技能造成伤害后，提高自身30.0点攻速，触发主动技能、主将技能造成武力伤害、智力伤害后分别提高自身30.0点武力、智力(可叠加5次，可驱散)，持续全场。",
    "type": "被动",
    "rate": 1,
    "hero": "邓艾",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43753,
    "name": "焚心以火",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_445.png",
    "desc": "对2名敌方智力最低的武将造成70.0%火属性智力伤害，技能冷却10秒。",
    "descMax": "对2名敌方智力最低的武将造成140.0%火属性智力伤害，技能冷却10秒。",
    "type": "主动",
    "rate": 0.35,
    "hero": "庞统",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体"
    ]
  },
  {
    "id": 43754,
    "name": "好善乐施",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_453.png",
    "desc": "将自身智力、武力、防御的10.0%转移给当前兵力最低友方武将，并使其受到智力伤害降低20.0%，持续20秒，技能冷却20秒。",
    "descMax": "将自身智力、武力、防御的20.0%转移给当前兵力最低友方武将，并使其受到智力伤害降低40.0%，持续20秒，技能冷却20秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "鲁肃",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43701,
    "name": "诈兵之计",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_288.png",
    "desc": "对2名兵力最低的敌方武将施加溃散(持续武力伤害，总伤害率100.0%)，持续10秒，如果目标已处于溃散，则驱散其身上的所有增益状态，技能冷却20秒。",
    "descMax": "对2名兵力最低的敌方武将施加溃散(持续武力伤害，总伤害率200.0%)，持续10秒，如果目标已处于溃散，则驱散其身上的所有增益状态，技能冷却20秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "何进",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力群体",
      "减益"
    ]
  },
  {
    "id": 43757,
    "name": "先声夺人",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_226.png",
    "desc": "我方全体枪兵武将触发连击伤害前，偷取敌方目标25.0点武力和防御，持续10秒，可叠加2次。",
    "descMax": "我方全体枪兵武将触发连击伤害前，偷取敌方目标50.0点武力和防御，持续10秒，可叠加2次。",
    "type": "指挥",
    "rate": 1,
    "hero": "马云禄（上将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益",
      "减益"
    ]
  },
  {
    "id": 43758,
    "name": "却敌强勇",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_316.png",
    "desc": "受到连击技能攻击后，提高自身50.0点防御，持续10秒；如果自身为副将，则降低攻击者15.0%伤害，持续10秒。",
    "descMax": "受到连击技能攻击后，提高自身100.0点防御，持续10秒；如果自身为副将，则降低攻击者30.0%伤害，持续10秒。",
    "type": "被动",
    "rate": 1,
    "hero": "严颜",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益",
      "减益"
    ]
  },
  {
    "id": 43763,
    "name": "水无常形",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_289.png",
    "desc": "随机对2名敌方武将施加水浸(持续水属性智力伤害，总伤害率75.0%)，持续10秒，技能冷却10秒。",
    "descMax": "随机对2名敌方武将施加水浸(持续水属性智力伤害，总伤害率150.0%)，持续10秒，技能冷却10秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "吴国太（上将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体"
    ]
  },
  {
    "id": 40792,
    "name": "攻城步兵",
    "grade": "B",
    "gradeNum": 2,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_391.png",
    "desc": "提高武将45.0点攻城值，步兵攻城时额外携带投石车，数量为步兵数量的55.0%",
    "descMax": "提高武将90.0点攻城值，步兵攻城时额外携带投石车，数量为步兵数量的100.0%",
    "type": "指挥",
    "rate": 1,
    "hero": "/",
    "troops": [
      "步兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 40793,
    "name": "攻城枪兵",
    "grade": "B",
    "gradeNum": 2,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_392.png",
    "desc": "提高武将45.0点攻城值，枪兵攻城时额外携带投石车，数量为枪兵数量的55.0%",
    "descMax": "提高武将90.0点攻城值，枪兵攻城时额外携带投石车，数量为枪兵数量的100.0%",
    "type": "指挥",
    "rate": 1,
    "hero": "/",
    "troops": [
      "枪兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 40794,
    "name": "攻城弓兵",
    "grade": "B",
    "gradeNum": 2,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_393.png",
    "desc": "提高武将45.0点攻城值，弓兵攻城时额外携带投石车，数量为弓兵数量的55.0%",
    "descMax": "提高武将90.0点攻城值，弓兵攻城时额外携带投石车，数量为弓兵数量的100.0%",
    "type": "指挥",
    "rate": 1,
    "hero": "/",
    "troops": [
      "弓兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43614,
    "name": "横戈震魄",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_428.png",
    "desc": "随机降低1名敌方武将50.0点防御，持续10秒，并对其造成107.5%武力伤害，技能冷却20秒。",
    "descMax": "随机降低1名敌方武将100.0点防御，持续10秒，并对其造成215.0%武力伤害，技能冷却20秒。",
    "type": "主动",
    "prepare": 97,
    "rate": 0.4,
    "hero": "关兴（上将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体",
      "减益"
    ]
  },
  {
    "id": 43616,
    "name": "尧趋舜步",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_486.png",
    "desc": "随机驱散1名敌方武将身上的所有增益状态，使我方全体武将分别有20.0%概率(每驱散1个正面状态，概率提高5.0%)获得1次抵挡(免疫1次主动技能、连击技能伤害)，技能冷却20秒。",
    "descMax": "随机驱散1名敌方武将身上的所有增益状态，使我方全体武将分别有40.0%概率(每驱散1个正面状态，概率提高10.0%)获得1次抵挡(免疫1次主动技能、连击技能伤害)，技能冷却20秒。",
    "type": "主动",
    "prepare": 271,
    "rate": 0.4,
    "hero": "刘虞",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益",
      "减益"
    ]
  },
  {
    "id": 43769,
    "name": "孤掌难鸣",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_423.png",
    "desc": "普攻时，额外对普攻目标造成一次107.5%智力伤害，并对其施加禁疗(无法回复兵力)，持续10秒。",
    "descMax": "普攻时，额外对普攻目标造成一次215.0%智力伤害，并对其施加禁疗(无法回复兵力)，持续10秒。",
    "type": "连击",
    "rate": 0.1,
    "hero": "朱儁（上将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力单体",
      "减益"
    ]
  },
  {
    "id": 43615,
    "name": "鹰击长空",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_404.png",
    "desc": "每次触发连击技能后，50%概率提高自身10.0%连击技能的伤害，持续全场(最多叠加4次，可驱散)。",
    "descMax": "每次触发连击技能后，50%概率提高自身20.0%连击技能的伤害，持续全场(最多叠加4次，可驱散)。",
    "type": "被动",
    "prepare": 98,
    "rate": 1,
    "hero": "张苞（上将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43617,
    "name": "穷武追命",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_423.png",
    "desc": "普攻时，额外对普攻目标造成一次92.5%武力伤害，如果目标已经处于溃散状态，则伤害额外提高30%。",
    "descMax": "普攻时，额外对普攻目标造成一次185.0%武力伤害，如果目标已经处于溃散状态，则伤害额外提高30%。",
    "type": "连击",
    "prepare": 272,
    "rate": 0.1,
    "hero": "孟优（上将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体"
    ]
  },
  {
    "id": 43768,
    "name": "贯颐奋戟",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_423.png",
    "desc": "普攻时，使普攻目标受到武力伤害提高15.0%，持续10秒，并对其造成一次82.5%武力伤害。",
    "descMax": "普攻时，使普攻目标受到武力伤害提高30.0%，持续10秒，并对其造成一次165.0%武力伤害。",
    "type": "连击",
    "rate": 0.1,
    "hero": "关平（上将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体",
      "减益"
    ]
  },
  {
    "id": 43764,
    "name": "以义显名",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_538.png",
    "desc": "前30秒替我方主将分担50%的伤害，每10秒恢复自身一定兵力(恢复率为50.0%，受智力影响)，30秒后，提高自身50.0点战斗属性(武力、智力、防御和攻速)，持续全场。此技能身为副将时生效。",
    "descMax": "前30秒替我方主将分担50%的伤害，每10秒恢复自身一定兵力(恢复率为100.0%，受智力影响)，30秒后，提高自身100.0点战斗属性(武力、智力、防御和攻速)，持续全场。此技能身为副将时生效。",
    "type": "被动",
    "rate": 1,
    "hero": "公孙瓒",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益",
      "援护",
      "治疗"
    ]
  },
  {
    "id": 43765,
    "name": "不屈之身",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_536.png",
    "desc": "每次受到主动或连击技能伤害后，提高自身5.0%武力伤害(最高叠加7层)，持续20秒。",
    "descMax": "每次受到主动或连击技能伤害后，提高自身10.0%武力伤害(最高叠加7层)，持续20秒。",
    "type": "被动",
    "rate": 1,
    "hero": "周泰",
    "troops": [
      "步兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43766,
    "name": "趋利避害",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_547.png",
    "desc": "选取我方智力最低的武将，使其对随机2名敌方武将造成72.5%武力伤害，技能冷却20秒。",
    "descMax": "选取我方智力最低的武将，使其对随机2名敌方武将造成145.0%武力伤害，技能冷却20秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "陈宫",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力群体"
    ]
  },
  {
    "id": 43767,
    "name": "冲陈绝埃",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_516.png",
    "desc": "普攻时，额外对普攻目标造成一次92.5%武力伤害，此次伤害具有溅射效果(对目标附近的敌方武将造成一定伤害，溅射率50%)。",
    "descMax": "普攻时，额外对普攻目标造成一次185.0%武力伤害，此次伤害具有溅射效果(对目标附近的敌方武将造成一定伤害，溅射率50%)。",
    "type": "连击",
    "rate": 0.1,
    "hero": "马腾",
    "troops": [
      "骑兵"
    ],
    "tags": [
      "武力单体"
    ]
  },
  {
    "id": 43770,
    "name": "陷阵强军",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_411.png",
    "desc": "我方进攻时，提高我方全体步兵武将10.0%破甲(无视目标一定比例防御及武力减伤)、10.0%励军(基于造成的武力伤害回复一定兵力)。",
    "descMax": "我方进攻时，提高我方全体步兵武将20.0%破甲(无视目标一定比例防御及武力减伤)、20.0%励军(基于造成的武力伤害回复一定兵力)。",
    "type": "指挥",
    "rate": 1,
    "hero": "高顺",
    "troops": [
      "步兵"
    ],
    "tags": [
      "增益",
      "治疗"
    ]
  },
  {
    "id": 43771,
    "name": "通智令昏",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_531.png",
    "desc": "随机降低1名敌方武将50.0点智力，持续10秒，并对其造成112.5%智力伤害，有概率(目标智力被降低比例越高，控制概率越高)使其眩晕(无法行动，指挥被动无法造成伤害)，持续10秒，技能冷却10秒。",
    "descMax": "随机降低1名敌方武将100.0点智力，持续10秒，并对其造成225.0%智力伤害，有概率(目标智力被降低比例越高，控制概率越高)使其眩晕(无法行动，指挥被动无法造成伤害)，持续10秒，技能冷却10秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "黄月英（名将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力单体",
      "减益",
      "控制"
    ]
  },
  {
    "id": 43772,
    "name": "敲山震虎",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_523.png",
    "desc": "普攻时，额外对普攻目标造成一次62.5%武力伤害，使自身受到武力伤害降低5.0%，持续全场(可叠加5次)。",
    "descMax": "普攻时，额外对普攻目标造成一次125.0%武力伤害，使自身受到武力伤害降低10.0%，持续全场(可叠加5次)。",
    "type": "连击",
    "rate": 0.1,
    "hero": "马云禄（名将）",
    "troops": [
      "骑兵"
    ],
    "tags": [
      "武力单体",
      "增益"
    ]
  },
  {
    "id": 43773,
    "name": "审时度势",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_541.png",
    "desc": "自身主动技能、连击技能施加的状态有35.0%概率延长10秒持续时间。",
    "descMax": "自身主动技能、连击技能施加的状态有70.0%概率延长10秒持续时间。",
    "type": "被动",
    "rate": 1,
    "hero": "程昱",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43774,
    "name": "严阵以待",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_537.png",
    "desc": "对我方兵力最少的武将施加1个盾阵(击破盾阵前无法对其造成伤害，吸收率为172.5%，受智力影响，免疫持续性伤害状态)，持续20秒，技能冷却20秒。",
    "descMax": "对我方兵力最少的武将施加1个盾阵(击破盾阵前无法对其造成伤害，吸收率为345.0%，受智力影响，免疫持续性伤害状态)，持续20秒，技能冷却20秒。",
    "type": "主动",
    "rate": 0.5,
    "hero": "卢植",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43775,
    "name": "输攻墨守",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_548.png",
    "desc": "2名友方非步兵武将每次受到普攻后，自身有20%概率对该敌方武将造成30.0%武力伤害。",
    "descMax": "2名友方非步兵武将每次受到普攻后，自身有20%概率对该敌方武将造成60.0%武力伤害。",
    "type": "被动",
    "rate": 1,
    "hero": "郝昭",
    "troops": [
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体"
    ]
  },
  {
    "id": 50542,
    "name": "草船借箭",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_554.png",
    "desc": "自身受到主将技、主动技能、连击技能伤害后，提高2名友方弓兵武将下1次主动技能伤害20.0%，持续20秒。",
    "descMax": "自身受到主将技、主动技能、连击技能伤害后，提高2名友方弓兵武将下1次主动技能伤害40.0%，持续20秒。",
    "type": "指挥",
    "rate": 1,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 50543,
    "name": "千里奔袭",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_555.png",
    "desc": "普攻时，额外对普攻目标造成3次35.0%武力伤害。",
    "descMax": "普攻时，额外对普攻目标造成3次70.0%武力伤害。",
    "type": "连击",
    "rate": 0.1,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体"
    ]
  },
  {
    "id": 50544,
    "name": "代僵振旅",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_539.png",
    "desc": "对我方防御最高的武将造成50%武力伤害，并恢复我方全体一定兵力(恢复率45.0%，受智力影响)，技能冷却10秒。",
    "descMax": "对我方防御最高的武将造成50%武力伤害，并恢复我方全体一定兵力(恢复率90.0%，受智力影响)，技能冷却10秒。",
    "type": "主动",
    "rate": 0.5,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体",
      "治疗"
    ]
  },
  {
    "id": 50545,
    "name": "温酒斩将",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_559.png",
    "desc": "提高自身15.0%伤害和破甲(无视目标一定比例防御及武力减伤)，每10秒伤害提升和破甲效果降低三分之一，最多降低至0。如果在降低至0之前我方任意武将击杀敌方任一武将，则重置该效果。",
    "descMax": "提高自身30.0%伤害和破甲(无视目标一定比例防御及武力减伤)，每10秒伤害提升和破甲效果降低三分之一，最多降低至0。如果在降低至0之前我方任意武将击杀敌方任一武将，则重置该效果。",
    "type": "被动",
    "rate": 1,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 50546,
    "name": "扫穴擒渠",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_557.png",
    "desc": "对敌方主将施加力竭(无法造成伤害)，持续10秒，技能冷却20秒。",
    "descMax": "对敌方主将施加力竭(无法造成伤害)，持续10秒，技能冷却20秒。",
    "type": "主动",
    "rate": 0.2,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "控制"
    ]
  },
  {
    "id": 50547,
    "name": "鸣鼓夜袭",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_535.png",
    "desc": "随机对2名敌方武将造成72.5%武力伤害，如果目标已经处于风罡，则此次伤害提高30%，技能冷却20秒。",
    "descMax": "随机对2名敌方武将造成145.0%武力伤害，如果目标已经处于风罡，则此次伤害提高30%，技能冷却20秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力群体"
    ]
  },
  {
    "id": 50588,
    "name": "偃月阵",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_560.png",
    "desc": "方圆阵进阶阵法，除方圆阵效果外，前60秒，随机选取1名我方前排弓兵武将，提高其50.0点防御、17.5%闪避(触发时令所受伤害无效)，并且免疫惧近惩罚效果。",
    "descMax": "方圆阵进阶阵法，除方圆阵效果外，前60秒，随机选取1名我方前排弓兵武将，提高其100.0点防御、35.0%闪避(触发时令所受伤害无效)，并且免疫惧近惩罚效果。",
    "type": "阵型",
    "rate": 1,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 50589,
    "name": "车悬阵",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_561.png",
    "desc": "锋矢阵进阶阵法，除锋矢阵效果外，提高我方全体骑兵武将25.0点攻速；我方全体骑兵如果没有同列的敌方武将，则选取1名距离自身最近的敌方后排武将进行奇袭，并提高奇袭武将10.0%连击伤害。",
    "descMax": "锋矢阵进阶阵法，除锋矢阵效果外，提高我方全体骑兵武将50.0点攻速；我方全体骑兵如果没有同列的敌方武将，则选取1名距离自身最近的敌方后排武将进行奇袭，并提高奇袭武将20.0%连击伤害。",
    "type": "阵型",
    "rate": 1,
    "hero": "/",
    "troops": [
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 50638,
    "name": "谋定而动",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_556.png",
    "desc": "2名友方武将的所有主动技能增加10秒冷却时间，但主动技能、主将技伤害提高20.0%；雾天时，主动技能伤害额外提高10.0%。",
    "descMax": "2名友方武将的所有主动技能增加10秒冷却时间，但主动技能、主将技伤害提高40.0%；雾天时，主动技能伤害额外提高20.0%。",
    "type": "兵法",
    "rate": 1,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益",
      "减益"
    ]
  },
  {
    "id": 50639,
    "name": "后发制人",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_558.png",
    "desc": "战斗开始30秒后，提高我方随机2名武将15.0%主动技能伤害，此后每10秒额外提高5.0%主动技能伤害，最多叠加4次。",
    "descMax": "战斗开始30秒后，提高我方随机2名武将30.0%主动技能伤害，此后每10秒额外提高10.0%主动技能伤害，最多叠加4次。",
    "type": "兵法",
    "rate": 1,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43779,
    "name": "威刑肃正",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_586.png",
    "desc": "随机对2名敌方武将造成75.0%雷属性智力伤害，并对自身施加1次抵挡(免疫1次主动技能、连击技能伤害)，技能冷却20秒。",
    "descMax": "随机对2名敌方武将造成150.0%雷属性智力伤害，并对自身施加1次抵挡(免疫1次主动技能、连击技能伤害)，技能冷却20秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "法正",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体",
      "增益"
    ]
  },
  {
    "id": 43780,
    "name": "沉机观变",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_563.png",
    "desc": "对全体敌方武将造成75.0%智力伤害，并使我方兵力最低的武将受到治疗效果提升50%，持续20秒，技能冷却20秒。",
    "descMax": "对全体敌方武将造成150.0%智力伤害，并使我方兵力最低的武将受到治疗效果提升50%，持续20秒，技能冷却20秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "钟会",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体",
      "增益"
    ]
  },
  {
    "id": 43781,
    "name": "猛虎添翼",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_584.png",
    "desc": "提高自身一定的武力伤害(提高的数值为此时自身闪避率的50%)，持续10秒，并随机对2名敌方武将造成82.5%武力伤害，技能冷却20秒。",
    "descMax": "提高自身一定的武力伤害(提高的数值为此时自身闪避率的50%)，持续10秒，并随机对2名敌方武将造成165.0%武力伤害，技能冷却20秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "关银屏",
    "troops": [
      "步兵"
    ],
    "tags": [
      "武力群体",
      "增益"
    ]
  },
  {
    "id": 43776,
    "name": "合军共济",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_571.png",
    "desc": "当3名我方武将为不同阵营时，我方主将对其余阵营的敌方武将造成的伤害可以附加25.0%励军(基于造成的武力伤害回复一定兵力)；2名副将彼此平分伤害，且受到伤害降低12.5%(敌方武将如果与我方两名副将阵营不同，则造成的伤害不受到减伤影响)，与武技合聚群雄不能共存。",
    "descMax": "当3名我方武将为不同阵营时，我方主将对其余阵营的敌方武将造成的伤害可以附加50.0%励军(基于造成的武力伤害回复一定兵力)；2名副将彼此平分伤害，且受到伤害降低25.0%(敌方武将如果与我方两名副将阵营不同，则造成的伤害不受到减伤影响)，与武技合聚群雄不能共存。",
    "type": "指挥",
    "rate": 1,
    "hero": "刘禅",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益",
      "治疗"
    ]
  },
  {
    "id": 43777,
    "name": "捷足先登",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_579.png",
    "desc": "每消失1个正面状态(仅包括倒计时结束和状态刷新时，不包括状态被驱散时)，随机对1名敌方武将造成37.5%武力伤害，每10秒最多触发4次。",
    "descMax": "每消失1个正面状态(仅包括倒计时结束和状态刷新时，不包括状态被驱散时)，随机对1名敌方武将造成75.0%武力伤害，每10秒最多触发4次。",
    "type": "被动",
    "rate": 1,
    "hero": "张燕",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体"
    ]
  },
  {
    "id": 43784,
    "name": "狐假虎威",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_573.png",
    "desc": "随机对2名敌方武将造成117.5%的智力伤害，但提高其20%武力伤害，持续10秒，技能冷却20秒。",
    "descMax": "随机对2名敌方武将造成235.0%的智力伤害，但提高其20%武力伤害，持续10秒，技能冷却20秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "曹叡",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体",
      "增益"
    ]
  },
  {
    "id": 43778,
    "name": "谟谋守谦",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_585.png",
    "desc": "普攻时，降低普攻目标50.0点智力，持续10秒，并对其造成95.0%智力伤害。",
    "descMax": "普攻时，降低普攻目标100.0点智力，持续10秒，并对其造成190.0%智力伤害。",
    "type": "连击",
    "rate": 0.1,
    "hero": "陆抗",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力单体",
      "减益"
    ]
  },
  {
    "id": 43785,
    "name": "伐盈补虚",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_564.png",
    "desc": "随机对2名异性敌方武将造成70.0%智力伤害，且随机对2名同性我方武将恢复一定兵力(回复率70.0%，受智力影响)，技能冷却20秒。",
    "descMax": "随机对2名异性敌方武将造成140.0%智力伤害，且随机对2名同性我方武将恢复一定兵力(回复率140.0%，受智力影响)，技能冷却20秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "步练师",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体",
      "治疗"
    ]
  },
  {
    "id": 50590,
    "name": "坚城御裹",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_597.png",
    "desc": "前60秒，降低敌方全体武将50.0%神算伤害，且我方武将受到神算伤害后(不包括持续性伤害触发的神算)，随机选取2名我方武将，提高其5.0%暴击几率(触发时武力伤害翻倍)，持续20秒，可叠加3层。",
    "descMax": "前60秒，降低敌方全体武将100.0%神算伤害，且我方武将受到神算伤害后(不包括持续性伤害触发的神算)，随机选取2名我方武将，提高其10.0%暴击几率(触发时武力伤害翻倍)，持续20秒，可叠加3层。",
    "type": "兵法",
    "rate": 1,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益",
      "减益"
    ]
  },
  {
    "id": 50640,
    "name": "避实击虚",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_587.png",
    "desc": "随机选取1名敌方后排武将对其进行奇袭(不受阵型规则约束，直接朝其普攻)，且提高自身10.0%连击暴击几率、10.0%闪避，持续20秒。",
    "descMax": "随机选取1名敌方后排武将对其进行奇袭(不受阵型规则约束，直接朝其普攻)，且提高自身20.0%连击暴击几率、20.0%闪避，持续20秒。",
    "type": "被动",
    "rate": 1,
    "hero": "/",
    "troops": [
      "步兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 50548,
    "name": "黄天化道",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_574.png",
    "desc": "随机对2名敌方武将造成70.0%雷属性智力伤害，并对处于雷暴状态的敌方武将造成70.0%雷属性智力伤害，如果没有处于雷暴状态的敌方武将，则随机选取1名敌方武将对其造成相同雷属性智力伤害，技能冷却20秒。",
    "descMax": "随机对2名敌方武将造成140.0%雷属性智力伤害，并对处于雷暴状态的敌方武将造成140.0%雷属性智力伤害，如果没有处于雷暴状态的敌方武将，则随机选取1名敌方武将对其造成相同雷属性智力伤害，技能冷却20秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体"
    ]
  },
  {
    "id": 50549,
    "name": "夺气攻心",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_570.png",
    "desc": "普攻时，使普攻目标受到智力伤害提高15.0%，持续10秒，并对其造成一次82.5%智力伤害。",
    "descMax": "普攻时，使普攻目标受到智力伤害提高30.0%，持续10秒，并对其造成一次165.0%智力伤害。",
    "type": "连击",
    "rate": 0.1,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力单体",
      "减益"
    ]
  },
  {
    "id": 50550,
    "name": "火烧新野",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_576.png",
    "desc": "自身及1名友方智力最高的武将每释放一次主动技能、主将技能后会提高其自身5.0%神算(可驱散，最高叠加3次)，持续20秒，并有50%概率随机对1名敌方武将造成50.0%火属性智力伤害。",
    "descMax": "自身及1名友方智力最高的武将每释放一次主动技能、主将技能后会提高其自身10.0%神算(可驱散，最高叠加3次)，持续20秒，并有50%概率随机对1名敌方武将造成100.0%火属性智力伤害。",
    "type": "指挥",
    "rate": 1,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益",
      "智力单体"
    ]
  },
  {
    "id": 50551,
    "name": "负弩摧舟",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_581.png",
    "desc": "提高自身的天生自带主动技能40.0%武力伤害，且该技能每造成1段伤害后可以提高自身5.0%暴击几率(触发时武力伤害翻倍)，持续20秒，可叠加2次。",
    "descMax": "提高自身的天生自带主动技能80.0%武力伤害，且该技能每造成1段伤害后可以提高自身10.0%暴击几率(触发时武力伤害翻倍)，持续20秒，可叠加2次。",
    "type": "被动",
    "rate": 1,
    "hero": "/",
    "troops": [
      "弓兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43783,
    "name": "风仪辩巧",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_565.png",
    "desc": "随机对2名敌方武将造成75.0%智力伤害，且对自身施加免疫沉默，持续20秒，技能冷却20秒。",
    "descMax": "随机对2名敌方武将造成150.0%智力伤害，且对自身施加免疫沉默，持续20秒，技能冷却20秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "简雍",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体",
      "增益"
    ]
  },
  {
    "id": 43786,
    "name": "博闻范策",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_603.png",
    "desc": "自身随机选取1个友方武将的主动技能，释放此主动技能，技能冷却10秒(即使释放的主动技能的冷却时间为20秒)。",
    "descMax": "自身随机选取1个友方武将的主动技能，释放此主动技能，技能冷却10秒(即使释放的主动技能的冷却时间为20秒)。",
    "type": "主动",
    "rate": 0.2,
    "hero": "司马徽",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43787,
    "name": "攻凌发矢",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_606.png",
    "desc": "降低兵力最低的敌方武将50.0点防御，持续10秒，并对其造成95.0%武力伤害，技能冷却10秒。",
    "descMax": "降低兵力最低的敌方武将100.0点防御，持续10秒，并对其造成190.0%武力伤害，技能冷却10秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "吕玲绮",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "减益",
      "武力单体"
    ]
  },
  {
    "id": 43788,
    "name": "笔落生花",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_602.png",
    "desc": "自身每造成1段智力伤害后(不包括普攻及持续性伤害)，提高自身5.0%智力伤害(最高叠加10次，可驱散)，持续全场。",
    "descMax": "自身每造成1段智力伤害后(不包括普攻及持续性伤害)，提高自身10.0%智力伤害(最高叠加10次，可驱散)，持续全场。",
    "type": "被动",
    "rate": 1,
    "hero": "曹植",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43789,
    "name": "敛威摄勇",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_611.png",
    "desc": "对全体敌方武将造成70.0%武力伤害，如果目标处于沉默、缴械、力竭状态，此次伤害额外提高50%，技能冷却20秒。",
    "descMax": "对全体敌方武将造成140.0%武力伤害，如果目标处于沉默、缴械、力竭状态，此次伤害额外提高50%，技能冷却20秒。",
    "type": "主动",
    "rate": 0.35,
    "hero": "高览",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力群体"
    ]
  },
  {
    "id": 43790,
    "name": "筛金鼓骇",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_615.png",
    "desc": "前30秒，选取敌方主将及随机1名敌方副将，40.0%概率对其施加虚弱(主动技能、主将技能造成伤害时，目标身上的增伤状态和技能增伤效果无效)。",
    "descMax": "前30秒，选取敌方主将及随机1名敌方副将，80.0%概率对其施加虚弱(主动技能、主将技能造成伤害时，目标身上的增伤状态和技能增伤效果无效)。",
    "type": "指挥",
    "rate": 1,
    "hero": "木鹿",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "减益"
    ]
  },
  {
    "id": 43791,
    "name": "纳叛攻心",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_612.png",
    "desc": "我方全体男性武将对女性武将造成伤害额外提高25.0%，对女性武将造成主动、主将、连击技能伤害后(不包括持续性伤害)，70%概率偷取其50.0点智力或武力，持续10秒。",
    "descMax": "我方全体男性武将对女性武将造成伤害额外提高50.0%，对女性武将造成主动、主将、连击技能伤害后(不包括持续性伤害)，70%概率偷取其100.0点智力或武力，持续10秒。",
    "type": "指挥",
    "rate": 1,
    "hero": "灵帝",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益",
      "减益"
    ]
  },
  {
    "id": 43792,
    "name": "征雷请雨",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_627.png",
    "desc": "对拥有雷暴状态的敌方武将造成60.0%雷属性智力伤害，并且造成的每段伤害可以恢复我方兵力最低的武将，技能冷却20秒。",
    "descMax": "对拥有雷暴状态的敌方武将造成120.0%雷属性智力伤害，并且造成的每段伤害可以恢复我方兵力最低的武将，技能冷却20秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "张宁",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体",
      "治疗"
    ]
  },
  {
    "id": 50555,
    "name": "义战同光",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_625.png",
    "desc": "普攻时，提高自身30%武力伤害，持续10秒，并额外对普攻目标造成一次92.5%武力伤害。",
    "descMax": "普攻时，提高自身30%武力伤害，持续10秒，并额外对普攻目标造成一次185.0%武力伤害。",
    "type": "连击",
    "rate": 0.1,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体",
      "增益"
    ]
  },
  {
    "id": 50552,
    "name": "石门八卦",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_616.png",
    "desc": "使敌方3名武将，每名武将独立判定概率，62.5%概率受到一次42.5%元素属性持续性伤害(中毒、焚烧、风罡、雷暴、水浸之中一种)，持续10秒，12.5%概率进入力竭(无法造成伤害)持续10秒，12.5%概率进入眩晕(无法行动，指挥被动无法造成伤害)持续10秒，12.5%概率因进入生门无事发生，技能冷却10秒。",
    "descMax": "使敌方3名武将，每名武将独立判定概率，62.5%概率受到一次85.0%元素属性持续性伤害(中毒、焚烧、风罡、雷暴、水浸之中一种)，持续10秒，12.5%概率进入力竭(无法造成伤害)持续10秒，12.5%概率进入眩晕(无法行动，指挥被动无法造成伤害)持续10秒，12.5%概率因进入生门无事发生，技能冷却10秒。",
    "type": "主动",
    "rate": 0.6,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体",
      "控制"
    ]
  },
  {
    "id": 50553,
    "name": "先登贯首",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_624.png",
    "desc": "每造成2段连击技能伤害后，下一段连击技能伤害提高100.0%(不包括持续性伤害)。",
    "descMax": "每造成2段连击技能伤害后，下一段连击技能伤害提高200.0%(不包括持续性伤害)。",
    "type": "被动",
    "rate": 1,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 50554,
    "name": "兆祸图全",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_626.png",
    "desc": "普攻时，额外对普攻目标造成一次95.0%智力伤害，并对自身及1名友方兵力最低的武将施加1次抵挡(免疫1次主动技能、连击技能伤害)。",
    "descMax": "普攻时，额外对普攻目标造成一次190.0%智力伤害，并对自身及1名友方兵力最低的武将施加1次抵挡(免疫1次主动技能、连击技能伤害)。",
    "type": "连击",
    "rate": 0.1,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力单体",
      "增益"
    ]
  },
  {
    "id": 50641,
    "name": "无懈可击",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_622.png",
    "desc": "前30秒,使我方防御最低的2名武将受到武力伤害降低20.0%，使我方智力最低的2名武将受到的智力伤害降低20.0%。",
    "descMax": "前30秒,使我方防御最低的2名武将受到武力伤害降低40.0%，使我方智力最低的2名武将受到的智力伤害降低40.0%。",
    "type": "兵法",
    "rate": 1,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 50642,
    "name": "后事之师",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_609.png",
    "desc": "我方全体武将，被施加控制状态(沉默、缴械、力竭、眩晕、缚足、嘲讽，反叛)后，35.0%概率30秒内不会再次受到相同的控制状态。",
    "descMax": "我方全体武将，被施加控制状态(沉默、缴械、力竭、眩晕、缚足、嘲讽，反叛)后，70.0%概率30秒内不会再次受到相同的控制状态。",
    "type": "兵法",
    "rate": 1,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43782,
    "name": "金匮玉函",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_646.png",
    "desc": "30秒后，每10秒随机选取2名我方武将，对其回复一定兵力(回复率45.0%，受智力影响)。",
    "descMax": "30秒后，每10秒随机选取2名我方武将，对其回复一定兵力(回复率90.0%，受智力影响)。",
    "type": "指挥",
    "rate": 1,
    "hero": "张仲景",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "治疗"
    ]
  },
  {
    "id": 43797,
    "name": "英锐不泯",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_650.png",
    "desc": "普攻时，净化(移除目标负面状态)自身，并对普攻目标造成一次107.5%武力伤害，每净化1个负面状态(上限为3个)，伤害率额外提高20.0%。",
    "descMax": "普攻时，净化(移除目标负面状态)自身，并对普攻目标造成一次215.0%武力伤害，每净化1个负面状态(上限为3个)，伤害率额外提高40.0%。",
    "type": "连击",
    "rate": 0.1,
    "hero": "SP张飞",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体"
    ]
  },
  {
    "id": 43798,
    "name": "同心戮力",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_659.png",
    "desc": "自身及随机1名友方武将对随机1名敌方武将造成82.5%武力伤害(优先选取没有被控制的武将)，如果二者攻击的目标为同一武将，则对其施加力竭(无法造成伤害)，持续10秒，技能冷却20秒。",
    "descMax": "自身及随机1名友方武将对随机1名敌方武将造成165.0%武力伤害(优先选取没有被控制的武将)，如果二者攻击的目标为同一武将，则对其施加力竭(无法造成伤害)，持续10秒，技能冷却20秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "颜良（名将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力群体",
      "控制"
    ]
  },
  {
    "id": 43799,
    "name": "重围破阵",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_652.png",
    "desc": "对全体敌方武将造成55.0%武力伤害，如果目标处于沉默、缴械、力竭状态，此伤害获得50%励军(基于造成的武力伤害回复一定兵力)，技能冷却20秒。",
    "descMax": "对全体敌方武将造成110.0%武力伤害，如果目标处于沉默、缴械、力竭状态，此伤害获得50%励军(基于造成的武力伤害回复一定兵力)，技能冷却20秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "文丑（名将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力群体",
      "治疗"
    ]
  },
  {
    "id": 43800,
    "name": "致知力行",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_661.png",
    "desc": "尝试释放主动技能后(释放成功、失败都会触发，被控制导致的释放失败除外)，随机对1名敌方武将造成37.5%智力伤害。",
    "descMax": "尝试释放主动技能后(释放成功、失败都会触发，被控制导致的释放失败除外)，随机对1名敌方武将造成75.0%智力伤害。",
    "type": "被动",
    "rate": 1,
    "hero": "SP周瑜",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力单体"
    ]
  },
  {
    "id": 43801,
    "name": "淑慎其身",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_656.png",
    "desc": "我方全体弓兵造成智力伤害的10.0%可以恢复自身及1名我方兵力最低的武将的兵力。",
    "descMax": "我方全体弓兵造成智力伤害的20.0%可以恢复自身及1名我方兵力最低的武将的兵力。",
    "type": "指挥",
    "rate": 1,
    "hero": "王元姬",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "治疗"
    ]
  },
  {
    "id": 43793,
    "name": "龙举霆威",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_634.png",
    "desc": "随机对2名敌方武将造成92.5%武力伤害，此次伤害附加龙威效果(造成的伤害本场无法被治疗)，技能冷却20秒。",
    "descMax": "随机对2名敌方武将造成185.0%武力伤害，此次伤害附加龙威效果(造成的伤害本场无法被治疗)，技能冷却20秒。",
    "type": "主动",
    "rate": 0.5,
    "hero": "SP赵云",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力群体"
    ]
  },
  {
    "id": 43794,
    "name": "袖里玄机",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_637.png",
    "desc": "普攻时，额外对普攻目标造成2段55.0%智力伤害，并对其施加反叛(造成伤害时，不包括普攻和持续性伤害，敌我不分；主动、主将、连击技能施加状态时敌我不分)，持续10秒。",
    "descMax": "普攻时，额外对普攻目标造成2段110.0%智力伤害，并对其施加反叛(造成伤害时，不包括普攻和持续性伤害，敌我不分；主动、主将、连击技能施加状态时敌我不分)，持续10秒。",
    "type": "连击",
    "rate": 0.1,
    "hero": "张春华（名将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力单体",
      "控制"
    ]
  },
  {
    "id": 43795,
    "name": "以邻为壑",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_639.png",
    "desc": "每10秒40.0%概率随机将自身1~2个负面状态转移给1名敌方武将，并将状态持续时间刷新为10秒。",
    "descMax": "每10秒80.0%概率随机将自身1~2个负面状态转移给1名敌方武将，并将状态持续时间刷新为10秒。",
    "type": "被动",
    "rate": 1,
    "hero": "徐盛",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "减益"
    ]
  },
  {
    "id": 43796,
    "name": "昭然若揭",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_640.png",
    "desc": "随机选取2名敌方武将，使其主动、连击伤害降低30.0%，每释放1次主动、连击技能，则对应技能类型的伤害降低恢复7.5%。",
    "descMax": "随机选取2名敌方武将，使其主动、连击伤害降低60.0%，每释放1次主动、连击技能，则对应技能类型的伤害降低恢复15.0%。",
    "type": "指挥",
    "rate": 1,
    "hero": "司马昭",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "减益"
    ]
  },
  {
    "id": 50556,
    "name": "关门捉寇",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_642.png",
    "desc": "对距离自身最近的1名敌方武将造成65.0%智力伤害，并对其施加缴械(无法普通攻击)，持续10秒，技能冷却10秒。",
    "descMax": "对距离自身最近的1名敌方武将造成130.0%智力伤害，并对其施加缴械(无法普通攻击)，持续10秒，技能冷却10秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力单体",
      "控制"
    ]
  },
  {
    "id": 50557,
    "name": "鸣鼓策师",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_643.png",
    "desc": "随机净化(移除目标负面状态)2名我方武将，如果目标智力大于武力则40.0%概率对其施加免控(免疫所有控制效果)，持续10秒，技能冷却10秒。",
    "descMax": "随机净化(移除目标负面状态)2名我方武将，如果目标智力大于武力则80.0%概率对其施加免控(免疫所有控制效果)，持续10秒，技能冷却10秒。",
    "type": "主动",
    "rate": 0.5,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 50558,
    "name": "拨乱济时",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_641.png",
    "desc": "随机驱散2名敌方武将身上的所有增益状态，并对其造成40.0%智力伤害，技能冷却10秒。",
    "descMax": "随机驱散2名敌方武将身上的所有增益状态，并对其造成80.0%智力伤害，技能冷却10秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体",
      "减益"
    ]
  },
  {
    "id": 50643,
    "name": "知彼知己",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_644.png",
    "desc": "随机选取2名敌方武将，使其造成伤害降低5.0%，其每造成一段伤害后(不包括持续性伤害、普攻伤害、被动伤害、指挥伤害)，有80%概率使其造成的伤害额外降低2.5%，持续全场(最多可叠加6次，可净化)。",
    "descMax": "随机选取2名敌方武将，使其造成伤害降低10.0%，其每造成一段伤害后(不包括持续性伤害、普攻伤害、被动伤害、指挥伤害)，有80%概率使其造成的伤害额外降低5.0%，持续全场(最多可叠加6次，可净化)。",
    "type": "兵法",
    "rate": 1,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "减益"
    ]
  },
  {
    "id": 50559,
    "name": "巧捷万端",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_666.png",
    "desc": "如果我方三名武将都为枪兵，我方武将造成伤害后(不包括持续性伤害、普攻伤害、被动伤害、指挥伤害)，40%概率使自身伤害提高10.0%(可叠加3次)；40%概率使攻击目标伤害降低10.0%(可叠加3次),持续20秒。",
    "descMax": "如果我方三名武将都为枪兵，我方武将造成伤害后(不包括持续性伤害、普攻伤害、被动伤害、指挥伤害)，40%概率使自身伤害提高20.0%(可叠加3次)；40%概率使攻击目标伤害降低20.0%(可叠加3次),持续20秒。",
    "type": "指挥",
    "rate": 1,
    "hero": "/",
    "troops": [
      "枪兵"
    ],
    "tags": [
      "增益",
      "减益"
    ]
  },
  {
    "id": 50560,
    "name": "筹策以奇",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_663.png",
    "desc": "对两名敌方武将造成50.0%智力伤害，此技能造成伤害的目标每有1名处于中毒状态，则使我方1名武将恢复一定兵力(回复率50.0%，受智力影响)，冷却10秒。",
    "descMax": "对两名敌方武将造成100.0%智力伤害，此技能造成伤害的目标每有1名处于中毒状态，则使我方1名武将恢复一定兵力(回复率100.0%，受智力影响)，冷却10秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体",
      "治疗"
    ]
  },
  {
    "id": 50561,
    "name": "分进而击",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_664.png",
    "desc": "对敌方武将造成3段45.0%水属性智力伤害，每次目标独立判定，冷却10秒。",
    "descMax": "对敌方武将造成3段90.0%水属性智力伤害，每次目标独立判定，冷却10秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体"
    ]
  },
  {
    "id": 50644,
    "name": "谋定后战",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_665.png",
    "desc": "我方武将闪避伤害后(不包括持续性伤害、普攻伤害、被动伤害、指挥伤害)，会使自身伤害提高15.0%(可叠加2次)，持续30秒。",
    "descMax": "我方武将闪避伤害后(不包括持续性伤害、普攻伤害、被动伤害、指挥伤害)，会使自身伤害提高30.0%(可叠加2次)，持续30秒。",
    "type": "兵法",
    "rate": 1,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43802,
    "name": "屹然不动",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_670.png",
    "desc": "净化自身，并对随机对2名敌方武将造成72.5%武力伤害，技能冷却10秒。",
    "descMax": "净化自身，并对随机对2名敌方武将造成145.0%武力伤害，技能冷却10秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "SP关羽",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益",
      "武力群体"
    ]
  },
  {
    "id": 43803,
    "name": "反间执乱",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_681.png",
    "desc": "处于反叛的敌方武将对我方武将造成的伤害降低20.0%，对敌方武将造成的伤害提高20.0%。",
    "descMax": "处于反叛的敌方武将对我方武将造成的伤害降低40.0%，对敌方武将造成的伤害提高40.0%。",
    "type": "指挥",
    "rate": 1,
    "hero": "SP庞德",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益",
      "减益"
    ]
  },
  {
    "id": 43804,
    "name": "宽猛相济",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_673.png",
    "desc": "造成连击伤害后(持续性伤害除外)，40.0%概率对我方兵力最低的武将恢复一定兵力(回复量为本次造成的伤害)。",
    "descMax": "造成连击伤害后(持续性伤害除外)，80.0%概率对我方兵力最低的武将恢复一定兵力(回复量为本次造成的伤害)。",
    "type": "被动",
    "rate": 1,
    "hero": "SP徐晃",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "治疗"
    ]
  },
  {
    "id": 43805,
    "name": "壮怀激愤",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_684.png",
    "desc": "普攻时，额外对普攻目标施加水浸、焚烧、风罡(持续水、火、风属性智力伤害，总伤害率均为50.0%)，持续10秒。",
    "descMax": "普攻时，额外对普攻目标施加水浸、焚烧、风罡(持续水、火、风属性智力伤害，总伤害率均为100.0%)，持续10秒。",
    "type": "连击",
    "rate": 0.1,
    "hero": "张宝（名将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力单体"
    ]
  },
  {
    "id": 43806,
    "name": "击电奔星",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_671.png",
    "desc": "对处于控制状态的敌方武将造成72.5%武力伤害，如果全体敌方武将未处于控制状态，则随机选取1名敌方武将对其施加眩晕(无法行动，指挥被动无法造成伤害)，持续10秒，技能冷却10秒。",
    "descMax": "对处于控制状态的敌方武将造成145.0%武力伤害，如果全体敌方武将未处于控制状态，则随机选取1名敌方武将对其施加眩晕(无法行动，指挥被动无法造成伤害)，持续10秒，技能冷却10秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "张梁（名将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力群体",
      "控制"
    ]
  },
  {
    "id": 43807,
    "name": "专权擅势",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_683.png",
    "desc": "对有可驱散的正面状态的我方武将恢复一定兵力(回复率40.0%，受智力影响)；对有可驱散的正面状态的敌方武将造成40.0%智力伤害，技能冷却20秒。",
    "descMax": "对有可驱散的正面状态的我方武将恢复一定兵力(回复率80.0%，受智力影响)；对有可驱散的正面状态的敌方武将造成80.0%智力伤害，技能冷却20秒。",
    "type": "主动",
    "rate": 0.5,
    "hero": "孙鲁班",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "治疗",
      "智力群体"
    ]
  },
  {
    "id": 50562,
    "name": "矢志定节",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_685.png",
    "desc": "如果我方3名武将均为弓兵，我方全体武将免疫惧近效果，且我方前排弓兵武将提高50.0点防御(受目标智力影响)，我方后排武将对非近身的敌方武将造成伤害提高15.0%。",
    "descMax": "如果我方3名武将均为弓兵，我方全体武将免疫惧近效果，且我方前排弓兵武将提高100.0点防御(受目标智力影响)，我方后排武将对非近身的敌方武将造成伤害提高30.0%。",
    "type": "指挥",
    "rate": 1,
    "hero": "/",
    "troops": [
      "弓兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 50563,
    "name": "束戈卷甲",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_687.png",
    "desc": "随机对2名敌方武将施加缴械(无法普通攻击)，持续10秒，技能冷却20秒。",
    "descMax": "随机对2名敌方武将施加缴械(无法普通攻击)，持续10秒，技能冷却20秒。",
    "type": "主动",
    "rate": 0.2,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "控制"
    ]
  },
  {
    "id": 50564,
    "name": "意气自如",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_690.png",
    "desc": "随机选取2名我方武将，使其受到指挥、被动伤害降低25.0%。",
    "descMax": "随机选取2名我方武将，使其受到指挥、被动伤害降低50.0%。",
    "type": "指挥",
    "rate": 1,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 50565,
    "name": "蓄势待发",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_689.png",
    "desc": "如果天生自带技能为指挥或被动技能，则20秒后，提升此技能60.0%的伤害。",
    "descMax": "如果天生自带技能为指挥或被动技能，则20秒后，提升此技能120.0%的伤害。",
    "type": "被动",
    "rate": 1,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43808,
    "name": "八阵名成",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_692.png",
    "desc": "前30秒，选取敌方武力最高的1名武将，若目标武力高于其智力，则有45.0%概率对其施加缚足(无法移动)及沉默(无法释放主动技能)；前10秒使敌我双方免疫暴击。",
    "descMax": "前30秒，选取敌方武力最高的1名武将，若目标武力高于其智力，则有90.0%概率对其施加缚足(无法移动)及沉默(无法释放主动技能)；前10秒使敌我双方免疫暴击。",
    "type": "指挥",
    "rate": 1,
    "hero": "SP诸葛亮",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "控制"
    ]
  },
  {
    "id": 43809,
    "name": "倾盖如故",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_693.png",
    "desc": "提高自身及1名友方武将15.0%火属性伤害，持续10秒，并随机对2名敌方武将造成55.0%火属性智力伤害，技能冷却10秒。",
    "descMax": "提高自身及1名友方武将30.0%火属性伤害，持续10秒，并随机对2名敌方武将造成110.0%火属性智力伤害，技能冷却10秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "SP鲁肃",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益",
      "智力群体"
    ]
  },
  {
    "id": 43810,
    "name": "焚香拜月",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_705.png",
    "desc": "如果我方至少有2名女性武将，则我方任意武将被施加控制状态后，我方全体武将受到伤害降低15.0%；且我方被施加控制状态的武将每次受到伤害后(不包括普攻伤害)，90%概率回复一定兵力(回复率40.0%，受智力影响)。",
    "descMax": "如果我方至少有2名女性武将，则我方任意武将被施加控制状态后，我方全体武将受到伤害降低30.0%；且我方被施加控制状态的武将每次受到伤害后(不包括普攻伤害)，90%概率回复一定兵力(回复率80.0%，受智力影响)。",
    "type": "指挥",
    "rate": 1,
    "hero": "SP貂蝉",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益",
      "治疗"
    ]
  },
  {
    "id": 43811,
    "name": "行孝重义",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_708.png",
    "desc": "对自身恢复一定兵力(回复率75.0%，受防御影响，第3、6、9次释放时，可以恢复大量兵力)，技能冷却10秒。",
    "descMax": "对自身恢复一定兵力(回复率150.0%，受防御影响，第3、6、9次释放时，可以恢复大量兵力)，技能冷却10秒。",
    "type": "主动",
    "rate": 0.5,
    "hero": "关平（名将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "治疗"
    ]
  },
  {
    "id": 43812,
    "name": "幼虎初试",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_714.png",
    "desc": "对随机1名敌方武将施加缴械(优先选择没有被缴械的目标)，持续10秒，并对其造成100.0%武力伤害，技能冷却10秒。",
    "descMax": "对随机1名敌方武将施加缴械(优先选择没有被缴械的目标)，持续10秒，并对其造成200.0%武力伤害，技能冷却10秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "关兴（名将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体",
      "控制"
    ]
  },
  {
    "id": 43813,
    "name": "揽许群策",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_710.png",
    "desc": "随机降低2名敌方武将50.0点智力，持续10秒，并对其造成82.5%智力伤害，技能冷却20秒。",
    "descMax": "随机降低2名敌方武将100.0点智力，持续10秒，并对其造成165.0%智力伤害，技能冷却20秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "诸葛瑾",
    "troops": [
      "弓兵"
    ],
    "tags": [
      "智力群体",
      "减益"
    ]
  },
  {
    "id": 43814,
    "name": "虑筹应机",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_718.png",
    "desc": "前30秒，随机2名我方武将受到各种属性伤害降低25.0%。",
    "descMax": "前30秒，随机2名我方武将受到各种属性伤害降低50.0%。",
    "type": "指挥",
    "rate": 1,
    "hero": "荀攸（名将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43815,
    "name": "古之遗直",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_720.png",
    "desc": "选取我方智力最低的武将，使其对距离技能携带者最远的2名敌方武将共造成3段武力伤害(伤害率32.5%)，每次攻击的目标独立判定，如果目标为弓兵武将，则40.0%概率对其施加沉默或缴械(目标已处于沉默则优先施加缴械，反之亦然)，持续10秒，技能冷却10秒。",
    "descMax": "选取我方智力最低的武将，使其对距离技能携带者最远的2名敌方武将共造成3段武力伤害(伤害率65.0%)，每次攻击的目标独立判定，如果目标为弓兵武将，则80.0%概率对其施加沉默或缴械(目标已处于沉默则优先施加缴械，反之亦然)，持续10秒，技能冷却10秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "张昭（名将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体",
      "控制"
    ]
  },
  {
    "id": 43816,
    "name": "军计高论",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_725.png",
    "desc": "50.0%概率对我方全体武将施加1次抵挡(免疫1次主动技能、连击技能伤害)，技能冷却20秒。",
    "descMax": "100.0%概率对我方全体武将施加1次抵挡(免疫1次主动技能、连击技能伤害)，技能冷却20秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "马谡",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43817,
    "name": "夺权窃机",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_723.png",
    "desc": "随机对2名敌方武将施加力竭(无法造成伤害)，持续10秒，技能冷却20秒。",
    "descMax": "随机对2名敌方武将施加力竭(无法造成伤害)，持续10秒，技能冷却20秒。",
    "type": "主动",
    "rate": 0.2,
    "hero": "司马师",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "控制"
    ]
  },
  {
    "id": 43818,
    "name": "忠为令德",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_733.png",
    "desc": "40.0%概率提高敌我双方全体武将30%武力伤害、暴击几率、破甲(最多可叠加2层，每个武将每种状态独立判断)，持续10秒，技能冷却10秒。",
    "descMax": "80.0%概率提高敌我双方全体武将30%武力伤害、暴击几率、破甲(最多可叠加2层，每个武将每种状态独立判断)，持续10秒，技能冷却10秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "皇甫嵩（名将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43819,
    "name": "乾坤轻掷",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_729.png",
    "desc": "前40秒，每10秒我方全体武将首次受到的主动、连击伤害下降30.0%(主动、连击共计次数，不包括持续性伤害)。",
    "descMax": "前40秒，每10秒我方全体武将首次受到的主动、连击伤害下降60.0%(主动、连击共计次数，不包括持续性伤害)。",
    "type": "指挥",
    "rate": 1,
    "hero": "SP孙尚香",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43820,
    "name": "鹰扬虎视",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_736.png",
    "desc": "每10秒(10秒第一次触发)随机选取2名敌方武将，对其造成25.0%武力或智力伤害(依据自身的武力、智力属性高低决定伤害类型)，每增加10秒伤害率额外增加5.0%。",
    "descMax": "每10秒(10秒第一次触发)随机选取2名敌方武将，对其造成50.0%武力或智力伤害(依据自身的武力、智力属性高低决定伤害类型)，每增加10秒伤害率额外增加10.0%。",
    "type": "指挥",
    "rate": 1,
    "hero": "邢道荣",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体",
      "武力群体"
    ]
  },
  {
    "id": 43821,
    "name": "明神叙诡",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_738.png",
    "desc": "随机对1名敌方武将降低100点防御，持续10秒，并对其造成一次90.0%的武力伤害；随机对1名敌方武将降低100点智力，持续10秒，并对其造成一次90.0%智力伤害，每次攻击的目标独立判定，技能冷却20秒。",
    "descMax": "随机对1名敌方武将降低100点防御，持续10秒，并对其造成一次180.0%的武力伤害；随机对1名敌方武将降低100点智力，持续10秒，并对其造成一次180.0%智力伤害，每次攻击的目标独立判定，技能冷却20秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "SP于吉",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力单体",
      "武力单体",
      "减益"
    ]
  },
  {
    "id": 50567,
    "name": "游骑胁击",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_742.png",
    "desc": "如果我方三名武将都为骑兵，我方武将释放技能冷却为20秒及以上的主动技能后，15.0%概率降低10秒冷却时间；提高自身7.5%破甲，持续全场，可叠加2次，且随机对1名敌方武将施加沉默，持续10秒。",
    "descMax": "如果我方三名武将都为骑兵，我方武将释放技能冷却为20秒及以上的主动技能后，30.0%概率降低10秒冷却时间；提高自身15.0%破甲，持续全场，可叠加2次，且随机对1名敌方武将施加沉默，持续10秒。",
    "type": "指挥",
    "rate": 1,
    "hero": "/",
    "troops": [
      "骑兵"
    ],
    "tags": [
      "增益",
      "控制"
    ]
  },
  {
    "id": 50568,
    "name": "定气凝神",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_739.png",
    "desc": "随机选取2名我方武将，每10秒后使其指挥、被动伤害提高5.0%(20秒时第一次施加，不可驱散)。",
    "descMax": "随机选取2名我方武将，每10秒后使其指挥、被动伤害提高10.0%(20秒时第一次施加，不可驱散)。",
    "type": "指挥",
    "rate": 1,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 50569,
    "name": "撞阵冲军",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_743.png",
    "desc": "普攻时，额外对普攻目标造成一次55.0%武力伤害，且随机对1名敌方武将造成55.0%武力伤害。",
    "descMax": "普攻时，额外对普攻目标造成一次110.0%武力伤害，且随机对1名敌方武将造成110.0%武力伤害。",
    "type": "连击",
    "rate": 0.1,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力群体"
    ]
  },
  {
    "id": 50570,
    "name": "先声后实",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_741.png",
    "desc": "随机对1名敌方武将造成100.0%武力伤害，并对其施加眩晕(无法行动，指挥被动无法造成伤害)，持续10秒，技能冷却20秒。",
    "descMax": "随机对1名敌方武将造成200.0%武力伤害，并对其施加眩晕(无法行动，指挥被动无法造成伤害)，持续10秒，技能冷却20秒。",
    "type": "主动",
    "rate": 0.5,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体",
      "控制"
    ]
  },
  {
    "id": 43822,
    "name": "执旗定乱",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_754.png",
    "desc": "自身每受到6次普攻后相继获得以下效果(每次只能获得1个效果)：对随机1名敌方武将施加沉默(无法使用主动技能)，持续10秒、对自身恢复一定兵力(回复率40.0%，受防御影响)。",
    "descMax": "自身每受到6次普攻后相继获得以下效果(每次只能获得1个效果)：对随机1名敌方武将施加沉默(无法使用主动技能)，持续10秒、对自身恢复一定兵力(回复率80.0%，受防御影响)。",
    "type": "被动",
    "rate": 1,
    "hero": "SP典韦",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "控制",
      "治疗"
    ]
  },
  {
    "id": 43823,
    "name": "定规武节",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_745.png",
    "desc": "前60秒，我方全体武将免疫缚足，受到伤害时我方武将防御或者智力额外加50.0点，依据对方的伤害类型进行计算(我方每有1名武将受到控制状态，效果减半)。",
    "descMax": "前60秒，我方全体武将免疫缚足，受到伤害时我方武将防御或者智力额外加100.0点，依据对方的伤害类型进行计算(我方每有1名武将受到控制状态，效果减半)。",
    "type": "指挥",
    "rate": 1,
    "hero": "SP孙坚",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43824,
    "name": "纵马驰矛",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_755.png",
    "desc": "对敌方全体武将造成62.5%武力伤害，且对自身施加沉默(无法使用主动技能)，持续10秒，技能冷却10秒。",
    "descMax": "对敌方全体武将造成125.0%武力伤害，且对自身施加沉默(无法使用主动技能)，持续10秒，技能冷却10秒。",
    "type": "主动",
    "rate": 0.5,
    "hero": "张苞（名将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力群体",
      "控制"
    ]
  },
  {
    "id": 43825,
    "name": "苦心焦思",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_750.png",
    "desc": "前60秒，随机选取2名我方武将，对其施加免疫反叛、50.0%概率对其施加1~2次抵挡(免疫1次主动技能、连击技能伤害)。",
    "descMax": "前60秒，随机选取2名我方武将，对其施加免疫反叛、100.0%概率对其施加1~2次抵挡(免疫1次主动技能、连击技能伤害)。",
    "type": "指挥",
    "rate": 1,
    "hero": "朱儁（名将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43826,
    "name": "将相连诛",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_763.png",
    "desc": "随机对2名敌方武将造成75.0%的智力伤害，如果目标魅力低于自身，则额外对其造成2段25.0%智力伤害，技能冷却20秒。",
    "descMax": "随机对2名敌方武将造成150.0%的智力伤害，如果目标魅力低于自身，则额外对其造成2段50.0%智力伤害，技能冷却20秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "董白",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体"
    ]
  },
  {
    "id": 43827,
    "name": "独尊海内",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_758.png",
    "desc": "净化我军全体骑兵武将，并使我军全体骑兵武将的下一次主动技能伤害提高35.0%，持续20秒，技能冷却20秒。",
    "descMax": "净化我军全体骑兵武将，并使我军全体骑兵武将的下一次主动技能伤害提高70.0%，持续20秒，技能冷却20秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "SP董卓",
    "troops": [
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 50571,
    "name": "曲意逢迎",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_761.png",
    "desc": "随机选取2名敌方武将，对其造成62.5%智力伤害，如果自身为女性武将，且目标为男性武将，30.0%概率则对其施加反叛(造成伤害时，不包括普攻和持续性伤害，敌我不分；主动、主将、连击技能施加状态时敌我不分)，持续10秒，技能冷却10秒。",
    "descMax": "随机选取2名敌方武将，对其造成125.0%智力伤害，如果自身为女性武将，且目标为男性武将，60.0%概率则对其施加反叛(造成伤害时，不包括普攻和持续性伤害，敌我不分；主动、主将、连击技能施加状态时敌我不分)，持续10秒，技能冷却10秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体",
      "控制"
    ]
  },
  {
    "id": 50572,
    "name": "以迂为直",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_765.png",
    "desc": "我方武将，自身每携带一个指挥或被动技能，可获得5.0%的伤害降低。",
    "descMax": "我方武将，自身每携带一个指挥或被动技能，可获得10.0%的伤害降低。",
    "type": "指挥",
    "rate": 1,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 50573,
    "name": "计险克远",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_759.png",
    "desc": "普攻时，额外对普攻目标造成一次75.0%智力伤害，并提高自身15.0%闪避(触发时令所受伤害无效)，持续10秒。",
    "descMax": "普攻时，额外对普攻目标造成一次150.0%智力伤害，并提高自身30.0%闪避(触发时令所受伤害无效)，持续10秒。",
    "type": "连击",
    "rate": 0.1,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力单体",
      "增益"
    ]
  },
  {
    "id": 50574,
    "name": "克定祸乱",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_760.png",
    "desc": "对1~2名防御最低敌方武将造成92.5%武力伤害，技能冷却20秒。",
    "descMax": "对1~2名防御最低敌方武将造成185.0%武力伤害，技能冷却20秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力群体"
    ]
  },
  {
    "id": 43828,
    "name": "果烈刚毅",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_768.png",
    "desc": "普攻时，额外对敌方全体武将造成一次50.0%武力伤害。",
    "descMax": "普攻时，额外对敌方全体武将造成一次100.0%武力伤害。",
    "type": "连击",
    "rate": 0.1,
    "hero": "廖化",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力群体"
    ]
  },
  {
    "id": 43829,
    "name": "威震西凉",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_772.png",
    "desc": "开场使敌方全体武将伤害降低10.0%；我方武将造成连击伤害后，80%概率使被攻击的敌方武将伤害降低5.0%(持续全场，最多额外叠加4层，不可净化)。",
    "descMax": "开场使敌方全体武将伤害降低20.0%；我方武将造成连击伤害后，80%概率使被攻击的敌方武将伤害降低10.0%(持续全场，最多额外叠加4层，不可净化)。",
    "type": "指挥",
    "rate": 1,
    "hero": "SP马超",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "减益"
    ]
  },
  {
    "id": 43830,
    "name": "明典勇略",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_771.png",
    "desc": "自身每次释放连击技能后，提高自身10.0%伤害(最高叠加5次，可驱散)，持续全场。",
    "descMax": "自身每次释放连击技能后，提高自身20.0%伤害(最高叠加5次，可驱散)，持续全场。",
    "type": "被动",
    "rate": 1,
    "hero": "SP吕蒙",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43831,
    "name": "贤达淑婉",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_773.png",
    "desc": "随机对2名敌方武将造成70.0%的智力伤害，目标智力每低于技能释放者10%，则本次伤害额外提高10%(最高提高50%)，技能冷却10秒。",
    "descMax": "随机对2名敌方武将造成140.0%的智力伤害，目标智力每低于技能释放者10%，则本次伤害额外提高10%(最高提高50%)，技能冷却10秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "王异",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体"
    ]
  },
  {
    "id": 43832,
    "name": "见危授命",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_791.png",
    "desc": "对敌方武将造成4段40.0%智力伤害，每次目标独立判定，技能冷却10秒。",
    "descMax": "对敌方武将造成4段80.0%智力伤害，每次目标独立判定，技能冷却10秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "SP姜维",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体"
    ]
  },
  {
    "id": 43833,
    "name": "百举百全",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_787.png",
    "desc": "前30秒，随机选取2名敌方武将，降低其22.5%的主动技能伤害。",
    "descMax": "前30秒，随机选取2名敌方武将，降低其45.0%的主动技能伤害。",
    "type": "指挥",
    "rate": 1,
    "hero": "SP郭嘉",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "减益"
    ]
  },
  {
    "id": 50575,
    "name": "惟扬奋武",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_794.png",
    "desc": "如果我方三名武将都为步兵，前30秒，我方全体武将受到非步兵武将伤害降低20.0%，且受到非步兵武将的伤害后(不包括普攻、持续伤害)，50%概率回复一定兵力(回复率35.0%，受智力影响)。",
    "descMax": "如果我方三名武将都为步兵，前30秒，我方全体武将受到非步兵武将伤害降低40.0%，且受到非步兵武将的伤害后(不包括普攻、持续伤害)，50%概率回复一定兵力(回复率70.0%，受智力影响)。",
    "type": "指挥",
    "rate": 1,
    "hero": "/",
    "troops": [
      "步兵"
    ],
    "tags": [
      "增益",
      "治疗"
    ]
  },
  {
    "id": 50576,
    "name": "攘外",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_792.png",
    "desc": "对敌方武将造成4段40.0%武力伤害，每次目标独立判定，冷却10秒。",
    "descMax": "对敌方武将造成4段80.0%武力伤害，每次目标独立判定，冷却10秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力群体"
    ]
  },
  {
    "id": 50577,
    "name": "安内",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_786.png",
    "desc": "对我方武将恢复4次兵力(回复率40.0%，受智力影响)，每次目标独立判定，冷却10秒。",
    "descMax": "对我方武将恢复4次兵力(回复率80.0%，受智力影响)，每次目标独立判定，冷却10秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "治疗"
    ]
  },
  {
    "id": 43834,
    "name": "纲纪督御",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_807.png",
    "desc": "普攻时，额外对普攻目标造成一次95.0%武力伤害，如果目标为主将，则对其额外造成一次60.0%武力伤害。",
    "descMax": "普攻时，额外对普攻目标造成一次190.0%武力伤害，如果目标为主将，则对其额外造成一次120.0%武力伤害。",
    "type": "连击",
    "rate": 0.1,
    "hero": "曹纯",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体"
    ]
  },
  {
    "id": 43835,
    "name": "恃宠",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_799.png",
    "desc": "我方全体女性武将造成伤害时主属性额外附加5.0%魅力属性，每10秒额外提高5.0%(最高可以提高5倍的初始数值)。",
    "descMax": "我方全体女性武将造成伤害时主属性额外附加10.0%魅力属性，每10秒额外提高10.0%(最高可以提高5倍的初始数值)。",
    "type": "指挥",
    "rate": 1,
    "hero": "何太后（名将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43836,
    "name": "折节下问",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_806.png",
    "desc": "对敌方全体武将造成35.0%智力伤害，50%概率使其伤害大幅度降低(增伤无效)，持续10秒，技能冷却10秒。",
    "descMax": "对敌方全体武将造成70.0%智力伤害，50%概率使其伤害大幅度降低(增伤无效)，持续10秒，技能冷却10秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "SP徐庶",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体",
      "减益"
    ]
  },
  {
    "id": 43837,
    "name": "事荣敬主",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_811.png",
    "desc": "前20秒，使我方的主将受到伤害降低30.0%，并对其施加1个盾阵(击破盾阵前无法对其造成伤害，吸收率为100.0%，受智力影响)。",
    "descMax": "前20秒，使我方的主将受到伤害降低60.0%，并对其施加1个盾阵(击破盾阵前无法对其造成伤害，吸收率为200.0%，受智力影响)。",
    "type": "指挥",
    "rate": 1,
    "hero": "孙鲁育",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43838,
    "name": "观始知终",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_801.png",
    "desc": "对敌方全体武将造成55.0%火属性智力伤害，技能冷却10秒。",
    "descMax": "对敌方全体武将造成110.0%火属性智力伤害，技能冷却10秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "SP庞统",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体"
    ]
  },
  {
    "id": 43839,
    "name": "进退有度",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_796.png",
    "desc": "提高我方全体武将40.0点防御或者智力(如果目标防御高于智力，则加防御，反之加智力)，并使其免疫暴击。",
    "descMax": "提高我方全体武将80.0点防御或者智力(如果目标防御高于智力，则加防御，反之加智力)，并使其免疫暴击。",
    "type": "指挥",
    "rate": 1,
    "hero": "SP曹仁",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 50578,
    "name": "行炎",
    "grade": "A",
    "gradeNum": 3,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_826.png",
    "desc": "对随机2名敌方武将造成70.0%火属性智力伤害，技能冷却10秒。",
    "descMax": "对随机2名敌方武将造成140.0%火属性智力伤害，技能冷却10秒。",
    "type": "主动",
    "rate": 0.35,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体"
    ]
  },
  {
    "id": 50645,
    "name": "移花接木",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_827.png",
    "desc": "我方全体武将前5次释放的主动、主将技伤害降低60%，且施放后随机对1名我方武将施加1个盾阵(吸收率为35.0%，受智力影响，免疫持续性伤害状态)，持续20秒；5次以后的主动、主将技伤害额外提高30.0%，并对随机1名敌方武将施加禁疗，持续10秒。",
    "descMax": "我方全体武将前5次释放的主动、主将技伤害降低60%，且施放后随机对1名我方武将施加1个盾阵(吸收率为70.0%，受智力影响，免疫持续性伤害状态)，持续20秒；5次以后的主动、主将技伤害额外提高60.0%，并对随机1名敌方武将施加禁疗，持续10秒。",
    "type": "兵法",
    "rate": 1,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益",
      "减益"
    ]
  },
  {
    "id": 43840,
    "name": "仁心",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_835.png",
    "desc": "开场时，提高我方全体武将25.0点政治，且我方副将每有100点政治，可以提高我方主将5%神算几率、暴击几率；前20秒，我方主将受到伤害降低30.0%。",
    "descMax": "开场时，提高我方全体武将50.0点政治，且我方副将每有100点政治，可以提高我方主将5%神算几率、暴击几率；前20秒，我方主将受到伤害降低60.0%。",
    "type": "指挥",
    "rate": 1,
    "hero": "曹冲",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43841,
    "name": "忠志不改",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_839.png",
    "desc": "对我方主将恢复一定兵力(回复率80.0%，受防御影响)，技能冷却10秒。",
    "descMax": "对我方主将恢复一定兵力(回复率160.0%，受防御影响)，技能冷却10秒。",
    "type": "主动",
    "rate": 0.5,
    "hero": "周仓",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "治疗"
    ]
  },
  {
    "id": 43842,
    "name": "负鼎而趋",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_831.png",
    "desc": "对我方政治最高的武将随机施加一种控制状态，持续10秒；并使我方全体武将受到伤害降低25.0%，持续10秒，技能冷却10秒。",
    "descMax": "对我方政治最高的武将随机施加一种控制状态，持续10秒；并使我方全体武将受到伤害降低50.0%，持续10秒，技能冷却10秒。",
    "type": "主动",
    "rate": 0.5,
    "hero": "汉献帝",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益",
      "控制"
    ]
  },
  {
    "id": 43843,
    "name": "慕贤入室",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_832.png",
    "desc": "提高自身50.0点魅力，持续10秒，并随机对2名敌方武将造成65.0%的智力伤害，技能冷却10秒。",
    "descMax": "提高自身100.0点魅力，持续10秒，并随机对2名敌方武将造成130.0%的智力伤害，技能冷却10秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "吴国太（名将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体",
      "增益"
    ]
  },
  {
    "id": 43844,
    "name": "师表海内",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_843.png",
    "desc": "普攻时，额外对普攻目标造成一次125.0%武力伤害，如果自身有梨，则目标修改为敌方主将。",
    "descMax": "普攻时，额外对普攻目标造成一次250.0%武力伤害，如果自身有梨，则目标修改为敌方主将。",
    "type": "连击",
    "rate": 0.1,
    "hero": "孔融",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体"
    ]
  },
  {
    "id": 43845,
    "name": "余子皆碌",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_845.png",
    "desc": "对敌方全体武将造成55.0%智力伤害，该技能从第三次释放开始，此技能伤害额外附加精准(无视闪避、抵挡、盾阵)，技能冷却10秒。",
    "descMax": "对敌方全体武将造成110.0%智力伤害，该技能从第三次释放开始，此技能伤害额外附加精准(无视闪避、抵挡、盾阵)，技能冷却10秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "杨修",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体"
    ]
  },
  {
    "id": 43846,
    "name": "皓月",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_855.png",
    "desc": "自身受到主动、主将、连击伤害后(不包括持续性伤害)，60%概率恢复其一定兵力(回复率50.0%，受智力影响)。",
    "descMax": "自身受到主动、主将、连击伤害后(不包括持续性伤害)，60%概率恢复其一定兵力(回复率100.0%，受智力影响)。",
    "type": "被动",
    "rate": 1,
    "hero": "SP大乔",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "治疗"
    ]
  },
  {
    "id": 43847,
    "name": "豪达明鉴",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_854.png",
    "desc": "普攻时，额外对我方全体武将被动或指挥技能最后选中的伤害目标造成一次150.0%武力伤害(没有技能目标则选取普攻目标)。",
    "descMax": "普攻时，额外对我方全体武将被动或指挥技能最后选中的伤害目标造成一次300.0%武力伤害(没有技能目标则选取普攻目标)。",
    "type": "连击",
    "rate": 0.1,
    "hero": "SP孙策",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体"
    ]
  },
  {
    "id": 50646,
    "name": "顺手牵羊",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_860.png",
    "desc": "我方主将触发连击伤害前，偷取敌方目标37.5点武力和智力(受主将攻速影响，不可驱散净化)，持续20秒，可叠加2次。",
    "descMax": "我方主将触发连击伤害前，偷取敌方目标75.0点武力和智力(受主将攻速影响，不可驱散净化)，持续20秒，可叠加2次。",
    "type": "兵法",
    "rate": 1,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益",
      "减益"
    ]
  },
  {
    "id": 43848,
    "name": "道素自居",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_862.png",
    "desc": "对敌方武将造成4段40.0%火属性智力伤害，每次目标独立判定，冷却10秒。",
    "descMax": "对敌方武将造成4段80.0%火属性智力伤害，每次目标独立判定，冷却10秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "羊祜",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体"
    ]
  },
  {
    "id": 43849,
    "name": "深思静虑",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_866.png",
    "desc": "敌方全体武将每受到3次火属性伤害后(不包括持续性伤害、普攻伤害)，被施加火毒(持续10秒，不可净化；释放主动、连击技能前，受到40.0%火属性智力伤害；火毒属于持续性伤害)，并被驱散2层状态。",
    "descMax": "敌方全体武将每受到3次火属性伤害后(不包括持续性伤害、普攻伤害)，被施加火毒(持续10秒，不可净化；释放主动、连击技能前，受到80.0%火属性智力伤害；火毒属于持续性伤害)，并被驱散2层状态。",
    "type": "指挥",
    "rate": 1,
    "hero": "SP陆逊",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "减益"
    ]
  },
  {
    "id": 43850,
    "name": "质忠节义",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_876.png",
    "desc": "我方任意1名副将造成伤害后(不包括普攻及持续性伤害)，20.0%概率净化另一名副将，并50.0%概率提高其10%伤害(最高提高到60%)。",
    "descMax": "我方任意1名副将造成伤害后(不包括普攻及持续性伤害)，40.0%概率净化另一名副将，并100.0%概率提高其10%伤害(最高提高到60%)。",
    "type": "指挥",
    "rate": 1,
    "hero": "陈到",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43851,
    "name": "忠规直言",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_877.png",
    "desc": "随机对1名敌方武将造成100.0%智力伤害，且对其施加沉默，持续20秒，技能冷却20秒。",
    "descMax": "随机对1名敌方武将造成200.0%智力伤害，且对其施加沉默，持续20秒，技能冷却20秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "田丰",
    "troops": [
      "弓兵"
    ],
    "tags": [
      "智力单体",
      "控制"
    ]
  },
  {
    "id": 43854,
    "name": "戏虎如常",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_878.png",
    "desc": "普攻时，额外对普攻目标造成一次125.0%武力伤害，20.0%概率对其施加虚弱(增伤无效)，持续10秒。",
    "descMax": "普攻时，额外对普攻目标造成一次250.0%武力伤害，40.0%概率对其施加虚弱(增伤无效)，持续10秒。",
    "type": "连击",
    "rate": 0.1,
    "hero": "SP许褚",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体",
      "减益"
    ]
  },
  {
    "id": 43855,
    "name": "制算无遗",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_879.png",
    "desc": "随机对2名敌方武将造成70.0%的毒属性智力伤害，并使其伤害降低15.0%(如果目标已中毒，则效果翻倍)，持续10秒，技能冷却10秒。",
    "descMax": "随机对2名敌方武将造成140.0%的毒属性智力伤害，并使其伤害降低30.0%(如果目标已中毒，则效果翻倍)，持续10秒，技能冷却10秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "SP荀彧",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体",
      "减益"
    ]
  },
  {
    "id": 43856,
    "name": "临危济难",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_891.png",
    "desc": "普攻时，额外对普攻目标造成一次125.0%武力伤害(本次伤害附加30%概率的暴击几率)。",
    "descMax": "普攻时，额外对普攻目标造成一次250.0%武力伤害(本次伤害附加30%概率的暴击几率)。",
    "type": "连击",
    "rate": 0.1,
    "hero": "郭淮",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体"
    ]
  },
  {
    "id": 43857,
    "name": "草木皆兵",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_894.png",
    "desc": "如果我方三名武将的兵种不同，则前30秒，我方主将受到非克制兵种武将的伤害额外降低30.0%；我方2名副将对克制兵种及相同兵种伤害额外提高15.0%(如果触发暴击、神算，则本次增伤效果翻倍)。",
    "descMax": "如果我方三名武将的兵种不同，则前30秒，我方主将受到非克制兵种武将的伤害额外降低60.0%；我方2名副将对克制兵种及相同兵种伤害额外提高30.0%(如果触发暴击、神算，则本次增伤效果翻倍)。",
    "type": "兵法",
    "rate": 1,
    "hero": "牛辅",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43858,
    "name": "知恩图报",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_902.png",
    "desc": "当我方全体普通攻击的伤害总量不高于敌方1倍时，则我方全体受到伤害降低5.0%；当高于敌方1倍时，则我方全体受到伤害降低10.0%；当高于敌方2倍时，则我方全体受到伤害降低17.5%。",
    "descMax": "当我方全体普通攻击的伤害总量不高于敌方1倍时，则我方全体受到伤害降低10.0%；当高于敌方1倍时，则我方全体受到伤害降低20.0%；当高于敌方2倍时，则我方全体受到伤害降低35.0%。",
    "type": "指挥",
    "rate": 1,
    "hero": "孟优（名将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43859,
    "name": "在乱能整",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_905.png",
    "desc": "自身每受到1次普攻后，70%概率可以提高我方枪兵主将2.5%的被动指挥伤害，持续全场(受到1名武将普攻可以叠加4层，受到2名则可叠加8层，受到3名则可叠加16层)。",
    "descMax": "自身每受到1次普攻后，70%概率可以提高我方枪兵主将5.0%的被动指挥伤害，持续全场(受到1名武将普攻可以叠加4层，受到2名则可叠加8层，受到3名则可叠加16层)。",
    "type": "被动",
    "rate": 1,
    "hero": "SP于禁",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43860,
    "name": "力战群英",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_910.png",
    "desc": "提高自身15.0%暴击几率，持续10秒；并随机对2名敌方武将造成80.0%的武力伤害，技能冷却10秒。",
    "descMax": "提高自身30.0%暴击几率，持续10秒；并随机对2名敌方武将造成160.0%的武力伤害，技能冷却10秒。",
    "type": "主动",
    "rate": 0.35,
    "hero": "SP吕布",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力群体",
      "增益"
    ]
  },
  {
    "id": 43861,
    "name": "贯手著棼",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_907.png",
    "desc": "选取1名我方攻速最高的武将，如果其为弓兵，则提高其20.0%伤害，并使其免疫惧近效果，如果其未被近身，则使其受到伤害降低20.0%。",
    "descMax": "选取1名我方攻速最高的武将，如果其为弓兵，则提高其40.0%伤害，并使其免疫惧近效果，如果其未被近身，则使其受到伤害降低40.0%。",
    "type": "指挥",
    "rate": 1,
    "hero": "SP太史慈",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43862,
    "name": "潇湘月影",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_920.png",
    "desc": "随机选取2名我方武将，对其施加1个盾阵(吸收率为75.0%，受智力影响)，持续20秒；如果其已被施加盾阵，则对其恢复一定兵力(回复率75.0%，受智力影响)，技能冷却10秒。",
    "descMax": "随机选取2名我方武将，对其施加1个盾阵(吸收率为150.0%，受智力影响)，持续20秒；如果其已被施加盾阵，则对其恢复一定兵力(回复率150.0%，受智力影响)，技能冷却10秒。",
    "type": "主动",
    "rate": 0.4,
    "hero": "SP小乔",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益",
      "治疗"
    ]
  },
  {
    "id": 43863,
    "name": "水断虬龙",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_917.png",
    "desc": "开场后，友方武将每次施加盾阵时，这名施加盾阵的武将随机对全场一名和自己不同阵营的武将造成50.0%智力伤害。",
    "descMax": "开场后，友方武将每次施加盾阵时，这名施加盾阵的武将随机对全场一名和自己不同阵营的武将造成100.0%智力伤害。",
    "type": "指挥",
    "rate": 1,
    "hero": "SP黄盖",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力单体"
    ]
  },
  {
    "id": 43864,
    "name": "兽困则噬",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_916.png",
    "desc": "敌方满兵力时，对我方弓兵伤害降低30.0%(敌方兵力每降低1%，降低伤害的数值降低0.5%)。",
    "descMax": "敌方满兵力时，对我方弓兵伤害降低60.0%(敌方兵力每降低1%，降低伤害的数值降低1.0%)。",
    "type": "指挥",
    "rate": 1,
    "hero": "黄祖",
    "troops": [
      "弓兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43865,
    "name": "摧锋登难",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_921.png",
    "desc": "前30秒，提高我方全体武将10.0%闪避；使我方全体武将受到连击伤害降低15.0%(我方武将每受到1次连击伤害后，数值降低5.0%，每个武将独立计算，最多降低到0)。",
    "descMax": "前30秒，提高我方全体武将20.0%闪避；使我方全体武将受到连击伤害降低30.0%(我方武将每受到1次连击伤害后，数值降低10.0%，每个武将独立计算，最多降低到0)。",
    "type": "指挥",
    "rate": 1,
    "hero": "SP黄忠",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43866,
    "name": "月下聚雪",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_926.png",
    "desc": "开场降低自身50%伤害，2名异性同阵营友方武将每携带1个连击或主动技能，则提高其12.5%武力伤害；如果友方每有1个同阵营武将，则使自身受到武力伤害降低5.0%。",
    "descMax": "开场降低自身50%伤害，2名异性同阵营友方武将每携带1个连击或主动技能，则提高其25.0%武力伤害；如果友方每有1个同阵营武将，则使自身受到武力伤害降低10.0%。",
    "type": "指挥",
    "rate": 1,
    "hero": "甘夫人（名将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益",
      "减益"
    ]
  },
  {
    "id": 43867,
    "name": "鸣鼓自持",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_931.png",
    "desc": "对2名我方武将分别随机施加以下其一效果：40%暴击几率，1层抵挡，40%武力伤害提高，持续10秒，技能冷却10秒。",
    "descMax": "对2名我方武将分别随机施加以下其一效果：40%暴击几率，1层抵挡，40%武力伤害提高，持续10秒，技能冷却10秒。",
    "type": "主动",
    "rate": 0.25,
    "hero": "王平",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43868,
    "name": "折冲外御",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_933.png",
    "desc": "普攻时，额外对自身造成3段20%武力伤害，对敌方全体造成60.0%武力伤害(本次伤害附加20%概率的暴击几率)。",
    "descMax": "普攻时，额外对自身造成3段20%武力伤害，对敌方全体造成120.0%武力伤害(本次伤害附加20%概率的暴击几率)。",
    "type": "连击",
    "rate": 0.12,
    "hero": "SP魏延",
    "troops": [
      "步兵"
    ],
    "tags": [
      "武力单体",
      "武力群体"
    ]
  },
  {
    "id": 43869,
    "name": "翻飞电发",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_936.png",
    "desc": "普攻时，额外对普攻目标造成一次125.0%武力伤害(如果目标兵力高于50%，则本次伤害额外提高30%)。",
    "descMax": "普攻时，额外对普攻目标造成一次250.0%武力伤害(如果目标兵力高于50%，则本次伤害额外提高30%)。",
    "type": "连击",
    "rate": 0.12,
    "hero": "魏关羽",
    "troops": [
      "骑兵"
    ],
    "tags": [
      "武力单体"
    ]
  },
  {
    "id": 43870,
    "name": "才捷刚猛",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_934.png",
    "desc": "我方政治最高的异性武将每释放1次主动技能、主将技，提高自身10.0%指挥被动伤害，持续全场(不可驱散，最多叠加5层)。",
    "descMax": "我方政治最高的异性武将每释放1次主动技能、主将技，提高自身20.0%指挥被动伤害，持续全场(不可驱散，最多叠加5层)。",
    "type": "被动",
    "rate": 1,
    "hero": "蜀孙尚香",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 86155,
    "name": "举盾伺敌",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_942.png",
    "desc": "前40秒，我方全体无法普攻；敌方全体武将受到主将技、主动技能伤害后，伤害降低5.0%，持续全场(最多叠加4层)；麹义使用此技能时，无法普攻的效果额外增加20秒，且提高我方全体15.0%主动技能伤害，持续全场。",
    "descMax": "前40秒，我方全体无法普攻；敌方全体武将受到主将技、主动技能伤害后，伤害降低10.0%，持续全场(最多叠加4层)；麹义使用此技能时，无法普攻的效果额外增加20秒，且提高我方全体30.0%主动技能伤害，持续全场。",
    "type": "指挥",
    "prepare": 389,
    "rate": 1,
    "hero": "麹义",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益",
      "减益",
      "控制"
    ]
  },
  {
    "id": 43871,
    "name": "奋寡击众",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_940.png",
    "desc": "普攻时，额外对普攻目标造成一次75.0%武力伤害，并对处于包围的敌方武将造成50.0%武力伤害。",
    "descMax": "普攻时，额外对普攻目标造成一次150.0%武力伤害，并对处于包围的敌方武将造成100.0%武力伤害。",
    "type": "连击",
    "rate": 0.1,
    "hero": "SP张辽",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体"
    ]
  },
  {
    "id": 43872,
    "name": "蓝田生玉",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_951.png",
    "desc": "普攻时，额外对普攻目标造成一次125.0%武力伤害(如果目标距离自身较远，则伤害额外提高30%)。",
    "descMax": "普攻时，额外对普攻目标造成一次250.0%武力伤害(如果目标距离自身较远，则伤害额外提高30%)。",
    "type": "连击",
    "rate": 0.12,
    "hero": "诸葛恪",
    "troops": [
      "弓兵"
    ],
    "tags": [
      "武力单体"
    ]
  },
  {
    "id": 43873,
    "name": "智放沈密",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_955.png",
    "desc": "对敌方全体武将造成62.5%智力伤害，该技能从第四次释放开始，伤害率翻倍，技能冷却20秒。",
    "descMax": "对敌方全体武将造成125.0%智力伤害，该技能从第四次释放开始，伤害率翻倍，技能冷却20秒。",
    "type": "主动",
    "rate": 0.5,
    "hero": "SP贾诩",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体"
    ]
  },
  {
    "id": 43874,
    "name": "岐黄之术",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_959.png",
    "desc": "自身恢复一名友方武将兵力后(不包括持续性恢复状态)，提高其5.0%伤害，持续全场(最多叠加4次)，叠加满时，额外增加免控、15.0%暴击几率(自身更换恢复目标后，没有叠加满状态的武将会去掉之前的全部加成)。",
    "descMax": "自身恢复一名友方武将兵力后(不包括持续性恢复状态)，提高其10.0%伤害，持续全场(最多叠加4次)，叠加满时，额外增加免控、30.0%暴击几率(自身更换恢复目标后，没有叠加满状态的武将会去掉之前的全部加成)。",
    "type": "指挥",
    "rate": 1,
    "hero": "SP华佗",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43875,
    "name": "勋书竹帛",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_960.png",
    "desc": "如果自身为我方兵力最少的武将时，我方全体武将受到伤害降低20.0%。",
    "descMax": "如果自身为我方兵力最少的武将时，我方全体武将受到伤害降低40.0%。",
    "type": "指挥",
    "rate": 1,
    "hero": "SP夏侯惇",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43876,
    "name": "驱驰三世",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_964.png",
    "desc": "随机选取2名敌方武将对其造成70.0%智力伤害，并提高自身25.0%治疗能力，持续10秒，技能冷却10秒。",
    "descMax": "随机选取2名敌方武将对其造成140.0%智力伤害，并提高自身50.0%治疗能力，持续10秒，技能冷却10秒。",
    "type": "主动",
    "rate": 0.5,
    "hero": "SP司马懿",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体",
      "增益"
    ]
  },
  {
    "id": 43877,
    "name": "持练缘城",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_962.png",
    "desc": "选取敌方防御最低的武将，对其造成110.0%武力伤害，如果自身处于盾阵，则本次伤害额外附加20%暴击几率，无视目标20%防御，技能冷却10秒。",
    "descMax": "选取敌方防御最低的武将，对其造成220.0%武力伤害，如果自身处于盾阵，则本次伤害额外附加20%暴击几率，无视目标20%防御，技能冷却10秒。",
    "type": "主动",
    "rate": 0.5,
    "hero": "SP甘宁",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力单体"
    ]
  },
  {
    "id": 43878,
    "name": "化流邦国",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_971.png",
    "desc": "前30秒，选取我方异性攻速最高武将，提高其一定数值的暴击几率、破甲(数值受技能携带者初始魅力影响，每20点初始魅力可以额外提高1.0%的数值)。",
    "descMax": "前30秒，选取我方异性攻速最高武将，提高其一定数值的暴击几率、破甲(数值受技能携带者初始魅力影响，每20点初始魅力可以额外提高2.0%的数值)。",
    "type": "指挥",
    "rate": 1,
    "hero": "SP甄姬",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43879,
    "name": "亲系两陈",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_973.png",
    "desc": "普攻时，额外对普攻目标造成一次125.0%武力伤害，并净化我方全体骑兵武将。",
    "descMax": "普攻时，额外对普攻目标造成一次250.0%武力伤害，并净化我方全体骑兵武将。",
    "type": "连击",
    "rate": 0.1,
    "hero": "张姬（名将）",
    "troops": [
      "骑兵"
    ],
    "tags": [
      "武力单体",
      "增益"
    ]
  },
  {
    "id": 43880,
    "name": "熊虎之将",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_979.png",
    "desc": "我方骑兵武将如果携带了主动技能，则分别随机选取2名敌方武将，对其造成25.0%武力伤害，如果敌方全体武将都被造成伤害(不可累积统计)，则对我方全体施加精准，持续10秒，技能冷却10秒。",
    "descMax": "我方骑兵武将如果携带了主动技能，则分别随机选取2名敌方武将，对其造成50.0%武力伤害，如果敌方全体武将都被造成伤害(不可累积统计)，则对我方全体施加精准，持续10秒，技能冷却10秒。",
    "type": "主动",
    "rate": 0.5,
    "hero": "华雄（名将）",
    "troops": [
      "骑兵"
    ],
    "tags": [
      "武力群体",
      "增益"
    ]
  },
  {
    "id": 43881,
    "name": "识伏佐策",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_981.png",
    "desc": "开场使敌方全体武将伤害降低10.0%；我方武力最高武将每受到1次主动、主将、连击攻击后(不包括持续伤害)，70%概率使其伤害提高2.5%，(持续全场，最多叠加6层，不可驱散)。",
    "descMax": "开场使敌方全体武将伤害降低20.0%；我方武力最高武将每受到1次主动、主将、连击攻击后(不包括持续伤害)，70%概率使其伤害提高5.0%，(持续全场，最多叠加6层，不可驱散)。",
    "type": "指挥",
    "rate": 1,
    "hero": "李典（名将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益",
      "减益"
    ]
  },
  {
    "id": 43882,
    "name": "九节符祝",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_986.png",
    "desc": "驱散敌方全体武将身上的所有增益状态，并对其造成85.0%雷属性智力伤害，技能冷却20秒。",
    "descMax": "驱散敌方全体武将身上的所有增益状态，并对其造成170.0%雷属性智力伤害，技能冷却20秒。",
    "type": "主动",
    "rate": 0.5,
    "hero": "SP张角",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体",
      "减益"
    ]
  },
  {
    "id": 43883,
    "name": "黄老道学",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_984.png",
    "desc": "开场对敌方全体施加雷暴(持续雷属性智力伤害，总伤害率25.0%)，不可净化，持续30秒；并使我方全体受到非雷伤害降低10.0%，持续全场，30秒后提高我方全体15.0%雷属性伤害。",
    "descMax": "开场对敌方全体施加雷暴(持续雷属性智力伤害，总伤害率50.0%)，不可净化，持续30秒；并使我方全体受到非雷伤害降低20.0%，持续全场，30秒后提高我方全体30.0%雷属性伤害。",
    "type": "指挥",
    "rate": 1,
    "hero": "SP张梁",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益",
      "减益"
    ]
  },
  {
    "id": 43884,
    "name": "赴难濡足",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_993.png",
    "desc": "敌方被尝试施加主动控制时，如果敌方武力低于施加者，其伤害降低5.0%，持续全场(最多降低到20.0%)；敌方全体共被尝试施加9次时，我方全体武将武力伤害的25.0%可以恢复我方兵力最低的武将。",
    "descMax": "敌方被尝试施加主动控制时，如果敌方武力低于施加者，其伤害降低10.0%，持续全场(最多降低到40.0%)；敌方全体共被尝试施加9次时，我方全体武将武力伤害的50.0%可以恢复我方兵力最低的武将。",
    "type": "指挥",
    "rate": 1,
    "hero": "许攸",
    "troops": [
      "枪兵"
    ],
    "tags": [
      "减益",
      "治疗"
    ]
  },
  {
    "id": 43885,
    "name": "转斗千里",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_997.png",
    "desc": "对敌方武将造成4段40.0%武力伤害，每次目标独立判定，如果对同一目标造成4次伤害，则对其这名目标及其主将施加缴械，持续10秒，冷却10秒。",
    "descMax": "对敌方武将造成4段80.0%武力伤害，每次目标独立判定，如果对同一目标造成4次伤害，则对其这名目标及其主将施加缴械，持续10秒，冷却10秒。",
    "type": "主动",
    "rate": 0.5,
    "hero": "SP夏侯渊",
    "troops": [
      "骑兵"
    ],
    "tags": [
      "武力群体",
      "控制"
    ]
  },
  {
    "id": 43886,
    "name": "抗志清冥",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_1003.png",
    "desc": "开场，50.0%概率对我方全体智力高于武力武将施加免疫虚弱、受到伤害降低25.0%，持续60秒(每10秒时间间隔内，如果我方共被成功施加2次控制后，移除此技能施加的免疫虚弱、减伤)。",
    "descMax": "开场，100.0%概率对我方全体智力高于武力武将施加免疫虚弱、受到伤害降低50.0%，持续60秒(每10秒时间间隔内，如果我方共被成功施加2次控制后，移除此技能施加的免疫虚弱、减伤)。",
    "type": "指挥",
    "rate": 1,
    "hero": "SP曹丕",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43887,
    "name": "军市取利",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_1002.png",
    "desc": "我方同阵营的武力最高的武将，如果其武力高于智力，开场时如果其已处于盾阵状态，则提高其5.0%暴击几率，持续全场，当其处于盾阵时，敌方施加盾阵转移给我方这名武将；这名武将每成功被施加1次盾阵，提高这名武将5.0%暴击几率，持续全场(最多提高25.0%)。",
    "descMax": "我方同阵营的武力最高的武将，如果其武力高于智力，开场时如果其已处于盾阵状态，则提高其10.0%暴击几率，持续全场，当其处于盾阵时，敌方施加盾阵转移给我方这名武将；这名武将每成功被施加1次盾阵，提高这名武将10.0%暴击几率，持续全场(最多提高50.0%)。",
    "type": "指挥",
    "rate": 1,
    "hero": "潘璋",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 50580,
    "name": "挑灯夜战",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_1004.png",
    "desc": "如果我方3名武将为枪兵或者骑兵(可混编)并且开场时我方全体闪避不小于20%，则我方全体受到暴击伤害降低50.0%，不可驱散，持续20秒，且我方任意武将释放连击技能后，使我方全体受到暴击伤害降低50.0%、受到伤害降低15.0%，不可驱散，持续10秒。",
    "descMax": "如果我方3名武将为枪兵或者骑兵(可混编)并且开场时我方全体闪避不小于20%，则我方全体受到暴击伤害降低100.0%，不可驱散，持续20秒，且我方任意武将释放连击技能后，使我方全体受到暴击伤害降低100.0%、受到伤害降低30.0%，不可驱散，持续10秒。",
    "type": "指挥",
    "rate": 1,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43888,
    "name": "归心膺教",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_1005.png",
    "desc": "开场时如果自身为我方智力最高的武将，则提高我方全体50.0点防御，持续全场，该技能释放后我方攻速最高的武将第3次受到我方的非普攻、非持续性伤害后，使自身免疫暴击、提高自身15.0%智力伤害，持续全场；免疫一切增伤无效的状态、持续20秒。",
    "descMax": "开场时如果自身为我方智力最高的武将，则提高我方全体100.0点防御，持续全场，该技能释放后我方攻速最高的武将第3次受到我方的非普攻、非持续性伤害后，使自身免疫暴击、提高自身30.0%智力伤害，持续全场；免疫一切增伤无效的状态、持续20秒。",
    "type": "指挥",
    "rate": 1,
    "hero": "SP孟获",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43889,
    "name": "伤今感昔",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_1007.png",
    "desc": "自身处于控制状态时，则使我方全体受到伤害降低15.0%。",
    "descMax": "自身处于控制状态时，则使我方全体受到伤害降低30.0%。",
    "type": "指挥",
    "rate": 1,
    "hero": "SP蔡文姬",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43890,
    "name": "爱士养名",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_1011.png",
    "desc": "自身免疫暴击，持续全场，并对敌方主将施加缴械，持续20秒(各个整10秒时进行检测，如果自身受到的伤害量占比我方全体50%以下，则移除这两个状态)；如果自身受到的伤害量占比我方全体50%及以上，则友方武力最高的武将造成的指挥伤害的20.0%可以对自身及我方兵力最少武将恢复兵力。",
    "descMax": "自身免疫暴击，持续全场，并对敌方主将施加缴械，持续20秒(各个整10秒时进行检测，如果自身受到的伤害量占比我方全体50%以下，则移除这两个状态)；如果自身受到的伤害量占比我方全体50%及以上，则友方武力最高的武将造成的指挥伤害的40.0%可以对自身及我方兵力最少武将恢复兵力。",
    "type": "指挥",
    "rate": 1,
    "hero": "SP袁绍",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益",
      "治疗",
      "控制"
    ]
  },
  {
    "id": 43891,
    "name": "深谋秘策",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_1013.png",
    "desc": "对敌方武将造成3段45.0%智力伤害(此次伤害额外附加30%神算)，每次目标独立判定，持续10秒，技能冷却10秒。",
    "descMax": "对敌方武将造成3段90.0%智力伤害(此次伤害额外附加30%神算)，每次目标独立判定，持续10秒，技能冷却10秒。",
    "type": "主动",
    "rate": 0.6,
    "hero": "SP司马师",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力单体"
    ]
  },
  {
    "id": 43892,
    "name": "摧围踏阵",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_1018.png",
    "desc": "我方全体武将，使其受到指挥、被动伤害降低15.0%，持续全场；如果30秒时我方全体没有受到指挥被动伤害，则移除此状态，改为受到主动、连击伤害降低15.0%，持续全场。",
    "descMax": "我方全体武将，使其受到指挥、被动伤害降低30.0%，持续全场；如果30秒时我方全体没有受到指挥被动伤害，则移除此状态，改为受到主动、连击伤害降低30.0%，持续全场。",
    "type": "指挥",
    "rate": 1,
    "hero": "XP文丑",
    "troops": [
      "枪兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43893,
    "name": "昭然于世",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_1017.png",
    "desc": "对敌方全体造成50.0%智力伤害，40%概率对其施加力竭，持续10秒，技能冷却10秒。",
    "descMax": "对敌方全体造成100.0%智力伤害，40%概率对其施加力竭，持续10秒，技能冷却10秒。",
    "type": "主动",
    "rate": 0.6,
    "hero": "XP司马昭",
    "troops": [
      "骑兵"
    ],
    "tags": [
      "智力群体",
      "控制"
    ]
  },
  {
    "id": 43894,
    "name": "淑慎纯和",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_1020.png",
    "desc": "提高我方全体15.0%闪避(触发时令所受伤害无效)，持续10秒，如果我方有全场智力最高的武将，则额外提高15.0%破势，持续10秒，技能冷却10秒。",
    "descMax": "提高我方全体30.0%闪避(触发时令所受伤害无效)，持续10秒，如果我方有全场智力最高的武将，则额外提高30.0%破势，持续10秒，技能冷却10秒。",
    "type": "主动",
    "rate": 0.6,
    "hero": "XP王元姬",
    "troops": [
      "步兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43895,
    "name": "心无害戾",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_1021.png",
    "desc": "开场时使敌方全体武将伤害降低10.0%；我方武力最高的武将造成指挥伤害后，提高这名武将5.0%武力伤害(持续全场，最多额外叠加6层，不可净化)。",
    "descMax": "开场时使敌方全体武将伤害降低20.0%；我方武力最高的武将造成指挥伤害后，提高这名武将10.0%武力伤害(持续全场，最多额外叠加6层，不可净化)。",
    "type": "指挥",
    "rate": 1,
    "hero": "SP刘禅",
    "troops": [
      "步兵"
    ],
    "tags": [
      "增益",
      "减益"
    ]
  },
  {
    "id": 43896,
    "name": "勤求古训",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_1025.png",
    "desc": "前20秒，提高我方的主将15.0%闪避；自身对其每进行1次治疗，则使我方全体受到伤害降低5.0%(最高叠加到15.0%)，持续全场。",
    "descMax": "前20秒，提高我方的主将30.0%闪避；自身对其每进行1次治疗，则使我方全体受到伤害降低10.0%(最高叠加到30.0%)，持续全场。",
    "type": "指挥",
    "rate": 1,
    "hero": "SP张仲景",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 43897,
    "name": "横奔雷行",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_1023.png",
    "desc": "提高自身25.0点战斗属性，但降低自身50%伤害；如果自身攻速为全场最高，则前20秒使我方全体受到伤害降低15.0%。",
    "descMax": "提高自身50.0点战斗属性，但降低自身50%伤害；如果自身攻速为全场最高，则前20秒使我方全体受到伤害降低30.0%。",
    "type": "被动",
    "rate": 1,
    "hero": "SP马云禄",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益",
      "减益"
    ]
  },
  {
    "id": 43898,
    "name": "沾渍锋镝",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_1030.png",
    "desc": "开场时使敌方全体武将伤害降低10.0%；我方武力最高的武将对敌方造成连击伤害后，降低其5.0%智力、武力(持续全场，最多额外叠加3层，不可净化)，持续全场。",
    "descMax": "开场时使敌方全体武将伤害降低20.0%；我方武力最高的武将对敌方造成连击伤害后，降低其10.0%智力、武力(持续全场，最多额外叠加3层，不可净化)，持续全场。",
    "type": "指挥",
    "rate": 1,
    "hero": "SP周泰",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "减益"
    ]
  },
  {
    "id": 92438,
    "name": "帆影点点",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_1033.png",
    "desc": "开场时敌方全体伤害降低10.0%，如果我方造成的普攻伤害占比我方总伤害的50%以上，则敌方造成的非普攻伤害降低10.0%。",
    "descMax": "开场时敌方全体伤害降低20.0%，如果我方造成的普攻伤害占比我方总伤害的50%以上，则敌方造成的非普攻伤害降低20.0%。",
    "type": "指挥",
    "rate": 1,
    "hero": "群甘宁",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "减益"
    ]
  },
  {
    "id": 92642,
    "name": "忠心耿耿",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_1038.png",
    "desc": "每次释放主动技能、主将技能后，随机选取2名敌方武将，使其伤害降低5.0%(最多叠加3层)，持续全场，并对其施加禁疗(无法回复兵力)，持续10秒；随机使1名我方武将获得1层抵挡，持续全场。",
    "descMax": "每次释放主动技能、主将技能后，随机选取2名敌方武将，使其伤害降低10.0%(最多叠加3层)，持续全场，并对其施加禁疗(无法回复兵力)，持续10秒；随机使1名我方武将获得1层抵挡，持续全场。",
    "type": "被动",
    "rate": 1,
    "hero": "糜竺（名将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益",
      "减益"
    ]
  },
  {
    "id": 92768,
    "name": "党同伐异",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_1041.png",
    "desc": "提高我方全体5.0%神算几率、破势、5.0%概率免控(自身如果携带2个及以上主动技能，数值翻倍)，持续10秒，并对敌方全体造成30.0%智力伤害，技能冷却10秒。",
    "descMax": "提高我方全体10.0%神算几率、破势、10.0%概率免控(自身如果携带2个及以上主动技能，数值翻倍)，持续10秒，并对敌方全体造成60.0%智力伤害，技能冷却10秒。",
    "type": "主动",
    "rate": 0.6,
    "hero": "SP司马昭",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益",
      "减益"
    ]
  },
  {
    "id": 50579,
    "name": "居功自傲",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_968.png",
    "desc": "普攻时，额外对敌方全体武将造成一次50.0%智力伤害。",
    "descMax": "普攻时，额外对敌方全体武将造成一次100.0%智力伤害。",
    "type": "连击",
    "rate": 0.1,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体"
    ]
  },
  {
    "id": 50647,
    "name": "奇正相生",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_969.png",
    "desc": "我方全体武将必须携带主动、连击、指挥、被动技能，此技能才可生效；自带技能为主动、连击、被动、指挥技能的武将，其有15.0%概率免疫对应技能类型施加的控制效果(其每携带一个对应类型的拆技，则概率额外提高5.0%)，受到对应的类型伤害降低20.0%(受到其他类型的伤害数值减半)。",
    "descMax": "我方全体武将必须携带主动、连击、指挥、被动技能，此技能才可生效；自带技能为主动、连击、被动、指挥技能的武将，其有30.0%概率免疫对应技能类型施加的控制效果(其每携带一个对应类型的拆技，则概率额外提高10.0%)，受到对应的类型伤害降低40.0%(受到其他类型的伤害数值减半)。",
    "type": "兵法",
    "rate": 1,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 92931,
    "name": "孤军奋战",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_1044.png",
    "desc": "普攻时，额外对普攻目标造成一次75.0%武力伤害，并随机对敌方武将造成2段50.0%武力伤害，每次目标独立判定。",
    "descMax": "普攻时，额外对普攻目标造成一次150.0%武力伤害，并随机对敌方武将造成2段100.0%武力伤害，每次目标独立判定。",
    "type": "连击",
    "rate": 0.1,
    "hero": "SP公孙瓒",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力群体"
    ]
  },
  {
    "id": 93068,
    "name": "谗言祸国",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_1045.png",
    "desc": "普攻时，额外对敌方全体武将造成一次35.0%智力伤害(女性武将使用时数值翻倍)。",
    "descMax": "普攻时，额外对敌方全体武将造成一次70.0%智力伤害(女性武将使用时数值翻倍)。",
    "type": "连击",
    "rate": 0.1,
    "hero": "SP孙鲁班",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体"
    ]
  },
  {
    "id": 93150,
    "name": "孤忠继志",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_1050.png",
    "desc": "前20秒使我方全体受到指挥被动伤害降低30.0%；20秒后，提高我方全体35.0%指挥伤害，持续全场。",
    "descMax": "前20秒使我方全体受到指挥被动伤害降低60.0%；20秒后，提高我方全体70.0%指挥伤害，持续全场。",
    "type": "指挥",
    "rate": 1,
    "hero": "关索",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 93637,
    "name": "蛮骑横勇",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_1051.png",
    "desc": "前20秒，我方骑兵主将攻击时10.0%概率附加无视免疫暴击，队伍内每有一名骑兵武将，其概率提高5.0%。我方骑兵主造成暴击伤害后，回复友方兵力最低武将相当于造成伤害30.0%的兵力，该效果持续全场。",
    "descMax": "前20秒，我方骑兵主将攻击时20.0%概率附加无视免疫暴击，队伍内每有一名骑兵武将，其概率提高10.0%。我方骑兵主造成暴击伤害后，回复友方兵力最低武将相当于造成伤害60.0%的兵力，该效果持续全场。",
    "type": "指挥",
    "rate": 1,
    "hero": "兀突骨（名将）",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益",
      "治疗"
    ]
  },
  {
    "id": 93853,
    "name": "静水流深",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_1056.png",
    "desc": "若自身魅力高于敌方全体武将，我方武将受到伤害降低10.0%(根据自身魅力影响)且免疫禁疗；若我方武将受到伤害的初始数值(不计算增伤、减伤)大于我方当前兵力的20.0%，减伤效果翻倍。",
    "descMax": "若自身魅力高于敌方全体武将，我方武将受到伤害降低20.0%(根据自身魅力影响)且免疫禁疗；若我方武将受到伤害的初始数值(不计算增伤、减伤)大于我方当前兵力的10.0%，减伤效果翻倍。",
    "type": "指挥",
    "rate": 1,
    "hero": "SP步练师",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 94259,
    "name": "军无常势",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_1059.png",
    "desc": "自身造成指挥、被动伤害后回复我方兵力最低武将相当于本次伤害15.0%的兵力；每10秒，对敌方全体武将造成25.0%武力伤害，随后判定：若我方有当前场上兵力最低的武将，使我方全体受到治疗效果提高20.0%，持续10秒；若敌方有当前场上兵力最低的武将，使我方全体受到伤害降低20.0%，持续10秒。",
    "descMax": "自身造成指挥、被动伤害后回复我方兵力最低武将相当于本次伤害30.0%的兵力；每10秒，对敌方全体武将造成50.0%武力伤害，随后判定：若我方有当前场上兵力最低的武将，使我方全体受到治疗效果提高40.0%，持续10秒；若敌方有当前场上兵力最低的武将，使我方全体受到伤害降低40.0%，持续10秒。",
    "type": "被动",
    "rate": 1,
    "hero": "SP张郃",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益",
      "武力群体"
    ]
  },
  {
    "id": 94733,
    "name": "共治明时",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_1059.png",
    "desc": "选择友方政治最高武将，拜其为主公，提高其50.0点政治，持续20秒;提高自身10.0%破甲、破势(数值受主公政治影响)，并免疫力竭及增伤无效，持续20秒。冷却20秒。",
    "descMax": "选择友方政治最高武将，拜其为主公，提高其100.0点政治，持续20秒;提高自身20.0%破甲、破势(数值受主公政治影响)，并免疫力竭及增伤无效，持续20秒。冷却20秒。",
    "type": "主动",
    "rate": 0.6,
    "hero": "群赵云",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 94737,
    "name": "秋兰结佩",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_1065.png",
    "desc": "作为副将生效。降低自身80点攻速，持续20秒；提高我方主将40.0%暴击伤害，持续全场。20秒后，降低我方全体武将受到的指挥被动伤害20.0%(受魅力影响)。",
    "descMax": "作为副将生效。降低自身80点攻速，持续20秒；提高我方主将80.0%暴击伤害，持续全场。20秒后，降低我方全体武将受到的指挥被动伤害40.0%(受魅力影响)。",
    "type": "被动",
    "rate": 1,
    "hero": "赵襄",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 95066,
    "name": "督纪朝纲",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_1067.png",
    "desc": "随机对敌方武将造成4段30.0%火属性智力伤害(每段独立判定)，附加精准和25%神算概率。",
    "descMax": "随机对敌方武将造成4段60.0%火属性智力伤害(每段独立判定)，附加精准和25%神算概率。",
    "type": "连击",
    "rate": 0.1,
    "hero": "SP陆抗",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "智力群体"
    ]
  },
  {
    "id": 95305,
    "name": "见微知著",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_1071.png",
    "desc": "自身提高25.0点政治，自带技能伤害提高20.0%；提升友方与自身兵种不同的武将25.0点魅力，持续全场；对政治不如自身且兵种与自身不同的武将施加禁疗，持续30秒。",
    "descMax": "自身提高50.0点政治，自带技能伤害提高40.0%；提升友方与自身兵种不同的武将50.0点魅力，持续全场；对政治不如自身且兵种与自身不同的武将施加禁疗，持续30秒。",
    "type": "指挥",
    "rate": 1,
    "hero": "满宠",
    "troops": [
      "弓兵",
      "骑兵"
    ],
    "tags": [
      "增益",
      "减益"
    ]
  },
  {
    "id": 95462,
    "name": "金石同契",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_1072.png",
    "desc": "我方全体武将自带技能类型互不相同则以下效果生效。前30秒，若我方武将受到了与技能携带者自带技能类别不同的伤害，则使该次伤害降低20.0%；提高我方全体武将10.0%主动技能释放概率。",
    "descMax": "我方全体武将自带技能类型互不相同则以下效果生效。前30秒，若我方武将受到了与技能携带者自带技能类别不同的伤害，则使该次伤害降低40.0%；提高我方全体武将20.0%主动技能释放概率。",
    "type": "指挥",
    "rate": 1,
    "hero": "SP关银屏",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益",
      "减益"
    ]
  },
  {
    "id": 95597,
    "name": "请缨",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_785.png",
    "desc": "若携带者自带技能为连击，则开场时使自身获得1次抵挡和盾阵(吸收率75.0%，受自身攻速影响)并免疫1次控制效果，持续20秒。释放连击技能后，为我方全体武将回复兵力(回复率60.0%，受自身武力和攻速影响)。",
    "descMax": "若携带者自带技能为连击，则开场时使自身获得1次抵挡和盾阵(吸收率150.0%，受自身攻速影响)并免疫1次控制效果，持续20秒。释放连击技能后，为我方全体武将回复兵力(回复率120.0%，受自身武力和攻速影响)。",
    "type": "指挥",
    "rate": 1,
    "hero": "/",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  },
  {
    "id": 95818,
    "name": "忠主守节",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_1077.png",
    "desc": "敌方全体武将造成伤害降低10%，持续全场。自身被施加负面状态时，使敌方全体武将造成伤害降低5.0%，最多叠加5层；叠满后，使我方全体武将免疫破势，效果持续全场。",
    "descMax": "敌方全体武将造成伤害降低10%，持续全场。自身被施加负面状态时，使敌方全体武将造成伤害降低10.0%，最多叠加5层；叠满后，使我方全体武将免疫破势，效果持续全场。",
    "type": "指挥",
    "rate": 1,
    "hero": "SP高顺",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "减益",
      "增益"
    ]
  },
  {
    "id": 95822,
    "name": "斩草除根",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_1080.png",
    "desc": "我方武将释放主动(含主将技)、连击技能前，对敌方武将随机造成3次20.0%武力伤害。该效果每10秒最多触发2次。",
    "descMax": "我方武将释放主动(含主将技)、连击技能前，对敌方武将随机造成3次40.0%武力伤害。该效果每10秒最多触发2次。",
    "type": "指挥",
    "rate": 1,
    "hero": "群张辽",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力群体"
    ]
  },
  {
    "id": 96099,
    "name": "碎羽破空",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_1083.png",
    "desc": "提高自身及友方1名弓兵武将(优先选择攻速最高)10.0%暴击几率，持续10秒，随后自身及这名友方武将分别对敌方武将发动攻击，各造成60.0%武力伤害。",
    "descMax": "提高自身及友方1名弓兵武将(优先选择攻速最高)20.0%暴击几率，持续10秒，随后自身及这名友方武将分别对敌方武将发动攻击，各造成120.0%武力伤害。",
    "type": "连击",
    "rate": 0.12,
    "hero": "SP徐盛",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "武力群体",
      "增益"
    ]
  },
  {
    "id": 96449,
    "name": "芒刺在背",
    "grade": "S",
    "gradeNum": 4,
    "icon": "https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_1086.png",
    "desc": "前20秒，自身造成伤害降低60%，但免疫沉默、眩晕，我方武将受到伤害降低20.0%。10秒时，提高自身30.0%自带技能伤害，受到治疗效果提高15.0%，持续全场。",
    "descMax": "前20秒，自身造成伤害降低60%，但免疫沉默、眩晕，我方武将受到伤害降低40.0%。10秒时，提高自身60.0%自带技能伤害，受到治疗效果提高30.0%，持续全场。",
    "type": "指挥",
    "rate": 1,
    "hero": "SP邓艾",
    "troops": [
      "步兵",
      "弓兵",
      "枪兵",
      "骑兵"
    ],
    "tags": [
      "增益"
    ]
  }
];

const SKILL_STATS = {
  "total": 326,
  "byGrade": {
    "S": 245,
    "A": 58,
    "B": 23
  },
  "byType": {
    "主动": 139,
    "连击": 49,
    "指挥": 81,
    "被动": 38,
    "内政": 6,
    "阵型": 2,
    "兵法": 11
  },
  "allTags": [
    "内政",
    "减益",
    "增益",
    "控制",
    "援护",
    "智力单体",
    "智力群体",
    "武力单体",
    "武力群体",
    "治疗"
  ]
};
