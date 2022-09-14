import { useEffect, useLayoutEffect } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import install from '@twind/with-next/app'
import config from '../twind.config'
import { Header, Footer } from '@/layout'
import { injectGlobalStyles } from '@/styles'

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

function MyApp({ Component, pageProps }: AppProps) {
  useIsomorphicLayoutEffect(() => injectGlobalStyles(), [])

  return (
    <ThemeProvider attribute="class">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default install(config, MyApp)
