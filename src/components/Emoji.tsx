import { memo } from 'react'

interface EmojiProps {
  className?: string
  label?: string
  symbol: number
}

const Emoji = memo(({ className, label, symbol }: EmojiProps) => (
  <span role="img" className={className} aria-label={label}>
    {String.fromCodePoint(symbol)}
  </span>
))

export default Emoji
