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
      className={`
        grid grid-cols-[1fr] gap-6 lg:grid-cols-[192px_1fr] xl:grid-cols-[256px_1fr] content-start items-start
        mb-8
      `}
    >
      <h2 className="text-2xl sm:text-3xl text-navy-900 dark:text-white">
        {title}
      </h2>

      <div className="flex flex-col gap-4 p-4 rounded-lg bg-(navy-100 dark:navy-800)">
        {children}
      </div>
    </section>
  )
}

export default ResumeSection
