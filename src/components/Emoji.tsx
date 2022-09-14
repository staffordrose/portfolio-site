import { memo } from 'react'

interface EmojiProps {
  className?: string
  label?: string
  symbol: number
}

const Emoji = memo(({ className, label, symbol }: EmojiProps) => (
  <span role="img" aria-label={label} className={className}>
    {String.fromCodePoint(symbol)}
  </span>
))

export default Emoji
