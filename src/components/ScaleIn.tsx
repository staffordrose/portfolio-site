import type { FC, ReactNode } from 'react'
import cn from 'classnames'

export type ScaleInProps = {
  animationDelay?: number
  animationDuration?: number
  animationPlayState?: 'paused' | 'running'
  className?: string
  children: ReactNode
}

export const ScaleIn: FC<ScaleInProps> = ({
  animationDelay = 0,
  animationPlayState = 'running',
  className,
  children,
}) => (
  <div
    className={cn(
      'motion-safe:opacity-0 motion-safe:animate-scale-in',
      className,
    )}
    style={{
      animationDelay: `${animationDelay}ms`,
      animationPlayState,
    }}
  >
    {children}
  </div>
)
