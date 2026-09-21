import Section from '../ui/Section'
import TagList from '../ui/TagList'
import SkillBar from './SkillBar'
import { skills, tools } from '../../data/skills'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Languages and tools"
      subtitle="The bars are a rough indication of how comfortable I am with each language, not a formal score."
    >
      <div className={styles.layout}>
        <ul className={styles.skills}>
          {skills.map((skill) => (
            <SkillBar key={skill.id} name={skill.name} level={skill.level} />
          ))}
        </ul>

        <div className={styles.tools}>
          <h3 className={styles.toolsTitle}>Also working with</h3>
          <TagList items={tools} label="Tools and technologies" />
        </div>
      </div>
    </Section>
  )
}
