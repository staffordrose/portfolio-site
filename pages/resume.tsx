import { useEffect, useRef, useState } from 'react'
import type { NextPage } from 'next'
import { ResumeSection } from '@/features'
import { resume } from '@/common/data'
import { SlideUp } from '@/components'
import { useIntersectionObserver } from '@/hooks'
import { Head } from '@/layout'
import { serializeHtml, mergeRecords } from '@/utils'

const Resume: NextPage = () => {
  const sectionElements = useRef<(HTMLElement | null)[]>([])

  const [sectionVisibility, setSectionVisbility] = useState(
    resume.map(({ id }: { id: string }) => ({ name: id, value: false })),
  )

  const entries = useIntersectionObserver(sectionElements.current, {
    rootMargin: '-129px 0px -65px 0px',
    threshold: 0,
  })

  useEffect(() => {
    if (Array.isArray(entries) && entries.length) {
      const mappedEntries = entries.map(entry => ({
        name: entry.target.id,
        value: entry.isIntersecting,
      }))

      setSectionVisbility(prevState => mergeRecords(prevState, mappedEntries))
    }
  }, [entries])

  return (
    <>
      <Head title="My Resume" description="My education and work history." />

      <main className="min-h-[calc(100vh-64px)] mt-16 mb-32">
        <div className="h-auto w-full max-w-7xl mx-auto p-4">
          <h1 className="my-8 md:my-12">Resume</h1>

          {resume
            .slice(0, 3)
            .map(({ id, title, animationDelay, children }, i) => (
              <SlideUp
                key={id}
                animationDelay={animationDelay}
                animationPlayState={
                  sectionVisibility[i]?.value ? 'running' : 'paused'
                }
              >
                <ResumeSection
                  innerRef={el => (sectionElements.current[i] = el)}
                  id={id}
                  title={title}
                >
                  {Array.isArray(children) &&
                    children.length > 0 &&
                    serializeHtml(children)}
                </ResumeSection>
              </SlideUp>
            ))}

          <div className="grid grid-cols-[1fr] md:(grid-cols-[1fr_1fr] gap-8) w-full">
            {resume
              .slice(3)
              .map(({ id, title, animationDelay, children }, i) => (
                <SlideUp
                  key={id}
                  animationDelay={animationDelay}
                  animationPlayState={
                    sectionVisibility[i + 3]?.value ? 'running' : 'paused'
                  }
                >
                  <ResumeSection
                    innerRef={el => (sectionElements.current[i + 3] = el)}
                    id={id}
                    title={title}
                  >
                    {Array.isArray(children) &&
                      children.length > 0 &&
                      serializeHtml(children)}
                  </ResumeSection>
                </SlideUp>
              ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default Resume
