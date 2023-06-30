import type { FC, ReactNode } from 'react'

export type ResumeItemContentProps = {
  children: ReactNode
}

export const ResumeItemContent: FC<ResumeItemContentProps> = ({ children }) => (
  <div className="mb-4 last:mb-0">{children}</div>
)
