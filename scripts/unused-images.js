import fs from 'fs';
import path from 'path';

const publicDir = path.join(process.cwd(), 'public');
const srcDir = path.join(process.cwd(), 'app');

const imageExt = ['.png', '.jpg', '.jpeg', '.jfif', '.svg', '.gif', '.webp', '.avif', '.ico'];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...walk(full));
    else files.push(full);
  }
  return files;
}

function isImage(file) {
  return imageExt.includes(path.extname(file).toLowerCase());
}

// collect public images
const publicFiles = walk(publicDir).filter(isImage);
const publicRel = publicFiles.map(f => path.relative(publicDir, f).replace(/\\/g, '/'));

// read all source text files under src
const srcFiles = walk(srcDir).filter(f => {
  const ext = path.extname(f).toLowerCase();
  return ['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.scss', '.md', '.html'].includes(ext);
});

const srcContents = srcFiles.map(f => fs.readFileSync(f, 'utf8'));
const allText = srcContents.join('\n');

const unused = {};
for (const rel of publicRel) {
  const withSlash = `/${rel}`;
  const basename = rel.split('/').pop();
  if (allText.indexOf(withSlash) === -1 && allText.indexOf(basename) === -1) {
    unused[rel] = true;
  }
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

const outPath = path.join(process.cwd(), 'unused-images.json');

const args = process.argv.slice(2);
const doDelete = args.includes('--delete');
const permanent = args.includes('--permanent');

const result = { unused };

if (doDelete && Object.keys(unused).length) {
  const trashDir = path.join(publicDir, '.trash_unused_images');
  ensureDir(trashDir);
  const deleted = [];
  for (const rel of Object.keys(unused)) {
    const abs = path.join(publicDir, rel);
    try {
      if (!fs.existsSync(abs)) continue;
      if (permanent) {
        fs.unlinkSync(abs);
        deleted.push(rel);
      } else {
        const target = path.join(trashDir, rel);
        ensureDir(path.dirname(target));
        fs.renameSync(abs, target);
        deleted.push(rel);
      }
    } catch (err) {
      console.error('Failed to remove', abs, err.message);
    }
  }
  result.deleted = deleted;
}

fs.writeFileSync(outPath, JSON.stringify(result, null, 2));
console.log('Wrote', outPath);
console.log(JSON.stringify(result, null, 2));
