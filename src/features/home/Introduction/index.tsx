import type { FC } from 'react'
import { Emoji, SlideUp } from '@/components'
import { useViewportScroll } from '@/hooks'
import { MobileWireframe } from './MobileWireframe'

export type IntroductionProps = {
  theme: 'light' | 'dark'
  isVisible: boolean
}

export const Introduction: FC<IntroductionProps> = ({ theme, isVisible }) => {
  const { scrollY, scrollYProgress } = useViewportScroll({
    active: isVisible,
  })

  return (
    <div className="relative min-h-[900px] md:min-h-screen">
      <div className="relative flex flex-col md:flex-row items-center gap-4 h-full min-h-screen w-full max-w-7xl mx-auto py-16">
        <div className="relative z-10 flex flex-col gap-4 md:gap-8 w-full md:w-1/2 px-4 xl:px-8">
          <div
            className="transition-none motion-safe:transition-all motion-safe:duration-150"
            style={{
              transform: `translateY(${-(scrollY / 20)}px)`,
              opacity: 1 - scrollYProgress * 6,
            }}
          >
            <SlideUp>
              <h1>
                <span className="block text-navy-900 dark:text-white text-xl sm:text-2xl xl:text-3xl">
                  Hi <Emoji symbol={0x1f44b} />, I&apos;m Stafford Rose a{' '}
                </span>

                <span className="relative z-10 block text-navy-800 dark:text-navy-100 text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
                  Front-end{' '}
                </span>

                <span className="relative z-10 block text-navy-800 dark:text-navy-100 text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
                  Web Developer
                </span>
              </h1>
            </SlideUp>
          </div>

          <div
            className="transition-none motion-safe:transition-all motion-safe:duration-150"
            style={{
              transform: `translateY(${-(scrollY / 40)}px)`,
              opacity: 1 - scrollYProgress * 4,
            }}
          >
            <SlideUp animationDelay={300}>
              <p className="text-navy-900 dark:text-white">
                I am passionate about building interactive, responsive, and
                user-friendly websites. I enjoy developing landing pages,
                ecommerce storefronts, admin dashboards, and product
                configurators. In my free time, I enjoy camping, canyoneering,
                hiking, and cycling.
              </p>
            </SlideUp>
          </div>
        </div>
      </div>

      <div className="absolute z-0 top-36 md:top-0 left-0 h-full w-full">
        <SlideUp animationDelay={600}>
          <MobileWireframe theme={theme} />
        </SlideUp>
      </div>
    </div>
  )
}
