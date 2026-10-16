import { readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { renderPage } from '../.ssr/render.js';

const template = await readFile('dist/index.html', 'utf8');
if (!template.includes('<!--page-html-->')) throw new Error('Static page outlet missing');
await writeFile('dist/index.html', template.replace('<!--page-html-->', () => renderPage()));
const notFound = template
  .replace(/<title>.*?<\/title>/, '<title>页面不存在 · CQU Moe</title>')
  .replace(/<link rel="canonical"[^>]*>/, '<meta name="robots" content="noindex" />')
  .replace(/<meta property="og:[^>]*>/g, '')
  .replace('<!--page-html-->', () => renderPage(true));
await writeFile('dist/404.html', notFound);

// Permit the exact shared first-paint theme script, not arbitrary inline scripts.
const scriptHashes = [...template.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)]
  .map(([, source]) => source)
  .filter(Boolean)
  .map(source => "'sha256-" + createHash('sha256').update(source).digest('base64') + "'");
const headers = [
  '/*',
  '  X-Content-Type-Options: nosniff',
  '  Referrer-Policy: strict-origin-when-cross-origin',
  '  X-Frame-Options: DENY',
  "  Content-Security-Policy: default-src 'self'; script-src 'self' " + scriptHashes.join(' ') + "; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'; form-action 'none'",
  '',
  '/assets/*',
  '  Cache-Control: public, max-age=31536000, immutable',
  '',
].join('\n');
await writeFile('dist/_headers', headers);
console.log('Generated homepage, 404 page and response headers.');
