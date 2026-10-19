import { Link } from 'react-router-dom'
import { useSeo } from '../lib/useSeo.js'

export default function NotFound() {
  useSeo('Η σελίδα δεν βρέθηκε')
  return (
    <section className="container post">
      <h1 className="h-display">Η σελίδα δεν βρέθηκε</h1>
      <p className="lead">Ο σύνδεσμος ίσως άλλαξε ή η σελίδα δεν υπάρχει πια.</p>
      <div className="btn-row">
        <Link to="/" className="btn">
          Πήγαινε στην αρχική
        </Link>
        <Link to="/blog" className="btn btn-line">
          Δες το blog
        </Link>
      </div>
    </section>
  )
}
