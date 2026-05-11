/**
 * 鸿图之下武将数据爬虫
 * 目标：从 87G 手游网抓取所有武将数据
 */

const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.87g.com';
const INDEX_URL = 'https://www.87g.com/zixun/130239.html';

// 请求间隔（ms），避免被封
const DELAY_MS = 1000;

// 武将数据模板
function createHeroTemplate() {
  return {
    name: '',
    faction: '', // 魏/蜀/吴/群
    stars: 0,
   体力: '150/150',
    attributes: {
      武力: { base: 0, growth: 0 },
      防御: { base: 0, growth: 0 },
      智力: { base: 0, growth: 0 },
      攻速: { base: 0, growth: 0 },
      政治: { base: 0, growth: 0 },
      魅力: { base: 0, growth: 0 }
    },
    mainSkill: { name: '', quality: '', type: '', probability: '', effect: '' },
    selfSkill: { name: '', quality: '', type: '', probability: '', effect: '' },
    exchangeSkill: { name: '', quality: '', type: '', count: '', probability: '', effect: '', progress: '' },
    bonds: [] // 武将缘分
  };
}

// 延迟函数
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 非武将名称过滤列表
const EXCLUDE_NAMES = [
  '资讯中心', '游戏资讯', '游戏评测', '游戏攻略', '游戏活动', '新游动态',
  '首页', '游戏库', '论坛', '硬件', '手游', '专题', '礼包', '新闻', '攻略', '排行',
  '更多武将图鉴', '鸿图之下武将图鉴'
];

// 武将名称正则（中文2-4字）
const HERO_NAME_PATTERN = /^[\u4e00-\u9fa5]{2,4}$/;

// 抓取武将列表
async function fetchHeroList() {
  console.log('正在抓取武将列表...');
  try {
    const res = await axios.get(INDEX_URL);
    const $ = cheerio.load(res.data);
    const heroes = [];
    const seen = new Set();

    // 提取所有武将链接
    $('a').each((i, elem) => {
      const href = $(elem).attr('href');
      const text = $(elem).text().trim();
      
      // 过滤条件：
      // 1. href 包含 /zixun/ 且是数字ID
      // 2. 文本是中文姓名（2-4字）
      // 3. 不在排除列表中
      if (!href || !href.match(/\/zixun\/\d+\.html/)) return;
      if (!HERO_NAME_PATTERN.test(text)) return;
      if (EXCLUDE_NAMES.includes(text)) return;
      if (seen.has(text)) return; // 去重
      
      seen.add(text);
      heroes.push({
        name: text,
        url: href.startsWith('http') ? href : BASE_URL + href
      });
    });

    console.log(`找到 ${heroes.length} 个武将链接`);
    return heroes;
  } catch (err) {
    console.error('抓取武将列表失败:', err.message);
    return [];
  }
}

// 从详情页URL推断势力
function inferFaction(url) {
  // 根据URL中的数字ID范围粗略判断（不是绝对准确）
  // 实际应该从页面内容判断
  return '未知';
}

