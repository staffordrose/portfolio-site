import type { FC, ReactNode } from 'react'

interface ResumeItemContentProps {
  children: ReactNode
}

const ResumeItemContent: FC<ResumeItemContentProps> = ({ children }) => (
  <div className="flex flex-col items-start gap-1">{children}</div>
)

export default ResumeItemContent
