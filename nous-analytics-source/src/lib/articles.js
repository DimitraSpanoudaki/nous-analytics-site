import { marked } from 'marked'

// Κάθε αρχείο .md μέσα στο src/content/articles είναι ένα άρθρο.
const files = import.meta.glob('../content/articles/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export function parseMarkdown(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  const meta = {}
  if (m) {
    m[1].split(/\r?\n/).forEach((line) => {
      const i = line.indexOf(':')
      if (i > 0) {
        meta[line.slice(0, i).trim()] = line
          .slice(i + 1)
          .trim()
          .replace(/^["']|["']$/g, '')
      }
    })
  }
  return { meta, body: m ? m[2] : raw }
}

export const articles = Object.entries(files)
  .map(([path, raw]) => {
    const { meta, body } = parseMarkdown(raw)
    const slug = path.split('/').pop().replace(/\.md$/, '')
    return {
      slug,
      title: meta.title || slug,
      category: meta.category || '',
      date: meta.date || '',
      minutes: meta.minutes || '',
      summary: meta.summary || '',
      html: marked.parse(body),
    }
  })
  .sort(
    (a, b) =>
      (b.date || '').localeCompare(a.date || '') ||
      a.title.localeCompare(b.title, 'el')
  )

export const categories = [
  'Όλα',
  ...new Set(articles.map((a) => a.category).filter(Boolean)),
]

const TINTS = ['#A8D3EA', '#CBE4F2', '#D9F2EA', '#CED3D9']
export function tintFor(category) {
  const list = categories.slice(1)
  const i = Math.max(0, list.indexOf(category))
  return TINTS[i % TINTS.length]
}

export function formatDate(iso) {
  if (!iso) return ''
  const d = new Date(iso + 'T12:00:00')
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString('el-GR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
