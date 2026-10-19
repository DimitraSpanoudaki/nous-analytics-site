import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          Nous Analytics
        </Link>
        <nav className="nav" aria-label="Κύριο μενού">
          <Link to="/#services">Υπηρεσίες</Link>
          <Link to="/#process">Πώς δουλεύουμε</Link>
          <NavLink to="/blog">Blog</NavLink>
          <Link to="/#contact">Επικοινωνία</Link>
          <Link to="/#contact" className="btn btn-small">
            Κλείσε συζήτηση
          </Link>
        </nav>
      </div>
    </header>
  )
}
