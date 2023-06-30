import { useEffect, useRef, useState } from 'react'
import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import { projects } from '@/common/data'
import { mergeRecords } from '@/common/utils'
import {
  Introduction,
  ProjectGrid,
  CallToAction,
  SectionNav,
  Technologies,
} from '@/features'
import { useIntersectionObserver } from '@/hooks'
import { Head } from '@/layout'

const sections = [
  {
    id: 'intro',
    name: 'Introduction',
  },
  {
    id: 'technologies',
    name: 'Technologies',
  },
  {
    id: 'projects',
    name: 'Projects',
  },
  {
    id: 'resume',
    name: 'Resume',
  },
]

const Home: NextPage = () => {
  const { theme } = useTheme()

  const sectionElements = useRef<(HTMLElement | null)[]>([])
  const anchorElements = useRef<(HTMLElement | null)[]>([])

  const [sectionVisibility, setSectionVisibility] = useState(
    sections.map(({ id }: { id: string }) => ({ name: id, value: true })),
  )

  const sectionEntries = useIntersectionObserver(sectionElements.current, {
    rootMargin: '-65px 0px -1px 0px',
    threshold: 0,
  })

  useEffect(() => {
    if (Array.isArray(sectionEntries) && sectionEntries.length) {
      const mappedEntries = sectionEntries.map(entry => ({
        name:
          Array.from(entry.target.children).find(c => c.tagName === 'A')?.id ||
          '',
        value: entry.isIntersecting,
      }))

      setSectionVisibility(prevState => mergeRecords(prevState, mappedEntries))
    }
  }, [sectionEntries])

  return (
    <>
      <Head
        title="Hi, I'm a Front-end Web Developer"
        description="I make things for the web."
      />

      <div
        aria-hidden="true"
        className="fixed z-50 bottom-[calc(20vh_-_80px)] left-[calc(50%_-_680px)] hidden min-[1392px]:flex"
      >
        <SectionNav
          sections={sections}
          anchorElements={anchorElements}
          entries={sectionEntries}
        />
      </div>

      <main className="relative w-full pt-16">
        <section
          ref={el => (sectionElements.current[0] = el)}
          className="relative z-10 min-h-screen w-full after:content-[''] after:absolute after:z-20 after:top-[80%] after:bottom-0 after:left-0 after:right-0 after:bg-gradient-to-b after:from-transparent after:to-navy-50 dark:after:to-navy-900"
        >
          <a
            ref={el => (anchorElements.current[0] = el)}
            id={sections[0].id}
            className="relative -top-16 block"
            aria-label={sections[0].name}
            href={`#${sections[0].id}`}
          />

          <Introduction theme={theme} isVisible={sectionVisibility[0].value} />
        </section>

        <section
          ref={el => (sectionElements.current[1] = el)}
          className="min-h-screen-header w-full mb-16"
        >
          <a
            ref={el => (anchorElements.current[1] = el)}
            id={sections[1].id}
            className="relative -top-16 block"
            aria-label={sections[1].name}
            href={`#${sections[1].id}`}
          />

          <Technologies />
        </section>

        <section
          ref={el => (sectionElements.current[2] = el)}
          className="min-h-screen-header w-full max-w-7xl mx-auto mb-24"
        >
          <a
            ref={el => (anchorElements.current[2] = el)}
            id={sections[2].id}
            className="relative -top-16 block"
            aria-label={sections[2].name}
            href={`#${sections[2].id}`}
          />

          <div className="flex flex-col gap-8 h-full w-full p-4">
            <h2>Recent Projects</h2>

            <ProjectGrid projects={projects} animationDelay={150} />
          </div>
        </section>

        <section
          ref={el => (sectionElements.current[3] = el)}
          className="relative min-h-[50vh] w-full mb-32 py-1 after:content-[''] after:absolute after:-z-10 after:top-0 after:left-0 after:h-full after:w-full after:opacity-75 after:bg-gradient-yellow-orange-red-500"
        >
          <a
            ref={el => (anchorElements.current[3] = el)}
            id={sections[3].id}
            className="relative -top-[calc(64px_+_4px)] block"
            aria-label={sections[3].name}
            href={`#${sections[3].id}`}
          />

          <div className="relative z-10 h-full w-full bg-white/75 dark:bg-navy-900/75 after:content-[''] after:absolute after:-z-10 after:top-0 after:left-0 after:block after:h-full after:w-full after:bg-svg-yellow-100 dark:after:bg-svg-yellow-800 after:opacity-25 dark:after:opacity-5 after:bg-squares-md">
            <CallToAction />
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
