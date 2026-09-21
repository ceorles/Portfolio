import { socialLinks } from '../../data/socialLinks'
import { externalLinkProps } from '../../utils/formatters'
import styles from './SocialLinks.module.css'

/**
 * Renders the social profiles from data/socialLinks.js.
 * `variant` — "compact" for icon-only buttons (hero), "cards" for labelled rows (contact).
 */
export default function SocialLinks({ variant = 'compact', className = '' }) {
  const isCards = variant === 'cards'

  return (
    <ul className={`${isCards ? styles.cards : styles.compact} ${className}`}>
      {socialLinks.map(({ id, name, handle, url, Icon }) => (
        <li key={id}>
          <a
            href={url}
            className={isCards ? styles.card : styles.iconLink}
            aria-label={isCards ? undefined : name}
            {...externalLinkProps}
          >
            <Icon size={isCards ? 20 : 18} strokeWidth={1.75} aria-hidden="true" />
            {isCards && (
              <span className={styles.cardText}>
                <span className={styles.cardName}>{name}</span>
                <span className={styles.cardHandle}>{handle}</span>
              </span>
            )}
          </a>
        </li>
      ))}
    </ul>
  )
}
