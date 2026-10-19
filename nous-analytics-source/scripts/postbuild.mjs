// Μετά το build: φτιάχνει το sitemap.xml με την αρχική, το blog και κάθε άρθρο.
import { readdirSync, writeFileSync } from 'node:fs'

const SITE = 'https://nousanalytics.gr'
const dir = new URL('../src/content/articles/', import.meta.url)

const urls = ['/', '/blog', '/privacy']
for (const f of readdirSync(dir)) {
  if (f.endsWith('.md')) urls.push('/blog/' + f.replace(/\.md$/, ''))
}

const xml =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map((u) => `  <url><loc>${SITE}${u}</loc></url>`).join('\n') +
  '\n</urlset>\n'

writeFileSync(new URL('../dist/sitemap.xml', import.meta.url), xml)
console.log('sitemap.xml: ' + urls.length + ' σελίδες')
