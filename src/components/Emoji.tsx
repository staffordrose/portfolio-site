import type { FC } from 'react'

export type EmojiProps = {
  className?: string
  label?: string
  symbol: number
}

export const Emoji: FC<EmojiProps> = ({ className, label, symbol }) => {
  return (
    <span role="img" className={className} aria-label={label}>
      {String.fromCodePoint(symbol)}
    </span>
  )
}
