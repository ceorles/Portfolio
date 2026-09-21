import { Mail, MapPin } from 'lucide-react'
import Section from '../ui/Section'
import SocialLinks from '../SocialLinks/SocialLinks'
import ContactForm from './ContactForm'
import { profile } from '../../data/profile'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Get in touch"
      subtitle="Happy to talk about a project, a collaboration, or anything you are working on."
    >
      <div className={styles.layout}>
        <div className={styles.details}>
          <ul className={styles.detailList}>
            <li className={styles.detail}>
              <Mail size={18} strokeWidth={1.75} aria-hidden="true" />
              <span>
                <span className={styles.detailLabel}>Email</span>
                <a href={`mailto:${profile.email}`} className={styles.detailLink}>
                  {profile.email}
                </a>
              </span>
            </li>
            <li className={styles.detail}>
              <MapPin size={18} strokeWidth={1.75} aria-hidden="true" />
              <span>
                <span className={styles.detailLabel}>Location</span>
                {profile.location}
              </span>
            </li>
          </ul>

          <div className={styles.socialBlock}>
            <h3 className={styles.socialTitle}>Elsewhere</h3>
            <SocialLinks variant="cards" />
          </div>
        </div>

        <ContactForm />
      </div>
    </Section>
  )
}
