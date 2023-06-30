import type { FC } from 'react'

const colors = {
  navy: {
    back: ['navy-300', 'navy-500'],
    front: ['navy-500', 'navy-700'],
  },
  'yellow-orange-red': {
    back: ['navy-300', 'navy-500'],
    front: ['yellow-500', 'orange-500', 'red-500'],
  },
}

export type LogoProps = {
  id: string
  className?: string
  colorScheme?: 'navy' | 'yellow-orange-red'
}

export const Logo: FC<LogoProps> = ({
  id,
  className = '',
  colorScheme = 'yellow-orange-red',
}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="40 40 320 320"
  >
    <title>Stafford Rose Logo</title>

    <defs>
      <linearGradient id={`${id}-back-gradient`}>
        {colors[colorScheme]?.back?.map((color, i) => (
          <stop
            key={i}
            offset={i / (colors[colorScheme].back.length - 1)}
            stopColor={`var(--colors-${color})`}
          />
        ))}
      </linearGradient>

      <linearGradient id={`${id}-front-gradient`}>
        {colors[colorScheme]?.front?.map((color, i) => (
          <stop
            key={i}
            offset={i / (colors[colorScheme].front.length - 1)}
            stopColor={`var(--colors-${color})`}
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
