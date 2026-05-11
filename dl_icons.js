const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const ICON_DIR = 'icons';
if (!fs.existsSync(ICON_DIR)) fs.mkdirSync(ICON_DIR);

const data = JSON.parse(fs.readFileSync('htzx_5star_heroes.json', 'utf8'));
const heroes = Object.values(data);
console.log('武将数:', heroes.length);

const urls = [];
const seen = new Set();
heroes.forEach(h => {
  if (h.images?.icon && !seen.has(h.images.icon)) {
    seen.add(h.images.icon);
    urls.push(h.images.icon);
  }
});
console.log('唯一头像:', urls.length);

// 测试下载
function dl(url) {
  return new Promise((res, rej) => {
    const fn = path.join(ICON_DIR, path.basename(url));
    if (fs.existsSync(fn) && fs.statSync(fn).size > 0) { res(); return; }
    const file = fs.createWriteStream(fn);
    (url.startsWith('https') ? https : http).get(url, r => {
      if (r.statusCode === 302 || r.statusCode === 301) {
        dl(r.headers.location).then(res).catch(rej);
        return;
      }
      r.pipe(file);
      file.on('finish', () => { file.close(); res(); });
    }).on('error', e => { fs.unlink(fn, () => {}); rej(e); });
  });
}

async function run() {
  for (let i = 0; i < urls.length; i++) {
    try {
      await dl(urls[i]);
      process.stdout.write('.');
    } catch (e) {
      process.stdout.write('x');
    }
    if ((i + 1) % 50 === 0) console.log(` ${i+1}/${urls.length}`);
    if (i % 2 === 0) await new Promise(r => setTimeout(r, 80));
  }
  const cnt = fs.readdirSync(ICON_DIR).length;
  console.log(`\n完成! 下载了 ${cnt} 张头像`);
}
run().catch(console.error);