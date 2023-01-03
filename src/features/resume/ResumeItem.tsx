import type { FC, ReactNode } from 'react'

export type ResumeItemProps = {
  children: ReactNode
}

export const ResumeItem: FC<ResumeItemProps> = ({ children }) => (
  <li className="flex flex-col gap-1">{children}</li>
)
