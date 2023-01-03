import type { FC } from 'react'
import { css } from 'twind'

const gridStyles = css`
  grid-template-areas:
    'title .'
    'subtitle .'
    'info .';

  @media (min-width: 768px) {
    grid-template-areas:
      'title info'
      'subtitle .';
  }
`

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
  <div
    className={`
      grid justify-between items-center
      mb-2
      ${gridStyles}
    `}
  >
    <h3
      className={`
        text-xl sm:text-2xl
        ${css`
          grid-area: title;
        `}
      `}
    >
      {title}
    </h3>

    {!!subtitle && (
      <h4
        className={`
        text-sm sm:text-base italic
          ${css`
            grid-area: subtitle;
          `}
        `}
      >
        {subtitle}
      </h4>
    )}

    {!!info && (
      <span
        className={`
          font-ibm-plex-mono text-base sm:text-lg
          ${css`
            grid-area: info;
          `}
        `}
      >
        {info}
      </span>
    )}
  </div>
)
