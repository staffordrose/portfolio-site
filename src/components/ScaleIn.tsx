import type { FC, ReactNode } from 'react'
import { css, keyframes } from 'twind'

const scaleInKeyframes = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

export type ScaleInProps = {
  animationDelay?: number
  animationDuration?: number
  animationPlayState?: 'paused' | 'running'
  className?: string
  children: ReactNode
}

export const ScaleIn: FC<ScaleInProps> = ({
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
      animation-name: ${scaleInKeyframes};
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
