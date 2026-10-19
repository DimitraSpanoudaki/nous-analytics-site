import { useEffect } from 'react'

const BASE = 'Nous Analytics'

// Ορίζει τίτλο και περιγραφή ανά σελίδα, για το Google και τα tabs του browser.
export function useSeo(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${BASE}` : `${BASE} — Sites, αυτοματισμοί, marketing και δεδομένα`
    const meta = document.querySelector('meta[name="description"]')
    if (meta && description) meta.setAttribute('content', description)
  }, [title, description])
}
