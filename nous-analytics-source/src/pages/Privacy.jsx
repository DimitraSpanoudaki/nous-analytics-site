import { marked } from 'marked'
import { useSeo } from '../lib/useSeo.js'
import { parseMarkdown } from '../lib/articles.js'
import raw from '../content/privacy.md?raw'

const { meta, body } = parseMarkdown(raw)
const html = marked.parse(body)

export default function Privacy() {
  useSeo(meta.title || 'Πολιτική Απορρήτου', 'Πώς η Nous Analytics συλλέγει και χρησιμοποιεί τα δεδομένα σου.')
  return (
    <article className="container post">
      <h1 className="h-display">{meta.title || 'Πολιτική Απορρήτου'}</h1>
      <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  )
}
