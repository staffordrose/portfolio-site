import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import '@/common/styles/globals.css'
import { Header, Footer } from '@/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
