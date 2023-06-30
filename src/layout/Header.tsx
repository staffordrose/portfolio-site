import { useCallback, useEffect, useRef, useState } from 'react'
import type { FC } from 'react'
import Link from 'next/link'
import { NextRouter, useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import cn from 'classnames'
import { BiMoon, BiSun } from 'react-icons/bi'
import { pages } from '@/common/data'
import { Button, Logo } from '@/components'
import { usePrevious } from '@/hooks'

type NavProps = {
  router: NextRouter
}

const Nav: FC<NavProps> = ({ router }) => {
  const [slug, setSlug] = useState('')

  useEffect(() => {
    setSlug(router.pathname.slice(1))
  }, [router.pathname])

  const linkElements = useRef<(HTMLAnchorElement | null)[]>([])

  const [marker, setMarker] = useState<{
    width: number
    offsetLeft: number
  }>({
    width: 0,
    offsetLeft: 0,
  })

  const prevMarker = usePrevious(marker)

  const updateMarker = useCallback(slug => {
    if (!slug) {
      setMarker({
        width: 0,
        offsetLeft: 0,
      })
      return
    }

    const pageIndex = pages.findIndex(p => p.id === slug)
    const element = linkElements.current[pageIndex]

    if (!element) return

    setMarker({
      width: element.clientWidth,
      offsetLeft: element.offsetLeft,
    })
  }, [])

  useEffect(() => updateMarker(slug), [updateMarker, slug])

  return (
    <nav className="relative h-full">
      <span
        className={cn(
          'absolute bottom-[18px] left-0 h-[2px] rounded-[1px] bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500',
          prevMarker?.width > 0 ? 'transition-all' : 'transition-opacity',
          'duration-300',
        )}
        style={{
          width: marker.width - 16,
          opacity: slug ? 1 : 0,
          transform: `translate3d(${marker.offsetLeft + 9}px, 0, 0)`,
        }}
      />

      <ul className="flex gap-2 items-center h-full w-auto">
        {pages.map(({ id, name }, i) => (
          <li key={id}>
            <Link href={`/${id}`}>
              <a
                ref={el => (linkElements.current[i] = el)}
                className="overflow-hidden inline-flex gap-2 items-center h-10 px-2 border-[1px] border-solid border-white/0 rounded-sm font-ibm-plex-mono text-navy-800 dark:text-navy-100 bg-transparent hover:border-white/[0.025] hover:bg-gradient-to-br hover:from-navy-600/25 hover:to-navy-400/25"
              >
                {name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const ThemeToggle: FC = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Don't show ThemeToggle server-side
  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="h-10 w-10" />

  return (
    <Button
      size="md"
      isSquare
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <span className="block h-6 w-6">
        <span className="flex flex-col justify-between h-[72px] w-6 dark:rotate-180 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out">
          <BiSun className="h-6 w-6 text-navy-800 opacity-100 dark:opacity-0 transition-opacity duration-200" />
          <BiMoon className="h-6 w-6 text-navy-100 opacity-0 dark:opacity-100 rotate-180 transition-opacity duration-200" />
        </span>
      </span>
    </Button>
  )
}

export const Header: FC = () => {
  const router = useRouter()

  return (
    <header className="fixed z-20 top-0 left-0 h-16 w-full bg-navy-50/60 dark:bg-navy-900/75 backdrop-filter backdrop-blur-sm">
      <div className="flex flex-row gap-2 justify-between items-center h-full w-full max-w-7xl mx-auto px-4">
        <Button
          size="lg"
          isSquare
          aria-label="View home page"
          onClick={() => {
            if (router.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            } else {
              router.push('/')
            }
          }}
        >
          <Logo id="header-logo" className="h-9 w-9" />
        </Button>

        <div className="flex flex-row gap-2 items-center h-full w-auto">
          <Nav router={router} />

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
