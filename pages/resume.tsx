import { useEffect, useRef, useState } from 'react'
import type { NextPage } from 'next'
import { RiFileDownloadLine } from 'react-icons/ri'
import { resume } from '@/common/data'
import { serializeHtml, mergeRecords } from '@/common/utils'
import { SlideUp } from '@/components'
import { ResumeSection } from '@/features'
import { useIntersectionObserver } from '@/hooks'
import { Head } from '@/layout'

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

      <main className="min-h-screen-header mt-16 mb-32">
        <div className="grid gap-8 h-auto w-full max-w-7xl mx-auto p-4">
          <div className="flex justify-between items-center w-full my-8 md:my-12">
            <h1>Resume</h1>

            <a
              className="overflow-hidden inline-flex gap-3 justify-center items-center h-12 w-12 sm:w-auto sm:px-4 border border-solid border-white/[0.025] rounded-sm font-ibm-plex-mono text-lg text-navy-800 dark:text-navy-100 bg-gradient-to-br from-navy-600/25 dark:from-navy-500/25 to-navy-400/25 dark:to-navy-300/25 cursor-pointer hover:from-navy-800/25 hover:dark:from-navy-300/25 hover:to-navy-600/25 hover:dark:to-navy-100/25"
              aria-label="Download Resume PDF"
              href="/documents/Stafford Rose Resume.pdf"
              download="Stafford Rose Resume.pdf"
            >
              <RiFileDownloadLine className="h-7 w-7" />
              <span className="hidden invisible sm:block sm:visible">
                Download
              </span>
            </a>
          </div>

          {resume
            .slice(0, 4)
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

          <div className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] gap-8 w-full">
            {resume
              .slice(4)
              .map(({ id, title, animationDelay, children }, i) => (
                <SlideUp
                  key={id}
                  animationDelay={animationDelay}
                  animationPlayState={
                    sectionVisibility[i + 3]?.value ? 'running' : 'paused'
                  }
                >
                  <ResumeSection
                    innerRef={el => (sectionElements.current[i + 4] = el)}
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
