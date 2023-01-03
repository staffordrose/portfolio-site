import type { FC, ReactNode } from 'react'
import { css } from 'twind'

export type ResumeItemContentProps = {
  children: ReactNode
}

export const ResumeItemContent: FC<ResumeItemContentProps> = ({ children }) => (
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
