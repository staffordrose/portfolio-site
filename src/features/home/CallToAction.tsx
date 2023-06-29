import type { FC } from 'react'
import { RiArrowRightFill } from 'react-icons/ri'
import { Link } from '@/components'

export const CallToAction: FC = () => {
  return (
    <div
      className={`
        flex flex-col gap-8 justify-center items-center
        h-full min-h-[calc(50vh_-_8px)] w-full max-w-7xl mx-auto px-4 py-16
        text-center
      `}
    >
      <h2>Resume</h2>

      <p>View my resume (also available as a PDF download).</p>

      <Link
        className="group"
        variant="button"
        colorScheme="yellow-orange-red"
        size="xl"
        href="/resume"
      >
        <RiArrowRightFill
          className={`
            h-7 w-7
            -translate-x-3
            transition-transform duration-300 ease-in-out
            group-hover:translate-x-0
          `}
        />
        View Resume
      </Link>
    </div>
  )
}
