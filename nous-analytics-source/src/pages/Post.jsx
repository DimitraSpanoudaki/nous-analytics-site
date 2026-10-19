import { Link, useParams } from 'react-router-dom'
import { useSeo } from '../lib/useSeo.js'
import { articles, formatDate } from '../lib/articles.js'
import Newsletter from '../components/Newsletter.jsx'
import NotFound from './NotFound.jsx'

export default function Post() {
  const { slug } = useParams()
  const article = articles.find((a) => a.slug === slug)
  useSeo(article?.title, article?.summary)
  if (!article) return <NotFound />

  const meta = [article.category, formatDate(article.date), article.minutes && `${article.minutes}′ ανάγνωση`]
    .filter(Boolean)
    .join(' · ')

  return (
    <>
      <article className="container post">
        <Link to="/blog" className="back">
          ← Όλα τα άρθρα
        </Link>
        <span className="caption">{meta}</span>
        <h1 className="h-display">{article.title}</h1>
        <div className="prose" dangerouslySetInnerHTML={{ __html: article.html }} />
      </article>
      <Newsletter />
    </>
  )
}
