import { useState } from 'react'
import { Link } from 'react-router-dom'
import { submitForm } from '../lib/submitForm.js'

const SERVICES = [
  'Κατασκευή site σε WordPress',
  'Αυτοματοποιήσεις με AI',
  'Digital marketing',
  'Business analytics',
  'Δεν είμαι σίγουρος/η',
]

export default function ContactForm() {
  const [status, setStatus] = useState('idle')

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    if (data.get('bot-field')) return
    setStatus('sending')
    try {
      await submitForm('contact', {
        name: data.get('name'),
        email: data.get('email'),
        service: data.get('service'),
        message: data.get('message') || '',
      })
      form.reset()
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="form-card" role="status">
        <h3>Λάβαμε το αίτημά σου</h3>
        <p>Θα επικοινωνήσουμε μαζί σου εντός 24 ωρών.</p>
      </div>
    )
  }

  return (
    <form className="form-card" onSubmit={onSubmit}>
      <p className="hp" aria-hidden="true">
        <label>
          Μην το συμπληρώσεις <input name="bot-field" tabIndex="-1" autoComplete="off" />
        </label>
      </p>
      <div className="field">
        <label htmlFor="f-name">Όνομα</label>
        <input id="f-name" name="name" type="text" required autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="f-email">Email</label>
        <input id="f-email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="f-service">Τι σε ενδιαφέρει</label>
        <select id="f-service" name="service" defaultValue={SERVICES[0]}>
          {SERVICES.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="f-msg">Μήνυμα</label>
        <textarea id="f-msg" name="message" rows="4" />
      </div>
      <label className="check">
        <input type="checkbox" name="consent" required />
        <span>
          Συμφωνώ με την επεξεργασία των δεδομένων μου για την απάντηση στο αίτημά μου.{' '}
          <Link to="/privacy">Πολιτική Απορρήτου</Link>
        </span>
      </label>
      <button className="btn" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Αποστολή…' : 'Στείλε το αίτημα'}
      </button>
      {status === 'error' && (
        <p className="form-error" role="alert">
          Η αποστολή δεν πέτυχε. Δοκίμασε ξανά ή γράψε μας στο info@nousanalytics.gr.
        </p>
      )}
    </form>
  )
}
