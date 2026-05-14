const fs = require('fs');
const path = require('path');

let uuidMap = {};

function scanOriginalData(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      scanOriginalData(fullPath);
    } else if (fullPath.endsWith('.json')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const matches = content.match(/https:\/\/(ucarecdn\.com|[^.]+\.ucarecd\.net)\/([a-f0-9-]+)\//g);
      if (matches) {
        for (const match of matches) {
          const uuid = match.split('/')[3];
          const short = uuid.substring(0, 8);
          uuidMap[short] = uuid;
        }
      }
    }
  }
}
scanOriginalData('./src/data/pages');
console.log('Found UUIDs:', Object.keys(uuidMap).length);

let replacedCount = 0;
function replaceInContent(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInContent(fullPath);
    } else if (fullPath.endsWith('.json')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      content = content.replace(/\/images\/photos\/ucare-([a-f0-9]{8})-([^\.]+)\.jpg/g, (match, short, dims) => {
        if (uuidMap[short]) {
          changed = true;
          replacedCount++;
          return `https://ucarecdn.com/${uuidMap[short]}/-/format/auto/-/quality/smart/-/preview/${dims}/`;
        }
        return match;
      });
      if (changed) fs.writeFileSync(fullPath, content);
    }
  }
}
replaceInContent('./src/content/pages');
console.log('Replaced local images with optimized CDN links:', replacedCount);
