const fs = require('fs');
const path = require('path');
const hbs = require('hbs');

const rootDir = path.join(__dirname, '..');
const viewsDir = path.join(rootDir, 'views');
const publicDir = path.join(rootDir, 'public');
const outDir = path.join(rootDir, 'dist-site');

const { buildHomeViewModel } = require(path.join(rootDir, 'dist', 'view-model'));

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function registerPartialsSync(partialsDir) {
  for (const entry of fs.readdirSync(partialsDir, { withFileTypes: true })) {
    if (!entry.isFile() || !entry.name.endsWith('.hbs')) continue;
    const name = entry.name.slice(0, -'.hbs'.length);
    const content = fs.readFileSync(path.join(partialsDir, entry.name), 'utf8');
    hbs.handlebars.registerPartial(name, content);
  }
}

function main() {
  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });

  registerPartialsSync(path.join(viewsDir, 'partials'));

  const template = fs.readFileSync(path.join(viewsDir, 'index.hbs'), 'utf8');
  const compiled = hbs.handlebars.compile(template);
  const html = compiled(buildHomeViewModel());

  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  copyDir(publicDir, outDir);

  // eslint-disable-next-line no-console
  console.log(`Static site written to ${outDir}`);
}

main();
