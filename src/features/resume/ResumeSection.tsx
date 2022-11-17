import type { FC, ReactNode } from 'react'

interface ResumeSectionProps {
  innerRef?: (ref: HTMLElement | null) => void
  id?: string
  title: string
  children: ReactNode
}

const ResumeSection: FC<ResumeSectionProps> = ({
  innerRef,
  id,
  title,
  children,
}) => {
  return (
    <section
      ref={innerRef}
      id={id}
      className="grid grid-cols-([1fr] lg:[208px_1fr] xl:[256px_1fr]) gap-6 content-start items-start"
    >
      <h2>{title}</h2>

      <div className="flex flex-col gap-4 p-4 rounded-lg bg-(navy-100 dark:navy-800)">
        {children}
      </div>
    </section>
  )
}

export default ResumeSection