// 抓取单个武将详情
async function fetchHeroDetail(hero) {
  console.log(`抓取 ${hero.name}...`);
  try {
    const res = await axios.get(hero.url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    const $ = cheerio.load(res.data);
    const data = createHeroTemplate();
    
    data.name = hero.name;
    
    // 提取页面文本内容
    const pageText = $('body').text();
    
    // 提取星级
    const starMatches = pageText.match(/★+/g);
    if (starMatches) {
      data.stars = starMatches[0].length;
    }
    
    // 提取势力（从页面标题或内容判断）
    if (pageText.includes('魏国') || pageText.includes('魏')) data.faction = '魏';
    else if (pageText.includes('蜀国') || pageText.includes('蜀')) data.faction = '蜀';
    else if (pageText.includes('吴国') || pageText.includes('吴')) data.faction = '吴';
    else if (pageText.includes('群雄') || pageText.includes('群')) data.faction = '群';
    
    // 提取六维属性
    const attrPattern = /(武力|防御|智力|攻速|政治|魅力)\s*(\d+\.?\d*)\s*\+\s*(\d+\.?\d*)/g;
    let match;
    while ((match = attrPattern.exec(pageText)) !== null) {
      const attrName = match[1];
      const base = parseFloat(match[2]);
      const growth = parseFloat(match[3]);
      if (data.attributes[attrName]) {
        data.attributes[attrName] = { base, growth };
      }
    }
    
    // 提取技能信息
    // 主将技
    const mainSkillSection = pageText.match(/主将技[^\n]*\n([^\n]+)\n\s*品质(\S+)\n\s*类型[：:]*(\S+)\n\s*概率[：:]*([^\n]+)\n\s*效果[：:]*([^\n]+)/);
    if (mainSkillSection) {
      data.mainSkill = {
        name: mainSkillSection[1].trim(),
        quality: mainSkillSection[2].trim(),
        type: mainSkillSection[3].trim(),
        probability: mainSkillSection[4].trim(),
        effect: mainSkillSection[5].trim()
      };
    }
    
    // 自带武技
    const selfSkillSection = pageText.match(/自带武技[^\n]*\n([^\n]+)\n\s*品质(\S+)\n\s*类型[：:]*(\S+)\n\s*概率[：:]*([^\n]+)\n\s*效果[：:]*([^\n]+)/);
    if (selfSkillSection) {
      data.selfSkill = {
        name: selfSkillSection[1].trim(),
        quality: selfSkillSection[2].trim(),
        type: selfSkillSection[3].trim(),
        probability: selfSkillSection[4].trim(),
        effect: selfSkillSection[5].trim()
      };
    }
    
    // 兑换武技
    const exchangeSkillSection = pageText.match(/兑换武技[^\n]*\n([^\n]+)\n\s*品质(\S+)\n\s*类型[：:]*(\S+)\n\s*次数[：:]*([^\n]+)\n\s*概率[：:]*([^\n]+)\n\s*效果[：:]*([^\n]+)/);
    if (exchangeSkillSection) {
      data.exchangeSkill = {
        name: exchangeSkillSection[1].trim(),
        quality: exchangeSkillSection[2].trim(),
        type: exchangeSkillSection[3].trim(),
        count: exchangeSkillSection[4].trim(),
        probability: exchangeSkillSection[5].trim(),
        effect: exchangeSkillSection[6].trim()
      };
    }
    
    // 武将缘分
    const bondPattern = /([^\n]+)\n([^\n]+)\n([^\n]+)\n([^\n]+)/g;
    const bondSection = pageText.match(/武将缘分([\s\S]*?)以上就是/);
    if (bondSection) {
      const bondText = bondSection[1];
      const bondNamePattern = /([^+\n]+)(?:\+([^+\n]+))*(?:\+([^+\n]+))*(?:\+([^+\n]+))*\n([^\n]+)/g;
      let bondMatch;
      while ((bondMatch = bondNamePattern.exec(bondText)) !== null) {
        data.bonds.push({
          name: bondMatch[1].trim(),
          condition: bondMatch[0].trim(),
          effect: bondMatch[5] ? bondMatch[5].trim() : ''
        });
      }
    }
    
    console.log(`  ✓ ${hero.name} 抓取完成`);
    return data;
  } catch (err) {
    console.error(`  ✗ ${hero.name} 抓取失败:`, err.message);
    return null;
  }
}

// 主函数
async function main() {
  console.log('=== 鸿图之下武将数据爬虫 ===\n');
  
  // 1. 抓取武将列表
  const heroes = await fetchHeroList();
  if (heroes.length === 0) {
    console.error('未找到武将列表，退出');
    return;
  }
  
  // 2. 逐个抓取详情
  const allData = [];
  for (let i = 0; i < heroes.length; i++) {
    const hero = heroes[i];
    console.log(`[${i + 1}/${heroes.length}]`, hero.name);
    
    const detail = await fetchHeroDetail(hero);
    if (detail) {
      allData.push(detail);
    }
    
    // 延迟，避免请求过快
    if (i < heroes.length - 1) {
      await sleep(DELAY_MS);
    }
  }
  
  // 3. 保存数据
  const outputPath = path.join(__dirname, 'htzx_heroes.json');
  fs.writeFileSync(outputPath, JSON.stringify(allData, null, 2), 'utf-8');
  
  console.log('\n=== 抓取完成 ===');
  console.log(`共抓取 ${allData.length} 个武将数据`);
  console.log(`数据已保存到: ${outputPath}`);
  
  // 4. 按势力统计
  const factionStats = {};
  allData.forEach(hero => {
    const f = hero.faction || '未知';
    factionStats[f] = (factionStats[f] || 0) + 1;
  });
  console.log('\n按势力统计:');
  Object.keys(factionStats).sort().forEach(f => {
    console.log(`  ${f}: ${factionStats[f]} 人`);
  });
}

main().catch(console.error);
