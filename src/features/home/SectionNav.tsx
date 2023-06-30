import { useCallback, useEffect, useRef, useState } from 'react'
import type { FC, MutableRefObject } from 'react'
import cn from 'classnames'
import { mergeRecords } from '@/common/utils'

export type SectionNavProps = {
  sections: Array<{ id: string; name: string }>
  anchorElements: MutableRefObject<(HTMLElement | null)[]>
  entries: IntersectionObserverEntry[] | undefined
}

export const SectionNav: FC<SectionNavProps> = ({
  sections,
  anchorElements,
  entries,
}) => {
  const linkElements = useRef<(HTMLButtonElement | null)[]>([])

  const linkState = useRef(
    sections.map(({ id }: { id: string }) => ({ name: id, value: true })),
  )

  const [marker, setMarker] = useState<{ id: string; offsetTop: number }>({
    id: '',
    offsetTop: 0,
  })

  const getActiveLink = useCallback(() => {
    const firstActive = linkState.current.find(l => l.value)
    const item = sections.find(l => l.id === firstActive?.name) ?? sections[0]
    const itemIndex = sections.findIndex(l => l.id === firstActive?.name)
    const active: HTMLButtonElement | null | undefined =
      linkElements.current[itemIndex]

    if (!active) return

    setMarker({
      id: item.id,
      offsetTop: active.offsetTop,
    })
  }, [sections])

  useEffect(() => {
    if (Array.isArray(entries) && entries.length) {
      const mappedEntries = entries.map(entry => ({
        name: entry.target.children[0]?.id,
        value: entry.isIntersecting,
      }))

      linkState.current = mergeRecords(linkState.current, mappedEntries)

      getActiveLink()
    }
  }, [entries, getActiveLink])

  const offset =
    marker.id === 'technologies'
      ? 80
      : marker.id === 'projects'
      ? 40
      : marker.id === 'resume'
      ? 0
      : 120

  return (
    <div className="relative h-40 w-10 rounded-sm bg-navy-50/50 dark:bg-navy-900/50 backdrop-filter backdrop-blur-sm">
      <nav className="relative z-10">
        <ul>
          {sections.map(({ id }, i) => {
            const activeIndex = sections.findIndex(l => l.id == marker.id) ?? 0

            return (
              <li key={id}>
                <button
                  ref={el => (linkElements.current[i] = el)}
                  className="group/marker flex justify-center items-center h-10 w-10"
                  onClick={() => {
                    anchorElements.current[i]?.scrollIntoView({
                      behavior: 'smooth',
                    })
                  }}
                >
                  <span
                    className={cn(
                      'relative inline-flex h-3 w-3',
                      i <= activeIndex
                        ? 'bg-navy-600 dark:bg-navy-400'
                        : 'bg-navy-400 dark:bg-navy-600',
                      i === activeIndex ? 'scale-100' : 'scale-[0.6]',
                      'transition-transform duration-100 group-hover/marker:bg-gradient-to-br group-hover/marker:from-yellow-500 group-hover/marker:via-orange-500 group-hover/marker:to-red-500 group-hover/marker:scale-100',
                    )}
                  />
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      <svg
        className="absolute top-0 left-0 h-40 w-10 stroke-navy-600 dark:stroke-navy-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 160"
      >
        <path
          className="opacity-25"
          d="M20 20V140"
          fill="transparent"
          stroke="current"
          strokeWidth="1.5"
        />

        <path
          d="M20 20V140"
          fill="transparent"
          stroke="current"
          strokeWidth="1.5"
          strokeDasharray={120}
          strokeDashoffset={offset}
        />
      </svg>
    </div>
  )
}
