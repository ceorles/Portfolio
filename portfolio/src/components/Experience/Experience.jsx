import { Briefcase } from 'lucide-react'
import EmptyState from '../ui/EmptyState'
import { experience, experienceFallback } from '../../data/experience'
import styles from './Experience.module.css'

/**
 * Work experience. Falls back to an honest placeholder while
 * data/experience.js has no entries.
 */
export default function Experience() {
  return (
    <div className={styles.experience}>
      <h3 className={styles.heading}>Experience</h3>

      {experience.length === 0 ? (
        <EmptyState
          icon={Briefcase}
          message="No professional experience yet"
          note={experienceFallback}
        />
      ) : (
        <ol className={styles.list}>
          {experience.map((item) => (
            <li key={item.id} className={styles.item}>
              <span className={styles.years}>{item.years}</span>
              <div>
                <p className={styles.role}>{item.role}</p>
                <p className={styles.org}>{item.org}</p>
                {item.description && <p className={styles.description}>{item.description}</p>}
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}
