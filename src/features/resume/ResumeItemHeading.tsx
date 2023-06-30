import type { FC } from 'react'

export type ResumeItemHeadingProps = {
  title: string
  subtitle?: string
  info?: string
}

export const ResumeItemHeading: FC<ResumeItemHeadingProps> = ({
  title,
  subtitle,
  info,
}) => (
  <div className="grid justify-between items-center mb-2 grid-areas-resume-item-heading md:grid-areas-resume-item-heading-md">
    <h3 className="text-xl sm:text-2xl grid-in-title">{title}</h3>

    {!!subtitle && (
      <h4 className="text-sm sm:text-base italic grid-in-subtitle">
        {subtitle}
      </h4>
    )}

    {!!info && (
      <span className="font-ibm-plex-mono text-base sm:text-lg grid-in-info">
        {info}
      </span>
    )}
  </div>
)
