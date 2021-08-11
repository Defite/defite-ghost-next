import Card from '../Card/Card'
import * as T from './Projects.types'
import styles from './styles.module.css'

const Projects: React.FunctionComponent<T.IProjects> = ({ projects }) => {
  if (!projects) {
    return null
  }

  return (
    <div className={styles.projects}>
      {projects.map((project, index) => {
        return (
          <Card
            className={styles.projectCard}
            {...project}
            key={`card-${index}`}
          />
        )
      })}
    </div>
  )
}

export default Projects
