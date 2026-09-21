import { ArrowDown, Mail } from 'lucide-react'
import meImage from '../../assets/images/me.png'
import { profile } from '../../data/profile'
import { scrollToSection } from '../../utils/scroll'
import SocialLinks from '../SocialLinks/SocialLinks'
import styles from './Hero.module.css'

export default function Hero() {
  const handleJump = (event, id) => {
    if (scrollToSection(id)) event.preventDefault()
  }

  return (
    <section id="home" aria-labelledby="home-heading" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.text}>
          <p className={styles.eyebrow}>{profile.role}</p>
          <h1 id="home-heading" className={styles.title}>
            Hi, I&apos;m <span className={styles.name}>{profile.name}</span>
          </h1>
          <p className={styles.tagline}>{profile.tagline}</p>

          <div className={styles.actions}>
            <a
              href="#projects"
              className={styles.primaryButton}
              onClick={(event) => handleJump(event, 'projects')}
            >
              View my work
              <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className={styles.secondaryButton}
              onClick={(event) => handleJump(event, 'contact')}
            >
              Get in touch
              <Mail size={16} aria-hidden="true" />
            </a>
          </div>

          <SocialLinks variant="compact" className={styles.socials} />
        </div>

        <div className={styles.portraitWrapper}>
          <div className={styles.portraitFrame}>
            <img
              src={meImage}
              alt={`Portrait of ${profile.name}`}
              className={styles.portrait}
              width="320"
              height="320"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
