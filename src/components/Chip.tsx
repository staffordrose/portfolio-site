import type { FC, ReactNode } from 'react'

const chipSizes = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  inline: '',
}

interface ChipProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'inline'
  children: ReactNode
}

const Chip: FC<ChipProps> = ({ className = '', size = 'md', children }) => (
  <span
    className={`
        px-1 rounded-sm
        font-ibm-plex-mono ${chipSizes[size]} text-(navy-900 dark:navy-50)
        bg-gradient-to-br from-yellow-500/50 via-orange-500/50 to-red-500/50
        ${className}
      `}
  >
    {children}
  </span>
)

export default Chip
