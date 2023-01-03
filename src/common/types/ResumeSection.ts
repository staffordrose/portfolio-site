import { ContentBlock } from './ContentBlock'

export type ResumeSection = {
  id: string
  title: string
  animationDelay: number
  children: ContentBlock[]
}
