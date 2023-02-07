import { Project } from '@/common/types'

export const connectSquares: Project = {
  id: 'connect-squares',
  url: 'https://connectsquares.staffordrose.com',
  githubUrl: 'https://github.com/staffordrose/connect-squares',
  image: {
    src: '/images/projects/connect-squares.png',
    alt: 'Connect Squares',
  },
  title: 'Connect Squares',
  description: [
    {
      type: 'p',
      content: `Connect Squares is a clone of an Android game (Connect Me) that I made to expand my understanding of JavaScript and Web APIs.`,
    },
    {
      type: 'h3',
      content: `Gameplay`,
    },
    {
      type: 'p',
      content: `Connect Squares is puzzle game where the player must join the "connectors" on each board piece to matching connectors on other board pieces. There can be no connectors facing an empty square or the edge of the board. To make the game challenging, the color of a board piece determines its behavior:`,
    },
    {
      type: 'ul',
      props: {
        className: 'pl-4 list-square list-outside',
      },
      children: [
        {
          type: 'li',
          children: [
            {
              type: 'strong',
              props: {
                className: 'text-[#805ad5]',
              },
              content: `Purple`,
            },
            {
              type: 'span',
              content: ` can be moved along x-axis/y-axis and can be rotated`,
            },
          ],
        },
        {
          type: 'li',
          children: [
            {
              type: 'strong',
              props: {
                className: 'text-[#38a169]',
              },
              content: `Green`,
            },
            {
              type: 'span',
              content: ` can be moved along x-axis/y-axis`,
            },
          ],
        },
        {
          type: 'li',
          children: [
            {
              type: 'strong',
              props: {
                className: 'text-[#ad691b]',
              },
              content: `Brown`,
            },
            {
              type: 'span',
              content: ` can be moved along either x-axis or y-axis and can be rotated`,
            },
          ],
        },
        {
          type: 'li',
          children: [
            {
              type: 'strong',
              props: {
                className: 'text-[#d69e2e]',
              },
              content: `Yellow`,
            },
            {
              type: 'span',
              content: ` can be moved along either x-axis or y-axis`,
            },
          ],
        },
        {
          type: 'li',
          children: [
            {
              type: 'strong',
              props: {
                className: 'text-[#dd6b20]',
              },
              content: `Orange`,
            },
            {
              type: 'span',
              content: ` can be rotated`,
            },
          ],
        },
        {
          type: 'li',
          children: [
            {
              type: 'strong',
              props: {
                className: 'text-[#e53e3e]',
              },
              content: `Red`,
            },
            {
              type: 'span',
              content: ` cannot be moved or rotated`,
            },
          ],
        },
      ],
    },
    {
      type: 'p',
      children: [
        {
          type: 'span',
          content: `The game can be played in one of three difficulties: `,
        },
        {
          type: 'span',
          props: {
            className: 'italic',
          },
          content: `Normal`,
        },
        {
          type: 'span',
          content: `, `,
        },
        {
          type: 'span',
          props: {
            className: 'italic',
          },
          content: `Hard`,
        },
        {
          type: 'span',
          content: `, and `,
        },
        {
          type: 'span',
          props: {
            className: 'italic',
          },
          content: `Expert`,
        },
        {
          type: 'span',
          content: `.`,
        },
      ],
    },
    {
      type: 'p',
      children: [
        {
          type: 'span',
          props: {
            className: 'italic',
          },
          content: `Normal`,
        },
        {
          type: 'span',
          content: ` is played on a 4x4 grid and board pieces are limited to four colors: `,
        },
        {
          type: 'strong',
          props: {
            className: 'text-[#805ad5]',
          },
          content: `Purple`,
        },
        {
          type: 'span',
          content: ', ',
        },
        {
          type: 'strong',
          props: {
            className: 'text-[#38a169]',
          },
          content: `Green`,
        },
        {
          type: 'span',
          content: ', ',
        },
        {
          type: 'strong',
          props: {
            className: 'text-[#dd6b20]',
          },
          content: `Orange`,
        },
        {
          type: 'span',
          content: ', and ',
        },
        {
          type: 'strong',
          props: {
            className: 'text-[#e53e3e]',
          },
          content: `Red`,
        },
        {
          type: 'span',
          content: '.',
        },
      ],
    },
    {
      type: 'p',
      children: [
        {
          type: 'span',
          props: {
            className: 'italic',
          },
          content: `Hard`,
        },
        {
          type: 'span',
          content: ` is played on a 5x5 grid and includes all board piece colors. The probability of a piece being `,
        },
        {
          type: 'strong',
          props: {
            className: 'text-[#ad691b]',
          },
          content: `Brown`,
        },
        {
          type: 'span',
          content: ` or `,
        },
        {
          type: 'strong',
          props: {
            className: 'text-[#d69e2e]',
          },
          content: `Yellow`,
        },
        {
          type: 'span',
          content: ` is 40%`,
        },
      ],
    },
    {
      type: 'p',
      children: [
        {
          type: 'span',
          props: {
            className: 'italic',
          },
          content: `Expert`,
        },
        {
          type: 'span',
          content: ` is played on a 6x6 grid and includes all board piece colors. The probability of a piece being `,
        },
        {
          type: 'strong',
          props: {
            className: 'text-[#ad691b]',
          },
          content: `Brown`,
        },
        {
          type: 'span',
          content: ` or `,
        },
        {
          type: 'strong',
          props: {
            className: 'text-[#d69e2e]',
          },
          content: `Yellow`,
        },
        {
          type: 'span',
          content: ` is 60%`,
        },
      ],
    },
    {
      type: 'h3',
      content: `Generating Levels Programmatically`,
    },
    {
      type: 'p',
      content: `I chose to automate the level creation process, so I wouldn't have to manually create 300 unique levels. I wrote a script that:`,
    },
    {
      type: 'ol',
      props: {
        className: 'list-inside',
      },
      children: [
        {
          type: 'li',
          content: `Determines the number of board pieces based on board size and progress`,
        },
        {
          type: 'li',
          content: `Sets the color of each board piece based on availability and a pre-determined probability distribution`,
        },
        {
          type: 'li',
          content: `Randomly sets the first board piece`,
        },
        {
          type: 'li',
          content: `Randomly sets subsequent board pieces based on position of previously placed piece`,
        },
        {
          type: 'li',
          content: `Verifies that all board pieces are bordering at least one other piece along the X or Y axis`,
        },
        {
          type: 'li',
          content: `Adds matching connectors at the intersection of all board pieces`,
        },
        {
          type: 'li',
          content: `Shuffles eligible board pieces, respecting x-axis/y-axis movement behavior`,
        },
        {
          type: 'li',
          content: `Rotates eligible board pieces`,
        },
      ],
    },
    {
      type: 'p',
      content: `To make levels more challenging as the player advances, I simply increased the number of board pieces. This means it's very possible (likely even) that some subsequent levels will be easier or significantly harder than the level preceding it. I was fine with this tradeoff, because the game is solely intended for my portfolio.`,
    },
  ],
  technologies: ['typescript', 'next-js', 'chakra-ui', 'framer-motion'],
}
