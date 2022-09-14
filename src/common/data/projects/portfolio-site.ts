import { Project } from '@/common/types'

export const portfolioSite: Project = {
  id: 'portfolio-site',
  url: null,
  githubUrl: 'https://github.com/staffordrose/portfolio',
  image: { src: '/images/projects/portfolio-site.png', alt: '' },
  title: 'Portfolio Site',
  description: [
    {
      type: 'p',
      content: `I had a few primary objectives when building my porfolio website:`,
    },
    {
      type: 'ol',
      props: {
        className: 'list-inside',
      },
      children: [
        {
          type: 'li',
          content: `Implement dark mode`,
        },
        {
          type: 'li',
          content: `Respect users motion preferences`,
        },
        {
          type: 'li',
          content: `Apply understanding of technologies that I would be learning through building the site`,
        },
      ],
    },
    {
      type: 'h3',
      content: `Implementing Dark Mode`,
    },
    {
      type: 'p',
      children: [
        {
          type: 'span',
          content: `Dark mode was fairly straightforward to implement with Tailwind CSS. I used a package called `,
        },
        {
          type: 'a',
          props: {
            size: 'inherit',
            href: `https://github.com/pacocoursey/next-themes`,
            openInNew: true,
          },
          content: `next-themes`,
        },
        {
          type: 'span',
          content: ` that made toggling as simple as possible, while adhering to users `,
        },
        {
          type: 'code',
          content: `prefers-color-scheme`,
        },
        {
          type: 'span',
          content: ` preference.`,
        },
      ],
    },
    {
      type: 'p',
      content: `The main challenge I'm still facing is the behavior of the mobile wireframe hero animation when toggling between light and dark modes. Currently, the animation must restart when the mode is changed.`,
    },
    {
      type: 'h3',
      content: `Respecting Users Motion Preferences`,
    },
    {
      type: 'p',
      children: [
        {
          type: 'span',
          content: `Each page of this site, but especially the home page, has animations that may be unpleasant for some users. I made it a priority to respect users `,
        },
        {
          type: 'code',
          content: `prefers-reduced-motion`,
        },
        {
          type: 'span',
          content: ` preference (if requested).`,
        },
      ],
    },
    {
      type: 'p',
      children: [
        {
          type: 'span',
          content: `Tailwind CSS has a `,
        },
        {
          type: 'code',
          content: `motion-reduce`,
        },
        {
          type: 'span',
          content: ` modifier that covers most use-cases. I used a media query for the Technologies section of the home page, and I added a play/pause button for the mobile wireframe animation when a user has requested minimized motion.`,
        },
      ],
    },
    {
      type: 'h3',
      content: `Learning New Technologies`,
    },
    {
      type: 'p',
      content: `After quitting my previous job, I took some time to begin learning technologies that would advance my career and make me a more well-rounded frontend dev. I chose to use my portfolio site to apply the concepts I would be learning, so I built the site in TypeScript, designed it with Tailwind CSS, and developed a hero animation with Three.js and GreenSock.`,
    },
    {
      type: 'h4',
      content: `TypeScript`,
    },
    {
      type: 'p',
      content: `Each project in my portfolio is built with TypeScript, but this site is the first project I started building with TS. While I still have a lot to learn about the language, I enjoy how it has improved my workflow. Refactoring is no longer such a daunting task, I introduce fewer bugs, and I don't feel like declaring types disrupts my flow.`,
    },
    {
      type: 'h4',
      content: `Tailwind CSS/Twind`,
    },
    {
      type: 'p',
      children: [
        {
          type: 'span',
          content: `I've used CSS-in-JS libraries in practically all my work as a web developer over the last 4`,
        },
        {
          type: 'sup',
          content: `1`,
        },
        {
          type: 'dom-parser',
          content: `&frasl;`,
        },
        {
          type: 'sub',
          content: `2`,
        },
        {
          type: 'span',
          content: ` years. Prior to that, I would customize the CSS of various WordPress themes, which was mostly a nightmare. The themes I used from one particular agency had the `,
        },
        {
          type: 'code',
          content: `!important`,
        },
        {
          type: 'span',
          content: ` flag scattered throughout the codebase. My limited understanding of the CSS cascade, coupled with poorly designed themes, made CSS frustrating. Learning JavaScript, React and CSS-in-JS removed the most frustrating parts of CSS for me. I find component-based UI architecture to be a far superior method of designing websites.`,
        },
      ],
    },
    {
      type: 'p',
      content: `After so much time with libraries like Styled Components, Emotion CSS, and Framer Motion, the developer experience of a utility-first framework like Tailwind CSS was a bit jarring at first. I ended up going with a tailwind-in-js solution to ease the transition. I settled on Twind because I enjoy the API and it seems like a promising project. It hasn't received many updates over the last few months, so I may need to re-evaluate in the future.`,
    },
    {
      type: 'h4',
      content: `Three.js & GreenSock`,
    },
    {
      type: 'p',
      content: `Three.js and GreenSock (GSAP) have become two of my favorite tools. I used them to create the interactive website wireframe animation at the top of the home page. Desktop users can move the mouse horizontally and mobile users can scroll vertically to reveal/hide the elevation of the wireframe's layers and elements.`,
    },
  ],
  technologies: ['typescript', 'twind', 'three-js', 'gsap'],
}
