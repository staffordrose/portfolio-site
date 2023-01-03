import { useEffect, useLayoutEffect, useState } from 'react'
import { throttle } from '@/common/utils'

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

export const useViewportScroll = ({ active = true }: { active: boolean }) => {
  const [viewportScroll, setViewportScroll] = useState<{
    scrollY: number
    scrollYProgress: number
    scrollDir: 'up' | 'down' | null
  }>({ scrollY: 0, scrollYProgress: 0, scrollDir: null })

  const onScrollOrResizeEvent = () => {
    const yOffset = window.pageYOffset
    const maxYOffset = document.body.clientHeight - window.innerHeight

    setViewportScroll(prevState => ({
      scrollY: yOffset,
      scrollYProgress: yOffset / maxYOffset,
      scrollDir: prevState.scrollY > yOffset ? 'up' : 'down',
    }))
  }

  useIsomorphicLayoutEffect(() => {
    if (typeof window !== 'undefined' && active) {
      const onScroll = () => throttle(onScrollOrResizeEvent, 75)
      const onResize = () => throttle(onScrollOrResizeEvent, 125)

      window.addEventListener('scroll', onScroll, {
        passive: true,
      })
      window.addEventListener('resize', onResize)

      return () => {
        window.removeEventListener('scroll', onScroll)
        window.removeEventListener('resize', onResize)
      }
    }
  }, [active])

  return viewportScroll
}
