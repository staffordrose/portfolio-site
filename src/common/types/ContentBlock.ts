import type { ComponentType } from 'react'

export interface ContentBlock {
  type: string
  props?: Record<string, any>
  content?: string
  component?: ComponentType
  children?: ContentBlock[]
}
