import type { FC, ReactNode } from 'react'
import { css } from 'twind'

interface ResumeItemContentProps {
  children: ReactNode
}

const ResumeItemContent: FC<ResumeItemContentProps> = ({ children }) => (
  <div
    className={`${css`
      & > :not(:last-child) {
        margin-bottom: 1rem;
      }
    `}`}
  >
    {children}
  </div>
)

export default ResumeItemContent
