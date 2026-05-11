const fs = require('fs');

// 读取原始数据
const rawData = JSON.parse(fs.readFileSync('htzx_official_skills.json', 'utf8'));
const skills = rawData.wuji;

// 等级映射
const GRADE_MAP = { 4: 'S', 3: 'A', 2: 'B', 1: 'C' };

// 转换数据
const result = skills.map(s => ({
  id: s.wjid_cc,
  name: s.wjmc_17,
  grade: GRADE_MAP[s.wjdj_c9] || 'C',
  gradeNum: s.wjdj_c9,
  icon: s.wjicon_40,
  desc: s.wjsm_13,
  descMax: s.mjxg_fe,
  type: s.jnlx_be,
  prepare: s.zdwj_d3,
  rate: s.fdjl_98,
  hero: s.dhcc_c9,
  troops: s.sybz_82 ? s.sybz_82.split(',') : [],
  tags: s.jnxg_cj ? s.jnxg_cj.split(' ') : []
}));

// 统计信息
const stats = {
  total: result.length,
  byGrade: {},
  byType: {},
  allTags: []
};

result.forEach(s => {
  stats.byGrade[s.grade] = (stats.byGrade[s.grade] || 0) + 1;
  stats.byType[s.type] = (stats.byType[s.type] || 0) + 1;
  s.tags.forEach(t => {
    if (!stats.allTags.includes(t)) stats.allTags.push(t);
  });
});

stats.allTags.sort();

// 输出JS文件
const jsContent = `// 鸿图之下武技数据 - 自动生成
const SKILLS = ${JSON.stringify(result, null, 2)};

const SKILL_STATS = ${JSON.stringify(stats, null, 2)};
`;

fs.writeFileSync('skills_data.js', jsContent, 'utf8');
console.log('生成完成: skills_data.js');
console.log('武技总数:', stats.total);
console.log('等级分布:', stats.byGrade);
console.log('类型分布:', stats.byType);
