// Στέλνει τη φόρμα στο Netlify Forms. Οι αιτήσεις εμφανίζονται στο Netlify > Forms.
export async function submitForm(formName, fields) {
  const body = new URLSearchParams({ 'form-name': formName, ...fields }).toString()
  const res = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  })
  if (!res.ok) throw new Error('Η αποστολή απέτυχε')
}
