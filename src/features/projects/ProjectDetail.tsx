import type { FC } from 'react'
import { BiLinkExternal } from 'react-icons/bi'
import { FiGithub } from 'react-icons/fi'
import { Project } from '@/common/types'
import { Button, Chip, Link, SlideUp } from '@/components'
import { serializeHtml } from '@/utils'

interface ProjectDetailProps {
  project: Project
}

const ProjectDetail: FC<ProjectDetailProps> = ({ project }) => {
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
              typeof url === 'string'
                ? {
                    id: 'site',
                    icon: BiLinkExternal,
                    href: url,
                  }
                : {},
              typeof githubUrl === 'string'
                ? {
                    id: 'source',
                    icon: FiGithub,
                    href: githubUrl,
                  }
                : {},
            ]
              .filter(item => item?.id)
              .map(
                ({
                  id,
                  icon,
                  href,
                }: {
                  id?: string
                  icon?: any
                  href?: string
                }) => {
                  const Icon = icon

                  if (!href) {
                    return (
                      <Button key={id} isSquare disabled={true}>
                        <Icon className="h-6 w-6" />
                      </Button>
                    )
                  }

                  return (
                    <Link
                      key={id}
                      variant="button"
                      isSquare
                      href={href}
                      openInNew
                    >
                      <Icon className="h-6 w-6" />
                    </Link>
                  )
                },
              )}
          </div>
        </div>

        {!!image?.src ? (
          <img
            className="h-auto w-full mb-2 rounded shadow-xl"
            src={image.src}
            alt={image.alt || title}
          />
        ) : (
          <div style={{ aspectRatio: '3/2' }} />
        )}

        {Array.isArray(description) &&
          description.length > 0 &&
          serializeHtml(description)}
      </div>
    </SlideUp>
  )
}

export default ProjectDetail
