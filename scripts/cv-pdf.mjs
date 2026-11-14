// Render dist/<lang>/cv/ to public/cv/Linfeng_Chen_CV_<LANG>.pdf.
// Run after `astro build`, inside the Playwright image (see Makefile: `make cv`).
import { chromium } from 'playwright';
import http from 'node:http';
import { readFile, stat, mkdir } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('dist');
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.pdf': 'application/pdf' };
const server = http.createServer(async (req, res) => {
  try {
    let p = path.join(root, decodeURIComponent(new URL(req.url, 'http://x').pathname));
    if ((await stat(p)).isDirectory()) p = path.join(p, 'index.html');
    res.writeHead(200, { 'content-type': types[path.extname(p)] ?? 'application/octet-stream' });
    res.end(await readFile(p));
  } catch {
    res.writeHead(404).end();
  }
});
await new Promise((r) => server.listen(4399, r));

await mkdir('public/cv', { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage();
for (const lang of ['en', 'ja', 'zh']) {
  await page.goto(`http://localhost:4399/${lang}/cv/`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  const out = `public/cv/Linfeng_Chen_CV_${lang.toUpperCase()}.pdf`;
  await page.pdf({ path: out, format: 'A4', printBackground: true, preferCSSPageSize: true });
  console.log('wrote', out);
}
await browser.close();
server.close();
