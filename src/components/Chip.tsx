import type { FC, ReactNode } from 'react'

const styles = (colorScheme: 'navy' | 'yellow-orange-red') => `
  ${
    colorScheme === 'navy'
      ? `text-navy-900 from-navy-400/50 to-navy-300/50 dark:(text-navy-50 from-navy-500/50 to-navy-400/50)`
      : `text-(navy-900 dark:navy-50) from-yellow-500/50 via-orange-500/50 to-red-500/50`
  }
`

const sizes = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  inline: '',
}

export type ChipProps = {
  className?: string
  colorScheme?: 'navy' | 'yellow-orange-red'
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'inline'
  children: ReactNode
}

export const Chip: FC<ChipProps> = ({
  className = '',
  colorScheme = 'yellow-orange-red',
  size = 'md',
  children,
}) => (
  <span
    className={`
      ${styles(colorScheme)}
      px-1 rounded-sm
      font-ibm-plex-mono ${sizes[size]}
      bg-gradient-to-br 
      ${className}
    `}
  >
    {children}
  </span>
)
