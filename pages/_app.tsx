import { useEffect, useLayoutEffect } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import install from '@twind/with-next/app'
import config from '../twind.config'
import { injectGlobalStyles } from '@/common/styles'
import { Header, Footer } from '@/layout'

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

function MyApp({ Component, pageProps }: AppProps) {
  useIsomorphicLayoutEffect(() => injectGlobalStyles(), [])

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default install(config, MyApp)
