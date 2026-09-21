import styles from './EmptyState.module.css'

/**
 * Neutral placeholder used by sections that have no entries yet
 * (Experience, Certifications). Keeps the layout consistent instead of
 * leaving a blank gap.
 */
export default function EmptyState({ icon: Icon, message, note }) {
  return (
    <div className={styles.empty}>
      {Icon && <Icon className={styles.icon} size={22} strokeWidth={1.5} aria-hidden="true" />}
      <p className={styles.message}>{message}</p>
      {note && <p className={styles.note}>{note}</p>}
    </div>
  )
}
