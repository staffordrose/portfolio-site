import type { FC } from 'react'
import { css } from 'twind'
import { Emoji, SlideUp } from '@/components'
import { useViewportScroll } from '@/hooks'
import MobileWireframe from './MobileWireframe'

const getScrollStyles = (y: number, opacity: number) => css`
  transform: translateY(${y}px);
  opacity: ${opacity};
  transition: transform 150ms, opacity 150ms;
`

interface IntroductionProps {
  theme: 'light' | 'dark'
  isVisible: boolean
}

const Introduction: FC<IntroductionProps> = ({ theme, isVisible }) => {
  const { scrollY, scrollYProgress } = useViewportScroll({
    active: isVisible,
  })

  return (
    <div className="relative min-h-[900px] md:min-h-screen">
      <div
        className={`
        relative
        flex flex-col md:flex-row items-center gap-4
        h-full min-h-screen w-full max-w-7xl mx-auto py-16
      `}
      >
        <div className="relative z-10 flex flex-col gap-4 md:gap-8 w-(full md:1/2) px-(4 xl:8)">
          <div
            className={`
          motion-safe:${getScrollStyles(
            -(scrollY / 20),
            1 - scrollYProgress * 6,
          )}
          `}
          >
            <SlideUp>
              <h1>
                <span className="block text-(navy-900 dark:white xl sm:2xl xl:3xl)">
                  Hi <Emoji symbol={0x1f44b} />, I'm Stafford Rose a{' '}
                </span>

                <span className="relative z-10 block text-(navy-800 dark:navy-100 4xl sm:5xl md:6xl xl:7xl)">
                  Frontend{' '}
                </span>

                <span className="relative z-10 block text-(navy-800 dark:navy-100 4xl sm:5xl md:6xl xl:7xl)">
                  Web Developer
                </span>
              </h1>
            </SlideUp>
          </div>

          <div
            className={`motion-safe:${getScrollStyles(
              -(scrollY / 40),
              1 - scrollYProgress * 4,
            )}`}
          >
            <SlideUp animationDelay={300}>
              <p className="text-(navy-900 dark:white)">
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

export default Introduction
