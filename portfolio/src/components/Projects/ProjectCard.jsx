import { ArrowUpRight } from 'lucide-react'
import TagList from '../ui/TagList'
import { externalLinkProps } from '../../utils/formatters'
import styles from './Projects.module.css'

/**
 * One project. The whole card is a single link so clicking the image,
 * the title or the body all open the project in a new tab.
 */
export default function ProjectCard({ project }) {
  const { title, description, tags, image, url } = project

  return (
    <li className={styles.card}>
      <a href={url} className={styles.cardLink} {...externalLinkProps}>
        <div className={styles.thumbWrap}>
          <img
            src={image}
            alt={`Screenshot of the ${title} project`}
            className={styles.thumb}
            loading="lazy"
          />
        </div>

        <div className={styles.body}>
          <h3 className={styles.title}>
            {title}
            <ArrowUpRight size={16} className={styles.arrow} aria-hidden="true" />
            <span className="visually-hidden">(opens in a new tab)</span>
          </h3>
          <p className={styles.description}>{description}</p>
          {tags?.length > 0 && <TagList items={tags} label={`${title} technologies`} />}
        </div>
      </a>
    </li>
  )
}
