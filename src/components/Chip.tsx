import type { FC, ReactNode } from 'react'
import cn from 'classnames'

const fontSizes = {
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
    className={cn(
      styles(colorScheme),
      'px-1 rounded-sm font-ibm-plex-mono bg-gradient-to-br',
      fontSizes[size],

      className,
    )}
  >
    {children}
  </span>
)

function styles(colorScheme: ChipProps['colorScheme']) {
  return colorScheme === 'navy'
    ? 'text-navy-900 from-navy-400/50 to-navy-300/50 dark:text-navy-50 dark:from-navy-500/50 dark:to-navy-400/50'
    : 'text-navy-900 dark:text-navy-50 from-yellow-500/50 via-orange-500/50 to-red-500/50'
}
