import { Project } from '@/common/types'

export const outRoutes: Project = {
  id: 'out-routes',
  url: 'https://outroutes.staffordrose.com',
  githubUrl: 'https://github.com/staffordrose/out-routes',
  image: { src: '/images/projects/out-routes.jpg', alt: 'Out Routes' },
  title: 'Out Routes',
  flag: 'Active Development',
  description: [
    {
      type: 'div',
      props: {
        className:
          'p-4 rounded-sm bg-gradient-to-br from-yellow-500/50 via-orange-500/50 to-red-500/50',
      },
      children: [
        {
          type: 'p',
          children: [
            {
              type: 'span',
              props: {
                className: 'font-medium italic',
              },
              content: `Development of this project is ongoing. I am adding additional functionality and improving existing features.`,
            },
          ],
        },
      ],
    },
    {
      type: 'p',
      content: `One of my favorite things to do is canyoneering (rappelling through canyons) in southern Utah, Nevada, and California. Activities like canyoneering require preparation to make sure you have the necessary equipment and knowledge for a given route. To avoid bringing all of one’s gear on every trip, canyoneers use forums and wikis that contain betas and trip reports with route-specific information. Knowing all the potential pitfalls beforehand is essential to backcountry safety.`,
    },
    {
      type: 'p',
      children: [
        {
          type: 'span',
          content: `Out Routes is my first attempt at building a mapping platform for technical outdoor sports. Out Routes is a full-stack application built in `,
        },
        {
          type: 'a',
          props: {
            href: 'https://www.typescriptlang.org/',
            openInNew: true,
          },
          content: `TypeScript`,
        },
        {
          type: 'span',
          content: ` with `,
        },
        {
          type: 'a',
          props: {
            href: 'https://nextjs.org/',
            openInNew: true,
          },
          content: `Next.js`,
        },
        {
          type: 'span',
          content: `, `,
        },
        {
          type: 'a',
          props: {
            href: 'https://react-hook-form.com/',
            openInNew: true,
          },
          content: `React Hook Form`,
        },
        {
          type: 'span',
          content: `, `,
        },
        {
          type: 'a',
          props: {
            href: 'https://tanstack.com/query/latest',
            openInNew: true,
          },
          content: `TanStack Query`,
        },
        {
          type: 'span',
          content: `, `,
        },
        {
          type: 'a',
          props: {
            href: 'https://www.radix-ui.com/',
            openInNew: true,
          },
          content: `Radix`,
        },
        {
          type: 'span',
          content: `, `,
        },
        {
          type: 'a',
          props: {
            href: 'https://www.mapbox.com/',
            openInNew: true,
          },
          content: `mapbox`,
        },
        {
          type: 'span',
          content: `, and `,
        },
        {
          type: 'a',
          props: {
            href: 'https://xata.io/docs/overview',
            openInNew: true,
          },
          content: `xata`,
        },
        {
          type: 'span',
          content: `.`,
        },
      ],
    },
    {
      type: 'h3',
      content: `Objectives`,
    },
    {
      type: 'ol',
      children: [
        {
          type: 'li',
          content: `Further my understanding of building and securing REST APIs`,
        },
        {
          type: 'li',
          content: `Gain experience modeling a complex SQL schema`,
        },
        {
          type: 'li',
          content: `Work with data that can be public/private, can have one or more collaborators, and tracks change history`,
        },
      ],
    },
    {
      type: 'h3',
      content: `Route Features`,
    },
    {
      type: 'h4',
      content: `Public/Private Visibility`,
    },
    {
      type: 'p',
      content: `I like the idea of allowing users to opt-in to community-based features, so I made it simple to keep routes hidden from the public. If someone want to create routes and maps for personal use, they should be able to without losing any functionality.`,
    },
    {
      type: 'h4',
      content: `Permission-based Collaboration`,
    },
    {
      type: 'p',
      content: `Routes belong to a single owner, and other users on the platform can submit change requests. To improve collaboration, I’ve also planned for permission-based settings that will enable route owners to add other users as members. Members will have one of four roles:`,
    },
    {
      type: 'ul',
      props: {
        className: 'pl-4 list-square list-outside',
      },
      children: [
        {
          type: 'li',
          content: `Admin`,
        },
        {
          type: 'li',
          content: `Moderator`,
        },
        {
          type: 'li',
          content: `Contributor`,
        },
        {
          type: 'li',
          content: `Viewer`,
        },
      ],
    },
    {
      type: 'p',
      content: `Admins can add other Admins, Moderators, Contributors, and Viewers to a route. Moderators can add Moderators, Contributors, and Viewers.`,
    },
    {
      type: 'p',
      content: `Admins and Moderators can directly edit a route. In private routes, Contributors can submit change requests and Viewers have read-only access. For public routes, every user on the platform has Contributor/Viewer privileges.`,
    },
    {
      type: 'h4',
      content: `Version Control`,
    },
    {
      type: 'p',
      content: `I've implemented a basic version control system for each route, enabling users to see how a route has changed over time. I will soon add the functionality to undo the most recent changes to a route.`,
    },
  ],
  technologies: ['tanstack-query', 'react-hook-form', 'mapbox', 'xata'],
}
