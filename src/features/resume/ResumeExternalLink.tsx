import type { FC, ReactNode } from 'react'

export type ResumeExternalLinkProps = {
  href: string
  children: ReactNode
}

export const ResumeExternalLink: FC<ResumeExternalLinkProps> = ({
  href,
  children,
}) => (
  <a
    className={`
        flex gap-1 items-center
        text-(navy-700 dark:navy-200)
        hover:(text-(navy-900 dark:navy-50))
      `}
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
)
