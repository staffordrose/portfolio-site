import type { ComponentType } from 'react'

export interface ContentBlock {
  type: string
  props?: any
  content?: string
  component?: ComponentType
  children?: ContentBlock[]
}
