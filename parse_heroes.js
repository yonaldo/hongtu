const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const baseDir = 'D:\\QClaw工作区\\htzx\\hongtu-main\\hongtu-main';

function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        const protocol = url.startsWith('https') ? https : http;
        const file = fs.createWriteStream(dest);
        
        protocol.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    resolve(true);
                });
            } else {
                file.close();
                fs.unlink(dest, () => {});
                resolve(false);
            }
        }).on('error', (err) => {
            fs.unlink(dest, () => {});
            reject(err);
        });
    });
}

function downloadJson(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve(data));
            res.on('error', reject);
        }).on('error', reject);
    });
}

async function main() {
    console.log('=== 鸿图之下 三星/四星武将数据抓取 ===\n');
    
    // 1. 下载武将JSON
    console.log('1. 下载武将数据...');
    const jsonStr = await downloadJson('https://war.qq.com/act/a20200914wxpx/wujiang.json');
    const data = JSON.parse(jsonStr);
    const heroes = data.wujiang;
    
    // 筛选3星和4星
    const threeStar = heroes.filter(h => h.wjxj_94 === 3);
    const fourStar = heroes.filter(h => h.wjxj_94 === 4);
    
    console.log(`   三星武将: ${threeStar.length}个`);
    console.log(`   四星武将: ${fourStar.length}个`);
    
    // 2. 创建目录
    const dir3X = path.join(baseDir, 'icons', '3X');
    const dir4X = path.join(baseDir, 'icons', '4X');
    fs.mkdirSync(dir3X, { recursive: true });
    fs.mkdirSync(dir4X, { recursive: true });
    console.log('\n2. 创建目录 icons/3X 和 icons/4X');
    
    // 3. 转换数据格式
    console.log('\n3. 转换数据格式...');
    
    function convertHero(hero, cost) {
        const heroIconUrl = hero.wjtxicon_79 || '';
        const heroIconMatch = heroIconUrl.match(/General_(\d+)\.png$/);
        const heroIconNum = heroIconMatch ? heroIconMatch[1] : hero.wjid_b9.toString();
        
        const bigPicUrl = hero.wjbiggwpic || '';
        const bigPicMatch = bigPicUrl.match(/(\d+)\.png$/);
        const bigPicNum = bigPicMatch ? bigPicMatch[1] : hero.wjid_b9.toString();
        
        const skillIconUrl = hero.wjicon_40 || '';
        const skillIconMatch = skillIconUrl.match(/General_Skill_(\d+)\.png$/);
        const skillIconNum = skillIconMatch ? skillIconMatch[1] : hero.wjid_b9.toString();
        
        const factionMap = { '魏': '魏', '蜀': '蜀', '吴': '吴', '群': '群' };
        const faction = factionMap[hero.slgs_ce] || '群';
        
        const troopMap = {
            '步兵': '步兵', '弓兵': '弓兵', '枪兵': '枪兵', '骑兵': '骑兵'
        };
        const troop = troopMap[hero.wjbz_cd] || '步兵';
        
        const ssTags = hero.jnxg_zj ? hero.jnxg_zj.split(' ') : [];
        
        const bonds = [];
        if (hero.yfmc1_97 && hero.yfmc1_97 !== '/') {
            bonds.push({
                name: hero.yfmc1_97,
                heroIds: hero.xcxwdwjk1_1b ? hero.xcxwdwjk1_1b.split('、').map(Number).filter(n => !isNaN(n)) : [],
                desc: hero.yfsm1_25 || ''
            });
        }
        if (hero.yfmc2_97 && hero.yfmc2_97 !== '/') {
            bonds.push({
                name: hero.yfmc2_97,
                heroIds: hero.xcxwdwjk2_1b ? hero.xcxwdwjk2_1b.split('、').map(Number).filter(n => !isNaN(n)) : [],
                desc: hero.yfsm2_25 || ''
            });
        }
        if (hero.yfmc3_97 && hero.yfmc3_97 !== '/') {
            bonds.push({
                name: hero.yfmc3_97,
                heroIds: hero.xcxwdwjk3_1b ? hero.xcxwdwjk3_1b.split('、').map(Number).filter(n => !isNaN(n)) : [],
                desc: hero.yfsm3_25 || ''
            });
        }
        
        const total = (hero.wlzjcsz_89 || 0) + (hero.fyzjcsz_37 || 0) + 
                       (hero.zlzjcsz_64 || 0) + (hero.gsjcsz_53 || 0) +
                       (hero.zzjcsz_d7 || 0) + (hero.ljcsz_87 || 0);
        
        return {
            id: hero.wjid_b9,
            name: hero.wjmc_4b,
            faction: faction,
            cost: cost,
            troop: troop,
            force: hero.wlzjcsz_89,
            forceG: hero.wlzzcsz_7e,
            def: hero.fyzjcsz_37,
            defG: hero.fyzzcsz_01,
            int: hero.zlzjcsz_64,
            intG: hero.zlzzcsz_dd,
            spd: hero.gsjcsz_53,
            spdG: hero.gszcsz_0b,
            pol: hero.zzjcsz_d7,
            polG: hero.zzzcsz_d9,
            cha: hero.ljcsz_87,
            chaG: hero.lzcsz_78,
            msName: hero.zjjwjmc_17 || '',
            msQual: hero.zjjwjdj_c9 || 'B',
            msType: hero.zjjjnlx_be || '主动',
            msProb: '',
            msDesc: hero.zjjwjsm_13 || '',
            ssName: hero.wjmc_17 || '',
            ssQual: hero.wjdj_c9 || 'B',
            ssType: hero.jnlx_be || '主动',
            ssDesc: hero.wjsm_13 || '',
            esName: '',
            esQual: '',
            esType: '',
            esDesc: '',
            bonds: bonds,
            mainTag: [],
            selfTag: [],
            // 图标路径 - bigUrl使用3X或4X目录
            iconUrl: `./icons/wujiang/General_${heroIconNum}.png`,
            bigUrl: `./icons/${cost}X/${bigPicNum}.png`,
            // 保存原始武技图标URL用于下载
            _skillIconUrl: skillIconUrl,
            total: Math.round(total * 10) / 10
        };
    }
    
    // 转换
    const convertedThreeStar = threeStar.map(h => convertHero(h, 3));
    const convertedFourStar = fourStar.map(h => convertHero(h, 4));
    const allNewHeroes = [...convertedThreeStar, ...convertedFourStar];
    
    console.log(`   转换完成: ${allNewHeroes.length}个武将`);
    
    // 4. 下载图标
    console.log('\n4. 下载图标...');
    
    // 获取已存在的图标
    const existingIcons = new Set();
    const wujiangDir = path.join(baseDir, 'icons', 'wujiang');
    const wujiDir = path.join(baseDir, 'icons', 'wuji');
    
    if (fs.existsSync(wujiangDir)) {
        fs.readdirSync(wujiangDir).forEach(f => {
            if (f.endsWith('.png')) existingIcons.add('wujiang/' + f);
        });
    }
    if (fs.existsSync(wujiDir)) {
        fs.readdirSync(wujiDir).forEach(f => {
            if (f.endsWith('.png')) existingIcons.add('wuji/' + f);
        });
    }
    
    console.log(`   已存在图标: ${existingIcons.size}个`);
    
    // 下载头像到 wujiang/
    const toDownload = [];
    
    allNewHeroes.forEach(hero => {
        // 头像图标
        const iconFileName = `General_${path.basename(hero.iconUrl, '.png').replace('General_', '')}.png`;
        const iconName = `wujiang/${iconFileName}`;
        if (!existingIcons.has(iconName)) {
            toDownload.push({
                url: hero.iconUrl.replace('./icons/', 'https://game.gtimg.cn/images/srpg/act/a20200914wxpx/'),
                dest: path.join(baseDir, 'icons', iconName),
                name: iconName
            });
        }
        
        // 武技图标到 wuji/
        if (hero._skillIconUrl) {
            const skillMatch = hero._skillIconUrl.match(/General_Skill_(\d+)\.png$/);
            if (skillMatch) {
                const skillName = `wuji/General_Skill_${skillMatch[1]}.png`;
                if (!existingIcons.has(skillName)) {
                    toDownload.push({
                        url: hero._skillIconUrl,
                        dest: path.join(baseDir, 'icons', skillName),
                        name: skillName
                    });
                }
            }
        }
        
        // 大图到 3X/ 或 4X/
        const bigFileName = `${path.basename(hero.bigUrl, '.png')}.png`;
        const bigDir = hero.cost === 3 ? '3X' : '4X';
        const bigName = `${bigDir}/${bigFileName}`;
        const bigUrl = hero.bigUrl.replace('./icons/', 'https://game.gtimg.cn/images/srpg/act/a20200914wxpx/');
        if (!existingIcons.has(bigName)) {
            toDownload.push({
                url: bigUrl,
                dest: path.join(baseDir, 'icons', bigName),
                name: bigName
            });
        }
    });
    
    console.log(`   需要下载: ${toDownload.length}个图标`);
    
    // 下载图标
    let success = 0, failed = 0;
    for (const item of toDownload) {
        try {
            await downloadFile(item.url, item.dest);
            success++;
            if (success % 10 === 0) process.stdout.write('.');
        } catch (e) {
            failed++;
        }
    }
    console.log(`\n   下载完成: 成功${success}, 失败${failed}`);
    
    // 5. 更新heroes_data.js
    console.log('\n5. 更新heroes_data.js...');
    
    const heroesJsPath = path.join(baseDir, 'heroes_data.js');
    let heroesJsContent = fs.readFileSync(heroesJsPath, 'utf8');
    
    // 找到HEROES数组的结束位置
    let startIdx = heroesJsContent.indexOf('const HEROES=');
    if (startIdx === -1) {
        console.log('   错误: 未找到HEROES数组');
        return;
    }
    
    // 找到数组开始和结束括号
    let bracketCount = 0;
    let arrayStart = -1;
    let arrayEnd = -1;
    
    for (let i = startIdx + 'const HEROES='.length; i < heroesJsContent.length; i++) {
        if (heroesJsContent[i] === '[' && arrayStart === -1) {
            arrayStart = i;
            bracketCount = 1;
        } else if (arrayStart !== -1) {
            if (heroesJsContent[i] === '[') bracketCount++;
            if (heroesJsContent[i] === ']') {
                bracketCount--;
                if (bracketCount === 0) {
                    arrayEnd = i;
                    break;
                }
            }
        }
    }
    
    if (arrayStart === -1 || arrayEnd === -1) {
        console.log('   错误: 无法解析HEROES数组');
        return;
    }
    
    // 提取现有武将
    const existingArrayStr = heroesJsContent.substring(arrayStart + 1, arrayEnd);
    let existingHeroes;
    try {
        existingHeroes = JSON.parse('[' + existingArrayStr + ']');
    } catch (e) {
        console.log('   错误: 无法解析现有武将数据', e.message);
        return;
    }
    
    console.log(`   现有武将: ${existingHeroes.length}个`);
    
    // 合并数据
    const existingIds = new Set(existingHeroes.map(h => h.id));
    const newHeroesToAdd = allNewHeroes.map(h => {
        const { _skillIconUrl, ...rest } = h;
        return rest;
    }).filter(h => !existingIds.has(h.id));
    
    console.log(`   新增武将: ${newHeroesToAdd.length}个`);
    
    const mergedHeroes = [...existingHeroes, ...newHeroesToAdd];
    
    // 生成新内容
    const prefix = heroesJsContent.substring(0, startIdx);
    const suffix = heroesJsContent.substring(arrayEnd + 1);
    const newArrayStr = JSON.stringify(mergedHeroes, null, 2);
    const newContent = prefix + 'const HEROES=' + newArrayStr + ';';
    
    // 写入文件
    const bom = Buffer.from([0xEF, 0xBB, 0xBF]);
    const fileContent = Buffer.from(newContent, 'utf8');
    fs.writeFileSync(heroesJsPath, Buffer.concat([bom, fileContent]));
    
    console.log(`   更新完成！总计: ${mergedHeroes.length}个武将`);
    
    // 6. 验证
    console.log('\n6. 验证结果...');
    const finalContent = fs.readFileSync(heroesJsPath, 'utf8');
    const costMatches = finalContent.match(/"cost":(\d+)/g) || [];
    const costs = costMatches.map(m => m.match(/\d+/)[0]);
    const costGroups = {};
    costs.forEach(c => { costGroups[c] = (costGroups[c] || 0) + 1; });
    
    console.log('   武将星级分布:');
    Object.keys(costGroups).sort().forEach(c => {
        console.log(`     ${c}星: ${costGroups[c]}个`);
    });
    
    console.log('\n=== 完成 ===');
}

main().catch(console.error);
