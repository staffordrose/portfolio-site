import type { FC, ReactNode } from 'react'

interface ResumeItemProps {
  children: ReactNode
}

const ResumeItem: FC<ResumeItemProps> = ({ children }) => (
  <li className="flex flex-col gap-1">{children}</li>
)

export default ResumeItem
