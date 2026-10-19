import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>
          <strong>Nous Analytics</strong> · © {new Date().getFullYear()} · info@nousanalytics.gr
        </span>
        <span className="footer-links">
          <Link to="/blog">Blog</Link>
          <Link to="/privacy">Πολιτική Απορρήτου</Link>
        </span>
      </div>
    </footer>
  )
}
