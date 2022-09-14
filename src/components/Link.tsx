import type { FC, ReactNode } from 'react'
import NextLink from 'next/link'

const buttonStyles = (colorScheme: 'navy' | 'yellow-orange-red') => `
  overflow-hidden
  inline-flex justify-center items-center
  border-solid border-white/0
  font-ibm-plex-mono ${
    colorScheme === 'navy'
      ? `text-(navy-800 dark:navy-100)`
      : `text-(orange-800 dark:orange-100)`
  }
  bg-transparent
  cursor-pointer
  hover:(
    border-white/[0.025]
    bg-gradient-to-br ${
      colorScheme === 'navy'
        ? `from-navy-600/25 to-navy-400/25`
        : `from-yellow-500/25 via-orange-500/25 to-red-500/25`
    }
  )
`

const buttonSizes = {
  sm: `gap-1 h-8 px-2 border rounded-sm text-sm`,
  md: `gap-2 h-10 px-3 border rounded-sm text-base`,
  lg: `gap-3 h-12 px-4 border rounded-sm text-lg`,
  xl: `gap-4 h-14 px-5 border-2 rounded text-xl`,
  inherit: ``,
}

const squareButtonSizes = {
  sm: `h-8 w-8 text-sm`,
  md: `h-10 w-10 text-base`,
  lg: `h-12 w-12 text-lg`,
  xl: `h-14 w-14 text-xl`,
  inherit: ``,
}

const inlineStyles = (colorScheme: 'navy' | 'yellow-orange-red') => `
  inline-flex gap-1 items-center
  font-semibold
  text-(navy-600 dark:navy-300)
  hover:(
    text-(transparent dark:transparent)
    bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500
  )
`

const inlineSizes = {
  sm: `text-sm`,
  md: `text-base`,
  lg: `text-lg`,
  xl: `text-xl`,
  inherit: ``,
}

interface LinkProps {
  className?: string
  variant?: 'button' | 'inline'
  colorScheme?: 'navy' | 'yellow-orange-red'
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'inherit'
  href: string
  isSquare?: boolean
  openInNew?: boolean
  children: ReactNode
}

const Link: FC<LinkProps> = ({
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
    <a
      className={`
        ${
          variant === 'button'
            ? `${buttonStyles(colorScheme)} ${
                isSquare ? squareButtonSizes[size] : buttonSizes[size]
              }`
            : `${inlineStyles(colorScheme)} ${inlineSizes[size]}`
        }
        ${className}
      `}
      href={href}
      rel="noopener"
      target={openInNew ? '_blank' : undefined}
      {...props}
    />
  ) : (
    <NextLink href={href}>
      <a
        className={`
          ${
            variant === 'button'
              ? `${buttonStyles(colorScheme)} ${
                  isSquare ? squareButtonSizes[size] : buttonSizes[size]
                }`
              : `${inlineStyles(colorScheme)} ${inlineSizes[size]}`
          }
          ${className}
        `}
        {...props}
      />
    </NextLink>
  )
}

export default Link
