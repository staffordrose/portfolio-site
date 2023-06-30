import type { FC, ReactNode } from 'react'
import NextLink from 'next/link'
import cn from 'classnames'

const buttonSizes = {
  sm: 'gap-1 h-8 px-2 border rounded-sm text-sm',
  md: 'gap-2 h-10 px-3 border rounded-sm text-base',
  lg: 'gap-3 h-12 px-4 border rounded-sm text-lg',
  xl: 'gap-4 h-14 px-5 border-2 rounded text-xl',
  inherit: '',
}

const squareButtonSizes = {
  sm: 'h-8 w-8 text-sm',
  md: 'h-10 w-10 text-base',
  lg: 'h-12 w-12 text-lg',
  xl: 'h-14 w-14 text-xl',
  inherit: '',
}

const inlineSizes = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  inherit: '',
}

export type LinkProps = {
  className?: string
  variant?: 'button' | 'inline'
  colorScheme?: 'navy' | 'yellow-orange-red'
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'inherit'
  href: string
  isSquare?: boolean
  openInNew?: boolean
  children: ReactNode
}

export const Link: FC<LinkProps> = ({
  className = '',
  variant = 'inline',
  colorScheme = 'navy',
  size = 'md',
  href,
  isSquare = false,
  openInNew = false,
  ...props
}) => {
  const regEx = /^http/

  return regEx.test(href) ? (
    openInNew ? (
      <a
        className={cn(
          variant === 'button'
            ? cn(
                buttonStyles(colorScheme),
                isSquare ? squareButtonSizes[size] : buttonSizes[size],
              )
            : cn(inlineStyles(colorScheme), inlineSizes[size]),
          className,
        )}
        href={href}
        rel="noreferrer noopener"
        target="_blank"
        {...props}
      />
    ) : (
      <a
        className={cn(
          variant === 'button'
            ? cn(
                buttonStyles(colorScheme),
                isSquare ? squareButtonSizes[size] : buttonSizes[size],
              )
            : cn(inlineStyles(colorScheme), inlineSizes[size]),
          className,
        )}
        href={href}
        {...props}
      />
    )
  ) : (
    <NextLink href={href}>
      <a
        className={cn(
          variant === 'button'
            ? cn(
                buttonStyles(colorScheme),
                isSquare ? squareButtonSizes[size] : buttonSizes[size],
              )
            : cn(inlineStyles(colorScheme), inlineSizes[size]),
          className,
        )}
        {...props}
      />
    </NextLink>
  )
}

function buttonStyles(colorScheme: LinkProps['colorScheme']) {
  return cn(
    'overflow-hidden inline-flex justify-center items-center border-solid border-white/0 font-ibm-plex-mono',
    colorScheme === 'navy'
      ? 'text-navy-800 dark:text-navy-100'
      : 'text-orange-800 dark:text-orange-100',
    'bg-transparent cursor-pointer hover:border-white/[0.025] hover:bg-gradient-to-br',
    colorScheme === 'navy'
      ? 'hover:from-navy-600/25 hover:to-navy-400/25'
      : 'hover:from-yellow-500/25 hover:via-orange-500/25 hover:to-red-500/25',
  )
}

function inlineStyles(colorScheme: LinkProps['colorScheme']) {
  return 'inline-flex gap-1 items-center font-medium text-navy-600 dark:text-navy-300 hover:text-transparent dark:hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-500 hover:via-orange-500 hover:to-red-500'
}
