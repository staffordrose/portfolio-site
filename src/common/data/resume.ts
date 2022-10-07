import { css } from 'twind'
import {
  BiBuildingHouse,
  BiEnvelope,
  BiLinkExternal,
  BiPhone,
} from 'react-icons/bi'
import { FiGithub } from 'react-icons/fi'
import { ResumeSection } from '@/common/types'

const resume: ResumeSection[] = [
  {
    id: 'summary',
    title: 'Summary',
    animationDelay: 0,
    children: [
      {
        type: 'p',
        content: `Front-end web developer with 4+ years of experience building web applications. I am self-taught and worked as the sole designer and developer of multiple user-facing React applications.`,
      },
      {
        type: 'p',
        children: [
          {
            type: 'span',
            content: `The years I spent with Leisure Time Inc. were incredible and illuminating. I explored my interests, discovered my passion for web development, and gained valuable experience designing and developing JavaScript applications. However, after years as a solo programmer, I felt that I would benefit from joining an established dev team. After planning my departure with management and training my replacement, I left Leisure Time and `,
          },
          {
            type: 'a',
            props: {
              href: '/projects?p=portfolio-site#learning-technologies',
            },
            content: `learned technologies`,
          },
          {
            type: 'span',
            content: ` that I used to build my portfolio and become a more well-rounded front-end dev. I'm now seeking to join an engineering team where I can make an impact and continue to grow as a developer.`,
          },
        ],
      },
    ],
  },
  {
    id: 'work',
    title: 'Work Experience',
    animationDelay: 300,
    children: [
      {
        type: 'ul',
        props: {
          className: 'flex flex-col gap-8',
        },
        children: [
          {
            type: 'ResumeItem',
            children: [
              {
                type: 'ResumeItemHeading',
                props: {
                  title: `Web Developer`,
                  subtitle: `Leisure Time Inc. - Idaho Falls, ID`,
                  timespan: `Jan 2018 - Feb 2022`,
                },
              },
              {
                type: 'ResumeItemContent',
                children: [
                  {
                    type: 'p',
                    props: {
                      className: 'mb-2 italic',
                    },
                    content: `Worked remotely as sole designer and developer of hot tub/hearth product configurator, customer portal, employee dashboard, headless Shopify storefront, public website, and internal component library. Interfaced with ownership and department heads to ensure the products met desired outcomes.`,
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
                            type: 'span',
                            content: `Built customer portal with product configurator `,
                          },
                          {
                            type: 'a',
                            props: {
                              className: `
                                group~link
                                inline
                                ${css`
                                  vertical-align: -2px;
                                `}
                              `,
                              'aria-label': `View Leisure Time Inc. customer portal`,
                              href: 'https://my.leisuretimeinc.com',
                              openInNew: true,
                            },
                            children: [
                              {
                                type: 'react-icon',
                                props: {
                                  className: 'group~link-hover:text-orange-500',
                                },
                                component: BiLinkExternal,
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: 'li',
                        children: [
                          {
                            type: 'span',
                            content: `Built employee dashboard with quote builder `,
                          },
                          {
                            type: 'a',
                            props: {
                              className: `
                                group~link
                                inline
                                ${css`
                                  vertical-align: -2px;
                                `}
                              `,
                              'aria-label': `View Leisure Time Inc. employee dashboard`,
                              href: 'https://admin.leisuretimeinc.com',
                              openInNew: true,
                            },
                            children: [
                              {
                                type: 'react-icon',
                                props: {
                                  className: 'group~link-hover:text-orange-500',
                                },
                                component: BiLinkExternal,
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: 'li',
                        children: [
                          {
                            type: 'span',
                            content: `Built headless Shopify storefront `,
                          },
                          {
                            type: 'a',
                            props: {
                              className: `
                                group~link
                                inline
                                ${css`
                                  vertical-align: -2px;
                                `}
                              `,
                              'aria-label': `View Leisure Time Inc. ecommerce store`,
                              href: 'https://shop.leisuretimeinc.com',
                              openInNew: true,
                            },
                            children: [
                              {
                                type: 'react-icon',
                                props: {
                                  className: 'group~link-hover:text-orange-500',
                                },
                                component: BiLinkExternal,
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: 'li',
                        children: [
                          {
                            type: 'span',
                            content: `Migrated WordPress site to Next.js & Prismic `,
                          },
                          {
                            type: 'a',
                            props: {
                              className: `
                                group~link
                                inline
                                ${css`
                                  vertical-align: -2px;
                                `}
                              `,
                              'aria-label': `View Leisure Time Inc. main website`,
                              href: 'https://leisuretimeinc.com',
                              openInNew: true,
                            },
                            children: [
                              {
                                type: 'react-icon',
                                props: {
                                  className: 'group~link-hover:text-orange-500',
                                },
                                component: BiLinkExternal,
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: 'li',
                        content: `Refactored product configurator/quote builder into standalone package`,
                      },
                      {
                        type: 'li',
                        content: `Developed inbound/outbound email service using Cloud Run & Postmark`,
                      },
                      {
                        type: 'li',
                        content: `Authored shared component library to unify design language of websites`,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'ResumeItem',
            children: [
              {
                type: 'ResumeItemHeading',
                props: {
                  title: `Videographer`,
                  subtitle: `Independent Contractor - Salt Lake City, UT`,
                  timespan: `May 2015 - Dec 2017`,
                },
              },
              {
                type: 'ResumeItemContent',
                children: [
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
                            type: 'span',
                            content: `Filmed & edited promotional videos for:`,
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
                                    type: 'span',
                                    content: `Montana Fly Fishing Guides - Livingston, MT `,
                                  },
                                  {
                                    type: 'a',
                                    props: {
                                      className: `
                                        group~link
                                        inline
                                        ${css`
                                          vertical-align: -2px;
                                        `}
                                      `,
                                      'aria-label': `View Montana Fly Fishing Guides website`,
                                      href: 'https://www.montanaflyfishingguides.com',
                                      openInNew: true,
                                    },
                                    children: [
                                      {
                                        type: 'react-icon',
                                        props: {
                                          className:
                                            'group~link-hover:text-orange-500',
                                        },
                                        component: BiLinkExternal,
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                type: 'li',
                                children: [
                                  {
                                    type: 'span',
                                    content: `Fly Fish Rockport - Rockport, TX `,
                                  },
                                  {
                                    type: 'a',
                                    props: {
                                      className: `
                                      group~link
                                      inline
                                      ${css`
                                        vertical-align: -2px;
                                      `}
                                    `,
                                      'aria-label': `View Fly Fish Rockport website`,
                                      href: 'https://www.flyfishrockport.com',
                                      openInNew: true,
                                    },
                                    children: [
                                      {
                                        type: 'react-icon',
                                        props: {
                                          className:
                                            'group~link-hover:text-orange-500',
                                        },
                                        component: BiLinkExternal,
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                type: 'li',
                                children: [
                                  {
                                    type: 'span',
                                    content: `Leisure Time Inc. - Idaho Falls, ID `,
                                  },
                                  {
                                    type: 'a',
                                    props: {
                                      className: `
                                      group~link
                                      inline
                                      ${css`
                                        vertical-align: -2px;
                                      `}
                                    `,
                                      'aria-label': `View Leisure Time Inc. promotional video`,
                                      href: 'https://www.youtube.com/watch?v=wAkHvzqbdOo',
                                      openInNew: true,
                                    },
                                    children: [
                                      {
                                        type: 'react-icon',
                                        props: {
                                          className:
                                            'group~link-hover:text-orange-500',
                                        },
                                        component: BiLinkExternal,
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: 'li',
                        content: `Filmed & edited local TV commercial for Leisure Time Inc. - Idaho Falls, ID`,
                      },
                      {
                        type: 'li',
                        children: [
                          {
                            type: 'span',
                            content: `Filmed & edited weddings in Utah & Texas `,
                          },

                          {
                            type: 'a',
                            props: {
                              className: `
                              group~link
                              inline
                              ${css`
                                vertical-align: -2px;
                              `}
                            `,
                              'aria-label': `View Stafford Rose Media Vimeo channel`,
                              href: 'https://vimeo.com/staffordrosemedia',
                              openInNew: true,
                            },
                            children: [
                              {
                                type: 'react-icon',
                                props: {
                                  className: 'group~link-hover:text-orange-500',
                                },
                                component: BiLinkExternal,
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'ResumeItem',
            children: [
              {
                type: 'ResumeItemHeading',
                props: {
                  title: `Internet Marketing Consultant`,
                  subtitle: `Independent Contractor - Provo & Salt Lake City, UT`,
                  timespan: `Apr 2014 - Dec 2017`,
                },
              },
              {
                type: 'ResumeItemContent',
                children: [
                  {
                    type: 'p',
                    props: {
                      className: 'mb-2 italic',
                    },
                    content: `Worked for a few local businesses in Idaho, Montana, and Texas. More than 60% of my billable hours were for Leisure Time Inc.`,
                  },
                  {
                    type: 'ul',
                    props: {
                      className: 'pl-4 list-square list-outside',
                    },
                    children: [
                      {
                        type: 'li',
                        content: `Built & updated WordPress websites`,
                      },
                      {
                        type: 'li',
                        content: `Created & managed AdWords campaigns for clientele`,
                      },
                      {
                        type: 'li',
                        content: `Claimed local directories & updated client info`,
                      },
                      {
                        type: 'li',
                        content: `Prepared SEO audits & implemented optimizations`,
                      },
                      {
                        type: 'li',
                        content: `Designed web graphics for promotional banners, display ads & email newsletters`,
                      },
                      {
                        type: 'li',
                        content: `Designed print graphics for business cards, vehicle wraps & product signage`,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'ResumeItem',
            children: [
              {
                type: 'ResumeItemHeading',
                props: {
                  title: `Internet Marketing Guru`,
                  subtitle: `High 5 Promotions - Austin, TX`,
                  timespan: `May 2013 - Apr 2014`,
                },
              },
              {
                type: 'ResumeItemContent',
                children: [
                  {
                    type: 'ul',
                    props: {
                      className: 'pl-4 list-square list-outside',
                    },
                    children: [
                      {
                        type: 'li',
                        content: `Created & managed AdWords campaigns for clientele`,
                      },
                      {
                        type: 'li',
                        content: `Claimed local directories & updated client info`,
                      },
                      {
                        type: 'li',
                        content: `Prepared SEO audits & implemented optimizations`,
                      },
                      {
                        type: 'li',
                        content: `Updated content & design of client WordPress sites`,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'ResumeItem',
            children: [
              {
                type: 'ResumeItemHeading',
                props: {
                  title: `Internet Marketing Intern`,
                  subtitle: `High 5 Promotions - Austin, TX`,
                  timespan: `Oct 2012 - May 2013`,
                },
              },
              {
                type: 'ResumeItemContent',
                children: [
                  {
                    type: 'ul',
                    props: {
                      className: 'pl-4 list-square list-outside',
                    },
                    children: [
                      {
                        type: 'li',
                        content: `Created & managed AdWords campaigns for clientele`,
                      },
                      {
                        type: 'li',
                        content: `Claimed local directories & updated client info`,
                      },
                      {
                        type: 'li',
                        content: `Prepared SEO audits & implemented optimizations`,
                      },
                      {
                        type: 'li',
                        content: `Updated content & design of client WordPress sites`,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'education',
    title: 'Education',
    animationDelay: 300,
    children: [
      {
        type: 'ul',
        props: {
          className: 'flex flex-col gap-8',
        },
        children: [
          {
            type: 'ResumeItem',
            children: [
              {
                type: 'ResumeItemHeading',
                props: {
                  title: `Texas State University-San Marcos`,
                  subtitle: `Bachelor of Business Administration - Marketing`,
                  timespan: `Fall 2011 - Spring 2013`,
                },
              },
              {
                type: 'ResumeItemContent',
                children: [
                  {
                    type: 'ul',
                    props: {
                      className: 'pl-4 list-square list-outside',
                    },
                    children: [
                      { type: 'li', content: `Graduated May 2013` },
                      { type: 'li', content: `Texas State GPA: 3.9/4.0` },
                      {
                        type: 'li',
                        content: `American Marketing Association National Case Competition Team (2nd place)`,
                      },
                      {
                        type: 'li',
                        content: `Completed generals at Weatherford College & Austin Community College prior to attending TXST`,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'skills',
    title: 'Skills',
    animationDelay: 300,
    children: [
      {
        type: 'ul',
        props: {
          className: 'pl-4 list-square list-outside',
        },
        children: [
          { type: 'li', content: `Detail-oriented` },
          { type: 'li', content: `Problem solving` },
          { type: 'li', content: `Teamwork` },
          { type: 'li', content: `Self-management` },
          { type: 'li', content: `Communication skills` },
          { type: 'li', content: `Strategic planning` },
        ],
      },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    animationDelay: 450,
    children: [
      {
        type: 'ul',
        props: {
          className: 'pl-4 list-square list-outside',
        },
        children: [
          { type: 'li', content: `Canyoneering` },
          { type: 'li', content: `Cycling` },
          { type: 'li', content: `Fly fishing` },
          { type: 'li', content: `Hiking` },
          { type: 'li', content: `Camping` },
          { type: 'li', content: `Skiing` },
        ],
      },
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    animationDelay: 450,
    children: [
      {
        type: 'ResumeItemContent',
        children: [
          {
            type: 'ul',
            props: {
              className:
                'list-none w-full divide-y sm:divide-y-0 divide-navy-500/10',
            },
            children: [
              {
                type: 'li',
                children: [
                  {
                    type: 'a',
                    props: {
                      className: `group~link min-h-[48px] sm:min-h-0`,
                      href: `tel:18176942015`,
                    },
                    children: [
                      {
                        type: 'react-icon',
                        props: {
                          className: `group~link-hover:text-yellow-500`,
                        },
                        component: BiPhone,
                      },
                      {
                        type: 'span',
                        content: `(817) 694-2015`,
                      },
                    ],
                  },
                ],
              },
              {
                type: 'li',
                children: [
                  {
                    type: 'a',
                    props: {
                      className: `group~link min-h-[48px] sm:min-h-0`,
                      href: `mailto:hello@staffordrose.com`,
                    },
                    children: [
                      {
                        type: 'react-icon',
                        props: {
                          className: `group~link-hover:text-yellow-500`,
                        },
                        component: BiEnvelope,
                      },
                      {
                        type: 'span',
                        content: `hello@staffordrose.com`,
                      },
                    ],
                  },
                ],
              },
              {
                type: 'li',
                children: [
                  {
                    type: 'span',
                    props: {
                      className: `flex gap-1 items-center min-h-[48px] sm:min-h-0`,
                    },
                    children: [
                      {
                        type: 'react-icon',
                        component: BiBuildingHouse,
                      },
                      {
                        type: 'span',
                        content: `Salt Lake City, UT`,
                      },
                    ],
                  },
                ],
              },
              {
                type: 'li',
                children: [
                  {
                    type: 'a',
                    props: {
                      className: `group~link min-h-[48px] sm:min-h-0`,
                      href: `https://github.com/staffordrose`,
                      openInNew: true,
                    },
                    children: [
                      {
                        type: 'react-icon',
                        props: {
                          className: `group~link-hover:text-yellow-500`,
                        },
                        component: FiGithub,
                      },
                      {
                        type: 'span',
                        content: `github.com/staffordrose`,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]

export default resume
