import type { FC } from 'react'
import cn from 'classnames'

export const Technologies: FC = () => {
  return (
    <div
      className={cn(
        'relative z-10 overflow-hidden h-full w-full bg-gradient-to-br from-navy-100 dark:from-navy-900 to-navy-50 dark:to-navy-800 after:bg-svg-navy-100 dark:after:bg-svg-navy-800',
        'after:content-[""] after:absolute after:-z-10 after:top-0 after:left-0 after:block after:w-full after:h-full after:bg-squares-sm',
        'before:content-[""] before:absolute before:z-10 before:top-0 before:left-1/2 before:block before:w-full before:h-[1800px] before:bg-transparent before:bg-svg-technologies before:bg-repeat-y before:bg-technologies-size before:-translate-x-1/2 before:motion-safe:animate-technologies',
      )}
    >
      <div className="relative z-10 flex flex-col gap-10 justify-center items-center min-h-screen-header w-full max-w-7xl mx-auto px-4 py-16">
        <h2>Technologies I Use</h2>

        <div className="h-auto w-full max-w-[240px] p-0.5 rounded bg-gradient-to-br from-yellow-500/75 via-orange-600/75 to-red-500/75">
          <div className="h-auto w-full p-4 rounded-sm bg-white/75 dark:bg-navy-900/75">
            <ul className="text-center">
              {[
                'HTML',
                'CSS',
                'JavaScript',
                'TypeScript',
                'React',
                'Next.js',
                'Gatsby',
                'Redux',
                'Zustand',
                'Styled Components',
                'Emotion',
                'Tailwind CSS',
                'Framer Motion',
                'GSAP',
                'Three.js',
                'Firebase',
                'Supabase',
                'Prismic',
              ].map((technology: string) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
