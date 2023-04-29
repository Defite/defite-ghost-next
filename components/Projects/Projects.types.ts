import { ICardProps } from '../Card/Card.types'

interface Project extends ICardProps {
  url: string
}

export interface IProjects {
  projects: Project[]
}
