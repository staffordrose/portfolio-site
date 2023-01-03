import type { FC } from 'react'
import Image from 'next/image'
import { BiLinkExternal } from 'react-icons/bi'
import { FiGithub } from 'react-icons/fi'
import type { IconType } from 'react-icons'
import { Project } from '@/common/types'
import { serializeHtml } from '@/common/utils'
import { Button, Chip, Link, SlideUp } from '@/components'

type IconLink = {
  id: string
  icon: IconType
  title: string
  href?: string
}

export type ProjectDetailProps = {
  project: Project
}

export const ProjectDetail: FC<ProjectDetailProps> = ({ project }) => {
  const { id, url, githubUrl, image, title, flag, description } = project

  return (
    <SlideUp key={id}>
      <div className="flex flex-col gap-4 p-4 rounded-lg bg-(navy-100 dark:navy-800)">
        <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_auto] gap-2 items-end">
          {title ? (
            flag ? (
              <div className="grid sm:grid-cols-[auto_auto] gap-4 justify-start justify-items-start items-center">
                <h2>{title}</h2>
                <Chip size="lg">{flag}</Chip>
              </div>
            ) : (
              <h2>{title}</h2>
            )
          ) : null}

          <div className="flex gap-2">
            {[
              ...(typeof url === 'string'
                ? [
                    {
                      id: 'site',
                      icon: BiLinkExternal,
                      title: 'View live project',
                      href: url,
                    },
                  ]
                : []),
              ...(typeof githubUrl === 'string'
                ? [
                    {
                      id: 'source',
                      icon: FiGithub,
                      title: 'View source code',
                      href: githubUrl,
                    },
                  ]
                : []),
            ].map(({ id, icon: Icon, title, href }: IconLink) => {
              if (!href) {
                return (
                  <Button key={id} isSquare aria-label={title} disabled={true}>
                    <Icon className="h-6 w-6" />
                  </Button>
                )
              }

              return (
                <Link
                  key={id}
                  variant="button"
                  isSquare
                  aria-label={title}
                  href={href}
                  openInNew
                >
                  <Icon className="h-6 w-6" />
                </Link>
              )
            })}
          </div>
        </div>

        <div
          className="overflow-hidden h-auto w-full mb-2 rounded shadow-xl"
          style={{ aspectRatio: '3/2' }}
        >
          {!!image?.src && (
            <Image
              src={image.src}
              alt={image.alt || title}
              width={936}
              height={624}
              priority={true}
            />
          )}
        </div>

        {Array.isArray(description) &&
          description.length > 0 &&
          serializeHtml(description)}
      </div>
    </SlideUp>
  )
}
