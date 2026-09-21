import { ExternalLink } from 'lucide-react'
import { education } from '../../data/education'
import { externalLinkProps } from '../../utils/formatters'
import styles from './Education.module.css'

/** Education timeline, grouped by level. Rendered inside the About section. */
export default function Education() {
  return (
    <div className={styles.education}>
      <h3 className={styles.heading}>Education</h3>

      <div className={styles.groups}>
        {education.map((group) => (
          <section key={group.level} className={styles.group} aria-label={group.level}>
            <h4 className={styles.groupTitle}>{group.level}</h4>

            <ol className={styles.timeline}>
              {group.entries.map((entry) => (
                <li key={entry.id} className={styles.item}>
                  <div className={styles.meta}>
                    <span className={styles.years}>{entry.years}</span>
                    {entry.track && <span className={styles.track}>{entry.track}</span>}
                    {entry.current && <span className={styles.badge}>Present</span>}
                  </div>

                  <p className={styles.school}>{entry.school}</p>

                  {entry.mapUrl ? (
                    <a href={entry.mapUrl} className={styles.addressLink} {...externalLinkProps}>
                      {entry.address}
                      <ExternalLink size={13} aria-hidden="true" />
                    </a>
                  ) : (
                    <p className={styles.address}>{entry.address}</p>
                  )}
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </div>
  )
}
