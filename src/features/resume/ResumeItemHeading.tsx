import type { FC } from 'react'
import { css } from 'twind'

const gridStyles = css`
  grid-template-areas:
    'title .'
    'subtitle .'
    'timespan .';

  @media (min-width: 768px) {
    grid-template-areas:
      'title timespan'
      'subtitle .';
  }
`

interface ResumeItemHeadingProps {
  title: string
  subtitle?: string
  timespan?: string
}

const ResumeItemHeading: FC<ResumeItemHeadingProps> = ({
  title,
  subtitle,
  timespan,
}) => (
  <div
    className={`
      grid justify-between items-center
      mb-2
      ${gridStyles}
    `}
  >
    <h3
      className={css`
        grid-area: title;
      `}
    >
      {title}
    </h3>

    {!!subtitle && (
      <h4
        className={`
          italic
          ${css`
            grid-area: subtitle;
          `}
        `}
      >
        {subtitle}
      </h4>
    )}

    {!!timespan && (
      <span
        className={`
          font-ibm-plex-mono text-lg
          ${css`
            grid-area: timespan;
          `}
        `}
      >
        {timespan}
      </span>
    )}
  </div>
)

export default ResumeItemHeading
