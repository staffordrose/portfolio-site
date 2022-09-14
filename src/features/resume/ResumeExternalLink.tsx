import type { FC, ReactNode } from 'react'

interface ResumeExternalLinkProps {
  href: string
  children: ReactNode
}

const ResumeExternalLink: FC<ResumeExternalLinkProps> = ({
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
  >
    {children}
  </a>
)

export default ResumeExternalLink
