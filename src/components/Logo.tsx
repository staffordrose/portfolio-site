import type { FC } from 'react'
import { tw } from 'twind'

interface LogoProps {
  id: string
  className?: string
  backColors?: string[]
  frontColors?: string[]
}

const Logo: FC<LogoProps> = ({
  id,
  className = '',
  backColors = ['colors.navy.300', 'colors.navy.500'],
  frontColors = ['colors.yellow.500', 'colors.orange.500', 'colors.red.500'],
}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="40 40 320 320"
  >
    <title>Stafford Rose Logo</title>

    <defs>
      <linearGradient id={`${id}-back-gradient`}>
        {backColors.map((color, i) => (
          <stop
            key={i}
            offset={i / (frontColors.length - 1)}
            stopColor={`${tw.theme(color)}`}
          />
        ))}
      </linearGradient>

      <linearGradient id={`${id}-front-gradient`}>
        {frontColors.map((color, i) => (
          <stop
            key={i}
            offset={i / (frontColors.length - 1)}
            stopColor={`${tw.theme(color)}`}
          />
        ))}
      </linearGradient>
    </defs>

    <polygon
      fill={`url(#${id}-back-gradient)`}
      points="150,350 50,350 150,250 50,150 150,50 250,50 150,150 250,250"
    />
    <polygon
      fill={`url(#${id}-front-gradient)`}
      points="250,350 350,350 250,250 350,150 250,50 150,50 250,150 150,250"
    />
  </svg>
)

export default Logo
