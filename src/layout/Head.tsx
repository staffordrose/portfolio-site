import type { FC } from 'react'
import NextHead from 'next/head'

interface HeadProps {
  title: string
  description: string
  image?: string
}

const Head: FC<HeadProps> = ({ title, description, image }) => {
  return (
    <NextHead>
      <title>{title} | Stafford Rose</title>
      <meta name="og:title" content={title} />
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />
      <meta
        property="og:image"
        content={
          image ? image : 'https://staffordrose.com/images/og/default.png'
        }
      />
      <meta name="twitter:creator" content="@staffordrose32" />
      <meta name="twitter:card" content="summary_large_image" />
    </NextHead>
  )
}

export default Head
