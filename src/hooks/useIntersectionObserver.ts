import { useEffect, useState } from 'react'

const defaultItems: (HTMLElement | null)[] = []
const defaultOptions: IntersectionObserverInit = {
  root: null,
  rootMargin: '0%',
  threshold: 0,
}

function useIntersectionObserver(
  items = defaultItems,
  options = defaultOptions,
): IntersectionObserverEntry[] | undefined {
  const { root, rootMargin, threshold } = options

  const [entries, setEntries] = useState<
    IntersectionObserverEntry[] | undefined
  >()

  const updateEntries = (entries: IntersectionObserverEntry[]) => {
    setEntries(entries)
  }

  useEffect(() => {
    const nodes = items.filter(el => el)
    const hasIOSupport = !!window.IntersectionObserver

    if (!hasIOSupport || !Array.isArray(nodes) || !nodes.length) return

    const observerParams = { root, rootMargin, threshold }
    const observer = new IntersectionObserver(updateEntries, observerParams)

    nodes.forEach(node => {
      if (node) observer.observe(node)
    })

    return () => observer.disconnect()
  }, [items, JSON.stringify(threshold), root, rootMargin])

  return entries
}

export default useIntersectionObserver
