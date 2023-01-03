import type { FC, ReactNode } from 'react'
import { css, keyframes } from 'twind'

const slideUpKeyframes = keyframes`
  0% {
    opacity: 0;
    transform: translateY(32px);
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

export type SlideUpProps = {
  animationDelay?: number
  animationDuration?: number
  animationPlayState?: 'paused' | 'running'
  className?: string
  children: ReactNode
}

export const SlideUp: FC<SlideUpProps> = ({
  animationDelay = 0,
  animationDuration = 800,
  animationPlayState = 'running',
  className,
  children,
}) => (
  <div
    className={`${className || ``} motion-safe:${css`
      opacity: 0;
      animation-timing-function: ease;
      animation-fill-mode: forwards;
      animation-name: ${slideUpKeyframes};
    `}`}
    style={{
      animationDelay: `${animationDelay}ms`,
      animationDuration: `${animationDuration}ms`,
      animationPlayState,
    }}
  >
    {children}
  </div>
)
