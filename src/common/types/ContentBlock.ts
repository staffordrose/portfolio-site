import type { ComponentType } from 'react'

export type ContentBlock = {
  type: string
  props?: Record<string, any>
  content?: string | number
  component?: ComponentType
  children?: ContentBlock[]
}
