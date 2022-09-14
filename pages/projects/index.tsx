import { useEffect } from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { projects } from '@/common/data'
import { Project } from '@/common/types'
import { Button } from '@/components'
import { ProjectDetail } from '@/features'

const Projects: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    if (router.isReady && !router.query.p) {
      router.push('/projects?p=address-book')
    }
  }, [])

  return (
    <>
      <Head>
        <title>Projects | Stafford Rose</title>
        <meta name="og:title" content="My Projects" />
        <meta
          name="og:description"
          content="My recent web devlopment projects."
        />
        <meta
          property="og:image"
          content="https://staffordrose.com/images/og/default.png"
        />
        <meta name="twitter:creator" content="@staffordrose32" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="min-h-[calc(100vh-64px)] mt-16 mb-32">
        <div className="h-auto w-full max-w-7xl mx-auto p-4">
          <h1 className="my-8 md:my-12">Projects</h1>

          <div className="grid grid-cols-[1fr] gap-6 lg:grid-cols-[192px_1fr] xl:grid-cols-[256px_1fr]">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] lg:(grid-cols-1) gap-2 content-start">
              {projects.map(project => {
                const isActive = project.id === router.query.p

                return (
                  <Button
                    key={project.id}
                    variant="solid"
                    size="lg"
                    isActive={isActive}
                    onClick={() => {
                      router.push(
                        {
                          pathname: '/projects',
                          query: { p: project.id },
                        },
                        undefined,
                        { shallow: true, scroll: false },
                      )
                    }}
                  >
                    {project.title}
                  </Button>
                )
              })}
            </div>

            {projects.some(({ id }) => id === router.query.p) && (
              <ProjectDetail
                project={
                  projects.find(({ id }) => id === router.query.p) ??
                  ({} as Project)
                }
              />
            )}
          </div>
        </div>
      </main>
    </>
  )
}

export default Projects
