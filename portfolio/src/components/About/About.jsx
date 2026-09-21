import { MapPin, GraduationCap } from 'lucide-react'
import Section from '../ui/Section'
import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import { profile } from '../../data/profile'
import styles from './About.module.css'

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A little about me"
      subtitle="Where I am from, what I study, and how I got into building software."
    >
      <div className={styles.intro}>
        <div className={styles.bio}>
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <ul className={styles.facts}>
          <li className={styles.fact}>
            <MapPin size={18} strokeWidth={1.75} aria-hidden="true" />
            <span>
              <span className={styles.factLabel}>Based in</span>
              {profile.location}
            </span>
          </li>
          <li className={styles.fact}>
            <GraduationCap size={18} strokeWidth={1.75} aria-hidden="true" />
            <span>
              <span className={styles.factLabel}>Currently</span>
              Studying at Dalubhasaan ng Lungsod ng Lucena
            </span>
          </li>
        </ul>
      </div>

      <Education />
      <Experience />
    </Section>
  )
}
