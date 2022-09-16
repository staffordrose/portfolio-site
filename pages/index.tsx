import { useEffect, useRef, useState } from 'react'
import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import { css, tw } from 'twind'
import { projects } from '@/common/data'
import {
  Introduction,
  ProjectGrid,
  CallToAction,
  SectionNav,
  Technologies,
} from '@/features'
import { useIntersectionObserver } from '@/hooks'
import { Head } from '@/layout'
import { mergeRecords } from '@/utils'

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
        name: entry.target.children[0]?.id,
        value: entry.isIntersecting,
      }))

      setSectionVisibility(prevState => mergeRecords(prevState, mappedEntries))
    }
  }, [sectionEntries])

  return (
    <>
      <Head
        title="Hi, I'm a Frontend Web Developer"
        description="I make things for the web."
      />

      <div
        aria-hidden="true"
        className={`
          fixed z-50 bottom-[calc(20vh-80px)] left-[calc(50%-680px)]
          ${css`
            display: none;

            @media (min-width: 1392px) {
              display: flex;
            }
          `}
        `}
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
          className={`
            relative z-10
            min-h-screen w-full
            after:(
              content-['']
              absolute z-20 top-[80%] bottom-0 left-0 right-0
              bg-gradient-to-b from-transparent to-(navy-50 dark:navy-900)
            )
          `}
        >
          <a
            ref={el => (anchorElements.current[0] = el)}
            id={sections[0].id}
            className="relative -top-16 block"
            href={`#${sections[0].id}`}
          />

          <Introduction theme={theme} isVisible={sectionVisibility[0].value} />
        </section>

        <section
          ref={el => (sectionElements.current[1] = el)}
          className="h-[calc(100vh-64px)] w-full mb-16"
        >
          <a
            ref={el => (anchorElements.current[1] = el)}
            id={sections[1].id}
            className="relative -top-16 block"
            href={`#${sections[1].id}`}
          />

          <Technologies />
        </section>

        <section
          ref={el => (sectionElements.current[2] = el)}
          className="min-h-[calc(100vh-64px)] w-full max-w-7xl mx-auto mb-24"
        >
          <a
            ref={el => (anchorElements.current[2] = el)}
            id={sections[2].id}
            className="relative -top-16 block"
            href={`#${sections[2].id}`}
          />

          <div className="flex flex-col gap-8 h-full w-full p-4">
            <h2>Recent Projects</h2>

            <ProjectGrid projects={projects} animationDelay={150} />
          </div>
        </section>

        <section
          ref={el => (sectionElements.current[3] = el)}
          className={`
            relative
            min-h-[50vh] w-full mb-32 py-1
            after:(
              content-['']
              absolute -z-10 top-0 left-0
              h-full w-full
              opacity-75
            )
            ${css`
              &::after {
                background: linear-gradient(
                  135deg,
                  ${tw.theme('colors.red.500')} 0%,
                  ${tw.theme('colors.orange.500')} 20%,
                  ${tw.theme('colors.yellow.500')} 45%,
                  ${tw.theme('colors.yellow.500')} 55%,
                  ${tw.theme('colors.orange.500')} 80%,
                  ${tw.theme('colors.red.500')} 100%
                );
              }
            `}
          `}
        >
          <div
            className={`
              relative z-10
              h-full w-full
              bg-(white/75 dark:navy-900/75)
              after:(
                content-['']
                absolute -z-10 top-0 left-0
                block
                h-full w-full
                bg-(svg-yellow-100 dark:svg-yellow-800)
                opacity-(25 dark:5)
              )
              ${css`
                &::after {
                  background-size: 15px 15px, 100% 100%;
                  background-position: calc(50% - 3.75px) 0, 0 0;
                }
              `}
            `}
          >
            <a
              ref={el => (anchorElements.current[3] = el)}
              id={sections[3].id}
              className="relative -top-[calc(64px_+_4px)] block"
              href={`#${sections[3].id}`}
            />

            <CallToAction />
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
