const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const baseDir = 'D:\\QClaw工作区\\htzx\\hongtu-main\\hongtu-main';
const iconsDir = path.join(baseDir, 'icons');

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

async function main() {
    console.log('=== 下载3X/4X武将大图 ===\n');
    
    // 读取heroes_data.js
    const heroesJsPath = path.join(baseDir, 'heroes_data.js');
    let heroesJsContent = fs.readFileSync(heroesJsPath, 'utf8');
    
    // 提取HEROES数组
    const match = heroesJsContent.match(/const HEROES=(\[[\s\S]*\]);?$/);
    if (!match) {
        console.log('错误: 未找到HEROES数组');
        return;
    }
    
    const heroes = JSON.parse(match[1]);
    console.log(`总武将数: ${heroes.length}`);
    
    // 筛选3星和4星
    const threeStar = heroes.filter(h => h.cost === 3);
    const fourStar = heroes.filter(h => h.cost === 4);
    
    console.log(`3星武将: ${threeStar.length}`);
    console.log(`4星武将: ${fourStar.length}`);
    
    // 下载3X图标
    console.log('\n下载3X武将大图...');
    let success3 = 0, failed3 = 0;
    for (const hero of threeStar) {
        if (hero.bigUrl && hero.bigUrl.includes('/3X/')) {
            const fileName = hero.bigUrl.split('/').pop();
            const dest = path.join(iconsDir, '3X', fileName);
            
            if (!fs.existsSync(dest)) {
                const url = hero.bigUrl.replace('./icons/', 'https://game.gtimg.cn/images/srpg/act/a20200914wxpx/herobig/');
                // 修正URL: ./icons/3X/091.png -> https://game.gtimg.cn/images/srpg/act/a20200914wxpx/herobig/091.png
                const correctedUrl = `https://game.gtimg.cn/images/srpg/act/a20200914wxpx/herobig/${fileName}`;
                
                try {
                    await downloadFile(correctedUrl, dest);
                    success3++;
                    if (success3 % 5 === 0) process.stdout.write('.');
                } catch (e) {
                    failed3++;
                }
            }
        }
    }
    console.log(`\n3X: 成功${success3}, 失败${failed3}, 共${threeStar.length}个`);
    
    // 下载4X图标
    console.log('\n下载4X武将大图...');
    let success4 = 0, failed4 = 0;
    for (const hero of fourStar) {
        if (hero.bigUrl && hero.bigUrl.includes('/4X/')) {
            const fileName = hero.bigUrl.split('/').pop();
            const dest = path.join(iconsDir, '4X', fileName);
            
            if (!fs.existsSync(dest)) {
                const correctedUrl = `https://game.gtimg.cn/images/srpg/act/a20200914wxpx/herobig/${fileName}`;
                
                try {
                    await downloadFile(correctedUrl, dest);
                    success4++;
                    if (success4 % 5 === 0) process.stdout.write('.');
                } catch (e) {
                    failed4++;
                }
            }
        }
    }
    console.log(`\n4X: 成功${success4}, 失败${failed4}, 共${fourStar.length}个`);
    
    // 验证目录
    console.log('\n验证:');
    console.log(`  icons/3X/: ${fs.readdirSync(path.join(iconsDir, '3X')).filter(f => f.endsWith('.png')).length} 个`);
    console.log(`  icons/4X/: ${fs.readdirSync(path.join(iconsDir, '4X')).filter(f => f.endsWith('.png')).length} 个`);
    
    console.log('\n=== 完成 ===');
}

main().catch(console.error);
