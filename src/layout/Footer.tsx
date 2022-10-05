import type { FC } from 'react'
import { css, tw } from 'twind'
import { BiEnvelope, BiLinkExternal, BiPhone } from 'react-icons/bi'
import { Link, Logo } from '@/components'

const links = [
  { id: 'home', title: 'Home', href: '/' },
  { id: 'projects', title: 'Projects', href: '/projects' },
  { id: 'resume', title: 'Resume', href: '/resume' },
  {
    id: 'github',
    title: 'Github',
    href: 'https://github.com/staffordrose',
    isExternal: true,
  },
]

const Footer: FC = () => {
  return (
    <footer
      className={`
        h-auto min-h-80 w-full
        bg-gradient-to-br from-(navy-100 dark:navy-800) to-(white dark:navy-900)
      `}
    >
      <div
        className={`
          grid sm:grid-cols-[auto_auto] gap-6 sm:justify-between items-center
          w-full max-w-7xl mx-auto px-4 py-10
        `}
      >
        <nav>
          <h3 className="mb-3">Links</h3>
          <ul className="flex flex-col sm:gap-1 divide-y sm:divide-y-0 divide-navy-500/10">
            {links.map(({ id, title, href, isExternal }) => (
              <li key={id}>
                <Link
                  className={`${
                    isExternal ? `group ` : ``
                  }min-h-[48px] sm:min-h-0`}
                  href={href}
                  openInNew={isExternal}
                >
                  {title}
                  {isExternal && (
                    <span className="group-hover:text-red-500">
                      <BiLinkExternal />
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className={`
            relative overflow-hidden
            flex gap-2 items-center
            w-full max-w-[328px] sm:w-72 md:w-80 p-4 rounded-sm
            bg-(navy-100 dark:navy-800)
            aspect-[3.5/2]
          `}
        >
          <Logo
            id="footer-logo"
            className="absolute h-24 w-24 absolute -top-[8px] -right-[14px] opacity-50"
            backColors={['colors.navy.300', 'colors.navy.500']}
            frontColors={['colors.navy.500', 'colors.navy.700']}
          />

          <div className="relative z-10">
            <h4>Stafford Rose</h4>
            <h5 className="text-base">Front-end Web Developer</h5>
            <h6 className="text-sm">Salt Lake City, UT</h6>

            <ul className="flex flex-row justify-start sm:(flex-col items-start) mt-1 divide-x sm:divide-x-0 divide-navy-500/10">
              <li
                className={css`
                  & > a:first-child {
                    @media (min-width: ${tw.theme('screens.sm')}) {
                      display: none;
                    }
                  }
                  & > a:last-child {
                    display: none;

                    @media (min-width: ${tw.theme('screens.sm')}) {
                      display: inline-flex;
                    }
                  }
                `}
              >
                <Link
                  variant="button"
                  isSquare
                  aria-label="Email me"
                  href="mailto:hello@staffordrose.com"
                >
                  <BiEnvelope className="h-6 w-6" />
                </Link>

                <Link
                  className="group~link text-sm"
                  href="mailto:hello@staffordrose.com"
                >
                  <BiEnvelope className="group~link-hover:text-yellow-500" />
                  hello@staffordrose.com
                </Link>
              </li>

              <li
                className={css`
                  & > a:first-child {
                    @media (min-width: ${tw.theme('screens.sm')}) {
                      display: none;
                    }
                  }
                  & > a:last-child {
                    display: none;

                    @media (min-width: ${tw.theme('screens.sm')}) {
                      display: inline-flex;
                    }
                  }
                `}
              >
                <Link
                  variant="button"
                  isSquare
                  aria-label="Call me"
                  href="tel:18176942015"
                >
                  <BiPhone className="h-6 w-6" />
                </Link>

                <Link className="group~link text-sm" href="tel:18176942015">
                  <BiPhone className="group~link-hover:text-yellow-500" />
                  (817) 694-2015
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className={`
          flex gap-2 items-center
          h-auto min-h-[48px] w-full max-w-7xl mx-auto px-4 py-1 border-t-1 border-(navy-100 dark:navy-800)
        `}
      >
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Stafford Rose. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
