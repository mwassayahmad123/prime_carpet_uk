const fs = require('fs');
const path = require('path');
const hbs = require('hbs');

const rootDir = path.join(__dirname, '..');
const viewsDir = path.join(rootDir, 'views');
const publicDir = path.join(rootDir, 'public');
const outDir = path.join(rootDir, 'dist-site');

const { buildHomeViewModel, buildAboutViewModel, buildServiceViewModel } = require(
  path.join(rootDir, 'dist', 'view-model'),
);
const { SERVICES_PAGES } = require(path.join(rootDir, 'dist', 'services-data'));
const { SITE_URL } = require(path.join(rootDir, 'dist', 'site-data'));

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

function compileView(name) {
  const template = fs.readFileSync(path.join(viewsDir, `${name}.hbs`), 'utf8');
  return hbs.handlebars.compile(template);
}

function writePage(relativeOutPath, html) {
  const filePath = path.join(outDir, relativeOutPath, 'index.html');
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, html);
}

function buildSitemap(urls) {
  const entries = urls
    .map(
      (loc) => `  <url>\n    <loc>${loc}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${loc === `${SITE_URL}/` ? '1.0' : '0.8'}</priority>\n  </url>`,
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
}

function main() {
  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });

  registerPartialsSync(path.join(viewsDir, 'partials'));

  const indexTemplate = compileView('index');
  const aboutTemplate = compileView('about');
  const serviceTemplate = compileView('service');

  writePage('.', indexTemplate(buildHomeViewModel()));
  writePage('about', aboutTemplate(buildAboutViewModel()));

  const urls = [`${SITE_URL}/`, `${SITE_URL}/about/`];

  for (const service of SERVICES_PAGES) {
    writePage(`services/${service.slug}`, serviceTemplate(buildServiceViewModel(service)));
    urls.push(`${SITE_URL}/services/${service.slug}/`);
  }

  copyDir(publicDir, outDir);
  fs.writeFileSync(path.join(outDir, 'sitemap.xml'), buildSitemap(urls));

  // eslint-disable-next-line no-console
  console.log(`Static site written to ${outDir} (${urls.length} pages)`);
}

main();
