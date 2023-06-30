import type { FC, ReactNode } from 'react'
import cn from 'classnames'

export type SlideUpProps = {
  animationDelay?: number
  animationPlayState?: 'paused' | 'running'
  className?: string
  children: ReactNode
}

export const SlideUp: FC<SlideUpProps> = ({
  animationDelay = 0,
  animationPlayState = 'running',
  className,
  children,
}) => (
  <div
    className={cn(
      'motion-safe:opacity-0 motion-safe:animate-slide-up',
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
