import styles from './Section.module.css'

/**
 * Shared wrapper for every page section: handles the scroll target id,
 * the container width, and the standard eyebrow + title + subtitle header.
 */
export default function Section({ id, eyebrow, title, subtitle, children, className = '' }) {
  const headingId = `${id}-heading`

  return (
    <section id={id} aria-labelledby={headingId} className={`${styles.section} ${className}`}>
      <div className={styles.container}>
        <header className={styles.header}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h2 id={headingId} className={styles.title}>
            {title}
          </h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}
