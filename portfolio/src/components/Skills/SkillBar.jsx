import styles from './Skills.module.css'

/**
 * A single language with its confidence bar. The numeric value is also
 * printed as text so the meaning does not depend on the bar alone.
 */
export default function SkillBar({ name, level }) {
  return (
    <li className={styles.skill}>
      <div className={styles.skillHead}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillLevel}>{level}%</span>
      </div>
      <div
        className={styles.track}
        role="meter"
        aria-label={name}
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className={styles.fill} style={{ width: `${level}%` }} />
      </div>
    </li>
  )
}
