import Section from '../ui/Section'
import { services } from '../../data/services'
import styles from './Services.module.css'

export default function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="What I can help with"
      subtitle="The kind of work I take on, whether it is a full build or a smaller piece of an existing project."
    >
      <ul className={styles.grid}>
        {services.map(({ id, title, description, Icon }) => (
          <li key={id} className={styles.card}>
            <span className={styles.iconWrap}>
              <Icon size={20} strokeWidth={1.6} aria-hidden="true" />
            </span>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
