import Section from '../ui/Section'
import ProjectCard from './ProjectCard'
import { projects, projectsNote } from '../../data/projects'
import { getSocialUrl } from '../../data/socialLinks'
import { externalLinkProps } from '../../utils/formatters'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I have built"
      subtitle="A selection of academic and personal projects. Click a card to open the project."
    >
      <ul className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>

      <p className={styles.note}>
        {projectsNote.before}
        <a href={getSocialUrl('github')} className={styles.noteLink} {...externalLinkProps}>
          {projectsNote.linkLabel}
        </a>
      </p>
    </Section>
  )
}
