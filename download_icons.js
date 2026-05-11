const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// 读取数据
const data = fs.readFileSync('heroes_data.js', 'utf8');
const jsonStr = data.replace(/^const HEROES=/, '').replace(/;$/, '');
const heroes = JSON.parse(jsonStr);

// 收集所有iconUrl
const urls = heroes
  .filter(h => h.iconUrl)
  .map(h => ({ id: h.id, name: h.name, url: h.iconUrl, bigUrl: h.bigUrl }));

// 去重
const uniqueUrls = [];
const seen = new Set();
for (const u of urls) {
  if (!seen.has(u.url)) {
    seen.add(u.url);
    uniqueUrls.push(u);
  }
}

console.log(`武将数量: ${heroes.length}`);
console.log(`去重后图片数: ${uniqueUrls.length}`);

// 创建icons目录
const iconsDir = 'icons';
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// 下载单个图片
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(iconsDir, filename);
    if (fs.existsSync(filePath)) {
      console.log(`已存在: ${filename}`);
      resolve();
      return;
    }
    
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filePath);
    
    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // 重定向
        downloadImage(response.headers.location, filename).then(resolve).catch(reject);
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`下载完成: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {});
      reject(err);
    });
  });
}

// 批量下载
async function downloadAll() {
  console.log('\n开始下载头像图片...\n');
  
  let completed = 0;
  const total = uniqueUrls.length;
  
  for (const item of uniqueUrls) {
    try {
      // 从URL提取文件名
      const urlParts = item.url.split('/');
      const filename = urlParts[urlParts.length - 1];
      await downloadImage(item.url, filename);
      completed++;
      if (completed % 20 === 0) {
        console.log(`进度: ${completed}/${total}`);
      }
    } catch (err) {
      console.log(`下载失败: ${item.url} - ${err.message}`);
    }
    // 稍微延迟，避免过快
    await new Promise(r => setTimeout(r, 100));
  }
  
  console.log(`\n完成! 共下载 ${completed}/${total} 张图片`);
}

downloadAll().catch(console.error);