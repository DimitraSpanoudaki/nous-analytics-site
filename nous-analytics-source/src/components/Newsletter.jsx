import { useState } from 'react'
import { Link } from 'react-router-dom'
import { submitForm } from '../lib/submitForm.js'

export default function Newsletter() {
  const [status, setStatus] = useState('idle')

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    if (data.get('bot-field')) return
    setStatus('sending')
    try {
      await submitForm('newsletter', { email: data.get('email') })
      form.reset()
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="band-sunken">
      <div className="container newsletter">
        <div className="newsletter-copy">
          <h2 className="h-title">Λάβε τα νέα άρθρα στο email σου</h2>
          <p className="muted">
            Ένα μήνυμα όταν δημοσιεύουμε κάτι καινούργιο. Μπορείς να διαγραφείς όποτε θέλεις.{' '}
            <Link to="/privacy">Πολιτική Απορρήτου</Link>
          </p>
        </div>
        {status === 'done' ? (
          <p role="status" className="newsletter-done">
            Ευχαριστούμε, η εγγραφή σου καταχωρήθηκε.
          </p>
        ) : (
          <form className="newsletter-form" onSubmit={onSubmit}>
            <p className="hp" aria-hidden="true">
              <label>
                Μην το συμπληρώσεις <input name="bot-field" tabIndex="-1" autoComplete="off" />
              </label>
            </p>
            <label htmlFor="n-email" className="sr-only">
              Email
            </label>
            <input id="n-email" name="email" type="email" required placeholder="Το email σου" autoComplete="email" />
            <button className="btn" type="submit" disabled={status === 'sending'}>
              Εγγραφή
            </button>
            {status === 'error' && (
              <p className="form-error" role="alert">
                Η εγγραφή δεν πέτυχε. Δοκίμασε ξανά.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}
