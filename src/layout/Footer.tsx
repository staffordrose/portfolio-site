import type { FC } from 'react'
import { BiEnvelope, BiLinkExternal, BiPhone } from 'react-icons/bi'
import cn from 'classnames'
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

export const Footer: FC = () => {
  return (
    <footer className="h-auto min-h-80 w-full bg-gradient-to-br from-navy-100 dark:from-navy-800 to-white dark:to-navy-900">
      <div className="grid sm:grid-cols-[auto_auto] gap-6 sm:justify-between items-center w-full max-w-7xl mx-auto px-4 py-10">
        <nav>
          <h3 className="mb-3">Links</h3>
          <ul className="flex flex-col sm:gap-1 divide-y sm:divide-y-0 divide-navy-500/10">
            {links.map(({ id, title, href, isExternal }) => (
              <li key={id}>
                <Link
                  className={cn(
                    isExternal ? 'group ' : '',
                    'min-h-[48px] sm:min-h-0',
                  )}
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

        <div className="relative overflow-hidden flex gap-2 items-center w-full max-w-[328px] sm:w-72 md:w-80 p-4 rounded-sm bg-navy-100 dark:bg-navy-800 aspect-[3.5/2]">
          <Logo
            id="footer-logo"
            className="absolute -top-[8px] -right-[14px] h-24 w-24 opacity-50"
            colorScheme="navy"
          />

          <div className="relative z-10">
            <h4>Stafford Rose</h4>
            <h5 className="text-base">Front-end Web Developer</h5>
            <h6 className="text-sm">Salt Lake City, UT</h6>

            <ul className="flex flex-row justify-start sm:flex-col sm:items-start mt-1 divide-x sm:divide-x-0 divide-navy-500/10">
              {[
                {
                  ariaLabel: 'Email me',
                  href: 'mailto:hello@staffordrose.com',
                  icon: BiEnvelope,
                  text: 'hello@staffordrose.com',
                },
                {
                  ariaLabel: 'Call me',
                  href: 'tel:18176942015',
                  icon: BiPhone,
                  text: '(817) 694-2015',
                },
              ].map(({ ariaLabel, href, icon, text }, i) => {
                const Icon = icon

                return (
                  <li key={i}>
                    <Link
                      variant="button"
                      isSquare
                      aria-label={ariaLabel}
                      href={href}
                      className="inline-flex sm:hidden"
                    >
                      <Icon className="h-6 w-6" />
                    </Link>

                    <Link
                      className="group/link hidden sm:inline-flex text-sm"
                      href={href}
                    >
                      <Icon className="group-hover/link:text-yellow-500" />
                      {text}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex gap-2 items-center h-auto min-h-[48px] w-full max-w-7xl mx-auto px-4 py-1 border-t border-navy-100 dark:border-navy-800">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Stafford Rose. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
