import type { FC, ReactNode } from 'react'
import cn from 'classnames'

const sizes = {
  sm: `gap-1 min-h-8 py-2 px-2 text-sm`,
  md: `gap-2 min-h-10 py-2 px-3 text-base`,
  lg: `gap-3 min-h-12 py-2 px-4 text-lg`,
}

const squareSizes = {
  sm: `h-8 w-8 text-sm`,
  md: `h-10 w-10 text-base`,
  lg: `h-12 w-12 text-lg`,
}

export type ButtonProps = {
  className?: string
  variant?: 'solid' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isSquare?: boolean
  isActive?: boolean
  disabled?: boolean
  onClick?: () => void
  children: ReactNode
}

export const Button: FC<ButtonProps> = ({
  className,
  variant = 'ghost',
  size = 'md',
  isSquare = false,
  isActive = false,
  ...props
}) => (
  <button
    className={cn(
      'overflow-hidden inline-flex justify-center items-center border-[1px] border-solid border-white/0 rounded-sm font-ibm-plex-mono cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
      variants(variant, isActive),
      isSquare ? squareSizes[size] : sizes[size],
      className,
    )}
    {...props}
  />
)

function variants(
  variant: ButtonProps['variant'],
  isActive: ButtonProps['isActive'],
) {
  if (variant === 'solid') {
    return cn(
      'border-white/[0.025] dark:text-navy-100 bg-gradient-to-br',
      isActive ? 'text-navy-100' : 'text-navy-800',
      'dark:text-navy-100 bg-gradient-to-br',
      isActive
        ? 'from-yellow-500 via-orange-500 to-red-500'
        : 'from-navy-600/25 dark:from-navy-500/25 to-navy-400/25 dark:to-navy-300/25',
      'bg-gradient-to-br',
      isActive
        ? 'enabled:hover:from-yellow-500 enabled:hover:via-orange-500 enabled:hover:to-red-500'
        : 'enabled:hover:from-navy-800/25 dark:enabled:hover:from-navy-300/25 enabled:hover:to-navy-600/25 dark:enabled:hover:to-navy-100/25',
    )
  } else {
    return 'text-navy-800 dark:text-navy-100 bg-transparent enabled:hover:border-white/[0.025] enabled:hover:bg-gradient-to-br enabled:hover:from-navy-600/25 enabled:hover:to-navy-400/25'
  }
}
