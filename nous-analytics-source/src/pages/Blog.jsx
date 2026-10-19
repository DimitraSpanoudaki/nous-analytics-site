import { useState } from 'react'
import { useSeo } from '../lib/useSeo.js'
import { articles, categories } from '../lib/articles.js'
import ArticleCard from '../components/ArticleCard.jsx'
import Newsletter from '../components/Newsletter.jsx'

export default function Blog() {
  useSeo('Blog', 'Άρθρα για business intelligence, αποθέματα, αριθμοδείκτες και πρόβλεψη πωλήσεων για επιχειρήσεις λιανικής.')
  const [cat, setCat] = useState('Όλα')
  const list = articles.filter((a) => cat === 'Όλα' || a.category === cat)

  return (
    <>
      <section>
        <div className="container page-head">
          <span className="eyebrow">Blog</span>
          <h1 className="h-display">Σημειώσεις για δεδομένα, αποθέματα και αποφάσεις</h1>
        </div>
      </section>

      <section>
        <div className="container pills" role="group" aria-label="Κατηγορίες">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              className={'pill' + (c === cat ? ' pill-on' : '')}
              aria-pressed={c === cat}
              onClick={() => setCat(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section>
        <div className="container blog-grid">
          <div className="grid3">
            {list.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
