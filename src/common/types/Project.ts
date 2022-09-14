import { ContentBlock } from './ContentBlock'

export interface Project {
  id: string
  url: string | null
  githubUrl: string | null
  image?: {
    src: string
    alt?: string
  }
  title: string
  flag?: string
  description?: ContentBlock[]
  technologies?: string[]
}
