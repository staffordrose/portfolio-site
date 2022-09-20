import { memo } from 'react'
import type { FC } from 'react'

interface EmojiProps {
  className?: string
  label?: string
  symbol: number
}

const Emoji: FC<EmojiProps> = ({ className, label, symbol }) => {
  return (
    <span role="img" className={className} aria-label={label}>
      {String.fromCodePoint(symbol)}
    </span>
  )
}

export default memo(Emoji)
