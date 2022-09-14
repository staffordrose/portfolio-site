import { ContentBlock } from './ContentBlock'

export interface ResumeSection {
  id: string
  title: string
  animationDelay: number
  children: ContentBlock[]
}
