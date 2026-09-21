/**
 * Builds a mailto: link from the contact form values.
 *
 * There is no backend in this project, so the form simply hands the message
 * over to the visitor's own email client. Nothing is stored or sent by the site.
 */
export function buildMailtoLink({ to, name, email, message }) {
  const subject = `Portfolio message from ${name || 'a visitor'}`
  const body = [message, '', '—', name, email].filter(Boolean).join('\n')

  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
