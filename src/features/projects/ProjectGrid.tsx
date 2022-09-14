import { useEffect, useRef, useState } from 'react'
import type { FC } from 'react'
import { css } from 'twind'
import { RiArrowRightFill } from 'react-icons/ri'
import { technologies } from '@/common/data'
import { Project } from '@/common/types'
import { Chip, Link, ScaleIn, SlideUp } from '@/components'
import { useIntersectionObserver } from '@/hooks'
import { mergeRecords, serializeHtmlToPlainText } from '@/utils'

interface ProjectGridProps {
  projects: Project[]
  animationDelay?: number
  animationDuration?: number
}

const ProjectGrid: FC<ProjectGridProps> = ({
  projects,
  animationDelay,
  animationDuration,
}) => {
  const projectElements = useRef<(HTMLElement | null)[]>([])

  const [projectVisibility, setProjectVisbility] = useState(
    projects.map(({ id }: { id: string }) => ({ name: id, value: false })),
  )

  const entries = useIntersectionObserver(projectElements.current, {
    rootMargin: '-129px 0px -65px 0px',
    threshold: 0,
  })

  useEffect(() => {
    if (Array.isArray(entries) && entries.length) {
      const mappedEntries = entries.map(entry => ({
        name: entry.target.id,
        value: entry.isIntersecting,
      }))

      setProjectVisbility(prevState => mergeRecords(prevState, mappedEntries))
    }
  }, [entries])

  return (
    <div className="grid gap-16 grid-cols-1">
      {projects.map(
        (
          { id, image, title, flag, description, technologies: technologyIds },
          i,
        ) => {
          const justify = i % 2 === 0 ? 'left' : 'right'

          const descriptionStr = serializeHtmlToPlainText(
            description?.filter(d => ['p', 'ul', 'ol'].includes(d.type)) ?? [],
          )

          return (
            <SlideUp
              key={id}
              animationDelay={animationDelay}
              animationDuration={animationDuration}
              animationPlayState={
                projectVisibility[i]?.value ? 'running' : 'paused'
              }
            >
              <article
                ref={el => (projectElements.current[i] = el)}
                id={id}
                className={`group~card w-full max-w-[960px] ${
                  justify === 'left' ? `mr-auto` : `ml-auto`
                }`}
              >
                <figure
                  className={`relative ${
                    justify === 'left' ? `pr-[6.667%]` : `pl-[6.667%]`
                  }`}
                >
                  {!!image?.src ? (
                    <img
                      className="h-auto w-full rounded shadow-xl"
                      src={image.src}
                      alt={image.alt || title}
                    />
                  ) : (
                    <div style={{ aspectRatio: '3/2' }} />
                  )}

                  {Array.isArray(technologyIds) && technologyIds.length > 0 && (
                    <div
                      className={`
                        absolute z-10 top-2 sm:top-[6.667%] ${
                          justify === 'left' ? `right-0` : `left-0`
                        }
                        flex flex-col gap-2 md:gap-3 lg:gap-4
                        w-[12.5%] sm:w-[8.333%]
                      `}
                    >
                      {technologyIds.map((t, index) => {
                        const { image, title: technologyTitle } =
                          technologies.find(({ id }) => id === t) ?? {}

                        return (
                          <ScaleIn
                            key={t}
                            animationDelay={
                              (animationDelay ?? 0) + (index + 1) * 150
                            }
                            animationDuration={animationDuration}
                            animationPlayState={
                              projectVisibility[i]?.value ? 'running' : 'paused'
                            }
                          >
                            <div
                              className={`
                                overflow-hidden
                                flex justify-center content-center
                                w-full rounded-sm
                                bg-white
                                shadow-xl
                                aspect-square
                              `}
                            >
                              {!!image?.src && (
                                <img
                                  src={image.src}
                                  alt={image.alt || technologyTitle}
                                />
                              )}
                            </div>
                          </ScaleIn>
                        )
                      })}
                    </div>
                  )}

                  <figcaption className="flex flex-col gap-4 items-start py-6 text-(navy-900 dark:white)">
                    {title ? (
                      flag ? (
                        <div className="grid sm:grid-cols-[auto_auto] gap-4 justify-items-start items-center">
                          <h3>{title}</h3>
                          <Chip size="sm">{flag}</Chip>
                        </div>
                      ) : (
                        <h3>{title}</h3>
                      )
                    ) : null}

                    {!!descriptionStr && (
                      <p
                        className={`
                          overflow-hidden
                          text-ellipsis
                          ${css`
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            line-clamp: 2;
                            -webkit-box-orient: vertical;
                          `}
                        `}
                      >
                        {descriptionStr}
                      </p>
                    )}

                    <Link
                      className="group"
                      variant="button"
                      href={`/projects?p=${id}`}
                    >
                      <RiArrowRightFill
                        className={`
                          -translate-x-2 transition-transform duration-300 ease-in-out
                          group-hover:translate-x-0
                        `}
                        size="1.25rem"
                      />
                      View Project
                    </Link>
                  </figcaption>
                </figure>
              </article>
            </SlideUp>
          )
        },
      )}
    </div>
  )
}

export default ProjectGrid
