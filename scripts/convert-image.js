import fs from "fs";
import path from "path";
import sharp from "sharp";

const projectRoot = process.cwd();
const publicDir = path.join(projectRoot, "public");
const srcDir = path.join(projectRoot, "app");

const TARGET_EXT = [".png", ".jpg", ".jpeg"];
const TEXT_EXT = [".ts", ".tsx", ".js", ".jsx", ".json", ".css", ".scss", ".md", ".html"];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...walk(full));
    else files.push(full);
  }
  return files;
}

function isTargetImage(file) {
  return TARGET_EXT.includes(path.extname(file).toLowerCase());
}

function isTextFile(file) {
  return TEXT_EXT.includes(path.extname(file).toLowerCase());
}

function toWebpPath(absImagePath) {
  return absImagePath.replace(/\.(png|jpg|jpeg)$/i, ".webp");
}

async function convertImage(absPath) {
  const ext = path.extname(absPath).toLowerCase();
  const webpPath = toWebpPath(absPath);

  if (fs.existsSync(webpPath)) return null;

  let pipeline = sharp(absPath);

  if (ext === ".png") {
    pipeline = pipeline.webp({ lossless: true });
  } else {
    pipeline = pipeline.webp({
      quality: 100,
      nearLossless: true,
      smartSubsample: true,
    });
  }

  await pipeline.toFile(webpPath);
  return webpPath;
}

function updateReferences(oldRel, newRel, files) {
  for (const file of files) {
    let content = fs.readFileSync(file, "utf8");
    const updated = content
      .replaceAll(`/${oldRel}`, `/${newRel}`)
      .replaceAll(oldRel, newRel);

    if (updated !== content) {
      fs.writeFileSync(file, updated);
    }
  }
}

(async function main() {
  console.log("🔍 Scanning images...");
  const imageFiles = walk(publicDir).filter(isTargetImage);
  const textFiles = walk(srcDir).filter(isTextFile);

  const report = [];

  for (const absImage of imageFiles) {
    const relImage = path.relative(publicDir, absImage).replace(/\\/g, "/");
    const webpAbs = await convertImage(absImage);

    if (!webpAbs) continue;

    const relWebp = path.relative(publicDir, webpAbs).replace(/\\/g, "/");

    updateReferences(relImage, relWebp, textFiles);

    report.push({
      from: relImage,
      to: relWebp,
    });

    console.log(`✓ ${relImage} → ${relWebp}`);
  }

  fs.writeFileSync(
    path.join(projectRoot, "image-conversion-report.json"),
    JSON.stringify(report, null, 2)
  );

  console.log("\n✅ Conversion complete");
  console.log("📄 image-conversion-report.json generated");
})();
