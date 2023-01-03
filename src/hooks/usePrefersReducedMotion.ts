import { useEffect, useLayoutEffect, useState } from 'react'

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

export const usePrefersReducedMotion = (): boolean => {
  const [preference, setPreference] = useState<boolean>(
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false,
  )

  useIsomorphicLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    )

    const onChange = () => {
      setPreference(prefersReducedMotion.matches)
    }

    prefersReducedMotion.addEventListener('change', onChange)

    return () => {
      prefersReducedMotion.removeEventListener('change', onChange)
    }
  }, [preference])

  return preference
}
