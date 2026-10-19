import { Link } from 'react-router-dom'
import { formatDate, tintFor } from '../lib/articles.js'

export default function ArticleCard({ article }) {
  const meta = [article.category, formatDate(article.date), article.minutes && `${article.minutes}′ ανάγνωση`]
    .filter(Boolean)
    .join(' · ')
  return (
    <article className="card article-card">
      <div className="card-band" style={{ background: tintFor(article.category) }} />
      <div className="card-body">
        <span className="caption">{meta}</span>
        <h3 className="h-sub">
          <Link to={`/blog/${article.slug}`} className="card-link">
            {article.title}
          </Link>
        </h3>
        {article.summary && <p className="small muted">{article.summary}</p>}
      </div>
    </article>
  )
}
