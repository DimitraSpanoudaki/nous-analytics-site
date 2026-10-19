import { Link } from 'react-router-dom'
import { useSeo } from '../lib/useSeo.js'
import { articles } from '../lib/articles.js'
import ArticleCard from '../components/ArticleCard.jsx'
import ContactForm from '../components/ContactForm.jsx'
import { SiteIcon, FlowIcon, MegaphoneIcon, ChartIcon } from '../components/Icons.jsx'

const SERVICES = [
  {
    id: 'svc1',
    icon: <SiteIcon />,
    short: 'Site σε WordPress',
    shortText: 'Εταιρικά sites και e-shops που διαχειρίζεσαι μόνος σου.',
    title: 'Κατασκευή site σε WordPress',
    text: 'Εταιρικά sites και e-shops που μπορείς να διαχειρίζεσαι μόνος σου. Σχεδιασμός, ανάπτυξη, βασικό SEO και εκπαίδευση για να ενημερώνεις το περιεχόμενο.',
    tags: 'Εταιρικό site · E-shop · SEO βάσης',
    cta: 'Μίλα μας για το site σου →',
  },
  {
    id: 'svc2',
    icon: <FlowIcon />,
    short: 'Αυτοματισμοί με AI',
    shortText: 'Οι επαναλαμβανόμενες εργασίες γίνονται μόνες τους.',
    title: 'Αυτοματοποιήσεις εργασιών με AI',
    text: 'Αναλαμβάνουμε επαναλαμβανόμενες εργασίες: email, ραντεβού, παραγγελίες, καταχωρήσεις σε φύλλα, αναφορές. Ξεκινάμε από τις διαδικασίες σου και αυτοματοποιούμε ό,τι αξίζει.',
    tags: 'Email & ραντεβού · Έγγραφα & δεδομένα · Αναφορές',
    cta: 'Δες τι μπορεί να αυτοματοποιηθεί →',
  },
  {
    id: 'svc3',
    icon: <MegaphoneIcon />,
    short: 'Digital marketing',
    shortText: 'Google, social και newsletters με στόχους που μετριούνται.',
    title: 'Digital marketing',
    text: 'Παρουσία στο Google και στα social, διαφημίσεις και newsletters, με στόχους που μπορείς να μετρήσεις και να συζητάς μαζί μας κάθε μήνα.',
    tags: 'Social media · Διαφημίσεις · Newsletter · SEO',
    cta: 'Μίλα μας για το marketing →',
  },
  {
    id: 'svc4',
    icon: <ChartIcon />,
    short: 'Business analytics',
    shortText: 'Δεδομένα από ERP ή POS που γίνονται αποφάσεις.',
    title: 'Business analytics',
    text: 'Dashboards και προβλέψεις από τα δεδομένα του ERP ή του POS σου, ώστε να βλέπεις τι πουλάει, τι μένει στα ράφια και τι πρέπει να παραγγείλεις.',
    tags: 'Dashboards · Προβλέψεις · Μηνιαία ανασκόπηση',
    cta: 'Ζήτησε demo →',
  },
]

const STEPS = [
  ['Γνωριμία', 'Συζητάμε για την επιχείρησή σου, τις δυσκολίες και τον στόχο που θέλεις να πετύχεις.'],
  ['Πρόταση', 'Παίρνεις γραπτά τι θα γίνει και πόσο θα κοστίσει, πριν δεσμευτείς σε οτιδήποτε.'],
  ['Υλοποίηση', 'Δουλεύουμε σε στάδια και σου δείχνουμε το αποτέλεσμα ενδιάμεσα, για να προλάβουμε αλλαγές.'],
  ['Υποστήριξη', 'Μετά την παράδοση σε βοηθάμε να το χρησιμοποιείς και να το βελτιώνεις.'],
]

export default function Home() {
  useSeo(
    null,
    'Κατασκευή sites σε WordPress, αυτοματοποιήσεις εργασιών με AI, digital marketing και business analytics για επιχειρήσεις. Θεσσαλονίκη.'
  )
  return (
    <>
      <section id="top" className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">Nous Analytics · Θεσσαλονίκη</span>
            <h1 className="h-display">Ό,τι χρειάζεται η επιχείρησή σου για να δουλεύει καλύτερα online</h1>
            <p className="lead">
              Site, αυτοματισμοί, marketing και δεδομένα στα ίδια χέρια. Ξεκινάς από ό,τι έχεις πιο ανάγκη και
              προσθέτεις τα υπόλοιπα όταν είσαι έτοιμος.
            </p>
            <div className="btn-row">
              <Link to="/#contact" className="btn">
                Κλείσε μια συζήτηση
              </Link>
              <Link to="/#services" className="btn btn-line">
                Δες τις υπηρεσίες
              </Link>
            </div>
          </div>
          <div className="hero-cards">
            <div className="hero-grid">
              {SERVICES.map((s) => (
                <Link key={s.id} to={`/#${s.id}`} className="card svc-card">
                  <span className="svc-icon">{s.icon}</span>
                  <span className="h-sub">{s.short}</span>
                  <span className="small muted">{s.shortText}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="band-dark">
        <div className="container section">
          <div className="section-head">
            <span className="eyebrow eyebrow-dark">Υπηρεσίες</span>
            <h2 className="h-title">Τέσσερις υπηρεσίες, ένας συνεργάτης</h2>
          </div>
          <div className="svc-list">
            {SERVICES.map((s, i) => (
              <div id={s.id} key={s.id} className="svc-row">
                <span className="svc-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="svc-main">
                  <h3 className="h-heading">{s.title}</h3>
                  <p>{s.text}</p>
                </div>
                <div className="svc-side">
                  <span className="small">{s.tags}</span>
                  <Link to="/#contact" className="svc-link">
                    {s.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process">
        <div className="container section">
          <div className="section-head">
            <span className="eyebrow">Πώς δουλεύουμε</span>
            <h2 className="h-title">Πρώτα καταλαβαίνουμε την επιχείρηση, μετά χτίζουμε</h2>
          </div>
          <div className="grid4">
            {STEPS.map(([t, d], i) => (
              <div key={t} className="step">
                <span className="caption">Βήμα {i + 1}</span>
                <h3 className="h-sub">{t}</h3>
                <p className="small muted">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="band-sunken">
        <div className="container section">
          <div className="section-head row">
            <div>
              <span className="eyebrow">Blog</span>
              <h2 className="h-title">Πρακτικές ιδέες για την καθημερινότητα της επιχείρησης</h2>
            </div>
            <Link to="/blog" className="more-link">
              Όλα τα άρθρα →
            </Link>
          </div>
          <div className="grid3">
            {articles.slice(0, 3).map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container section contact">
          <div className="contact-copy">
            <span className="eyebrow">Επικοινωνία</span>
            <h2 className="h-title">Πες μας τι χρειάζεσαι</h2>
            <p className="muted">
              Γράψε μας δυο λόγια για την επιχείρησή σου και θα απαντήσουμε με τα επόμενα βήματα.
            </p>
            <dl className="contact-list">
              <dt>Email</dt>
              <dd>info@nousanalytics.gr</dd>
              <dt>Βάση</dt>
              <dd>Θεσσαλονίκη, Ελλάδα</dd>
              <dt>Απάντηση</dt>
              <dd>Εντός 24 ωρών</dd>
            </dl>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
