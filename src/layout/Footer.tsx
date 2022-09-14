import type { FC } from 'react'
import { BiLinkExternal } from 'react-icons/bi'
import { Link, Logo } from '@/components'

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
          grid sm:grid-cols-[auto_auto] gap-6 justify-start sm:justify-between items-center
          w-full max-w-7xl mx-auto px-4 py-10
        `}
      >
        <nav>
          <h3 className="mb-3">Links</h3>
          <ul className="flex flex-col gap-1">
            <li className="before:(content-[-])">
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/resume">Resume</Link>
            </li>
            <li>
              <Link
                className="group"
                href="https://github.com/staffordrose"
                openInNew
              >
                Github
                <span className="group-hover:text-red-500">
                  <BiLinkExternal />
                </span>
              </Link>
            </li>
          </ul>
        </nav>

        <div
          className={`
            relative overflow-hidden
            flex gap-2 items-center
            w-auto min-w-[260px] sm:w-72 md:w-80 p-4 rounded-sm
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
            <h5 className="text-base">Frontend Web Developer</h5>
            <h6 className="text-sm">Salt Lake City, UT</h6>
            <p className="flex gap-1 items-center text-sm">
              <span>e:</span>
              <Link size="sm" href="mailto:hello@staffordrose.com" openInNew>
                hello@staffordrose.com
              </Link>
            </p>
            <p className="flex gap-1 items-center text-sm">
              <span>c:</span>
              <Link size="sm" href="tel:18176942015" openInNew>
                (817) 694-2015
              </Link>
            </p>
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
