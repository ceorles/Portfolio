import { Award, ExternalLink } from 'lucide-react'
import Section from '../ui/Section'
import EmptyState from '../ui/EmptyState'
import { certifications, certificationsFallback } from '../../data/certifications'
import { externalLinkProps } from '../../utils/formatters'
import styles from './Certifications.module.css'

/**
 * Certifications. Shows a placeholder while data/certifications.js is empty
 * rather than inventing entries.
 */
export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Certifications"
      subtitle="Courses and credentials will be listed here as I earn them."
    >
      {certifications.length === 0 ? (
        <EmptyState icon={Award} message={certificationsFallback} />
      ) : (
        <ul className={styles.grid}>
          {certifications.map((item) => {
            const content = (
              <>
                <Award size={20} strokeWidth={1.6} className={styles.icon} aria-hidden="true" />
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.issuer}>
                  {item.issuer}
                  {item.year ? ` · ${item.year}` : ''}
                </p>
                {item.url && <ExternalLink size={14} className={styles.arrow} aria-hidden="true" />}
              </>
            )

            return (
              <li key={item.id} className={styles.card}>
                {item.url ? (
                  <a href={item.url} className={styles.cardLink} {...externalLinkProps}>
                    {content}
                  </a>
                ) : (
                  content
                )}
              </li>
            )
          })}
        </ul>
      )}
    </Section>
  )
}
