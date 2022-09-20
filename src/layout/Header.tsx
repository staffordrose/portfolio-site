import { useCallback, useEffect, useRef, useState } from 'react'
import type { FC } from 'react'
import Link from 'next/link'
import { NextRouter, useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { css } from 'twind'
import { BiMoon, BiSun } from 'react-icons/bi'
import { pages } from '@/common/data'
import { Button, Logo } from '@/components'
import { usePrevious } from '@/hooks'

interface NavProps {
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

  const updateMarker = useCallback(
    slug => {
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
    },
    [pages, linkElements.current],
  )

  useEffect(() => updateMarker(slug), [slug])

  return (
    <nav className="relative h-full">
      <span
        className={`
          absolute bottom-[18px] left-0
          h-[2px] rounded-[1px]
          bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500
          ${css`
            width: ${marker.width - 16}px;
            opacity: ${slug ? 1 : 0};
            transform: translate3d(${marker.offsetLeft + 9}px, 0, 0);
            transition: ${prevMarker?.width > 0
              ? `transform 300ms, width 200ms, opacity 300ms`
              : `opacity 300ms`};
          `}
        `}
      />

      <ul className="flex gap-2 items-center h-full w-auto">
        {pages.map(({ id, name }, i) => (
          <li key={id}>
            <Link href={`/${id}`}>
              <a
                ref={el => (linkElements.current[i] = el)}
                className={`
                  overflow-hidden
                  inline-flex gap-2 items-center
                  h-10 px-2 border-[1px] border-solid border-white/0 rounded-sm
                  font-ibm-plex-mono text-(navy-800 dark:navy-100)
                  bg-transparent
                  hover:(
                    border-white/[0.025]
                    bg-gradient-to-br from-navy-600/25 to-navy-400/25
                  )
                `}
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
        <span
          className={`
            flex flex-col justify-between
            h-[72px] w-6
            dark:rotate-180
            motion-safe:(transition-transform duration-300 ease-out)
          `}
        >
          <BiSun
            className={`
              h-6 w-6
              text-navy-800
              opacity-(100 dark:0)
              transition-opacity duration-200
            `}
          />
          <BiMoon
            className={`
              h-6 w-6
              text-navy-100
              opacity-(0 dark:100)
              rotate-180
              transition-opacity duration-200
            `}
          />
        </span>
      </span>
    </Button>
  )
}

const Header: FC = () => {
  const router = useRouter()

  return (
    <header
      className={`
        fixed z-20 top-0 left-0
        h-16 w-full
        bg-(navy-50/60 dark:navy-900/75)
        backdrop-(filter blur-sm)
      `}
    >
      <div
        className={`
          flex flex-row gap-2 justify-between items-center
          h-full w-full max-w-7xl mx-auto px-(3 sm:4)
        `}
      >
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

export default Header
