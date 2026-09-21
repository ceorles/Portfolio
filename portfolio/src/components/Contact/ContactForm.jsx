import { useState } from 'react'
import { Send } from 'lucide-react'
import { profile } from '../../data/profile'
import { buildMailtoLink } from '../../utils/mailto'
import styles from './Contact.module.css'

const EMPTY_FORM = { name: '', email: '', message: '' }

/**
 * Frontend-only contact form. Submitting opens the visitor's email client
 * with the message pre-filled — the site has no server and stores nothing.
 */
export default function ContactForm() {
  const [values, setValues] = useState(EMPTY_FORM)
  const [opened, setOpened] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setOpened(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    window.location.href = buildMailtoLink({ to: profile.email, ...values })
    setOpened(true)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          placeholder="Your name"
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          placeholder="What would you like to build?"
          required
        />
      </div>

      <button type="submit" className={styles.submit}>
        Open in email app
        <Send size={16} aria-hidden="true" />
      </button>

      <p className={styles.formNote} role="status">
        {opened
          ? 'Your email app should now be open with the message ready to send.'
          : 'This form opens your own email app — nothing is sent or stored by this site.'}
      </p>
    </form>
  )
}
