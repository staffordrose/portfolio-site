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
                  info: `Jan 2018 - Feb 2022`,
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
                  info: `May 2015 - Dec 2017`,
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
                            content: `Filmed & edited promotional videos for local businesses, including:`,
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
                  info: `Apr 2014 - Dec 2017`,
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
                  info: `May 2013 - Apr 2014`,
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
                  info: `Oct 2012 - May 2013`,
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
                  info: `Fall 2011 - Spring 2013`,
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
    id: 'recommendations',
    title: 'References',
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
                  title: `Taylor Wright`,
                  subtitle: `Owner at Leisure Time Inc.`,
                  info: `Professional Recommendation`,
                },
              },
              {
                type: 'ResumeItemContent',
                children: [
                  {
                    type: 'p',
                    content: `I've had the pleasure of working with Stafford for over 10 years now. He is one of the main reasons behind Leisure Times growth and success the past few years.`,
                  },
                  {
                    type: 'p',
                    content: `With Stafford's help we were able to bring Leisure Time out of old age and give it a complete overhaul.`,
                  },
                  {
                    type: 'p',
                    content: `This included a complete rebranding. And all the work that goes along with it; Logo, brand guide, website, vehicle wraps, point of sale materials, online shop and so on.`,
                  },
                  {
                    type: 'p',
                    content: `Stafford was able to handle multiple positions within the company and his work was always excellent and on time. This included graphic design, video creation and editing, he was at one point our entire marketing department.`,
                  },
                  {
                    type: 'p',
                    content: `Each time a new skill set was required, Stafford had no trouble becoming proficient at it.`,
                  },
                  {
                    type: 'p',
                    content: `This was recently needed when we decided to build a custom program and website for the business. Over a short period of time Stafford was able to learn new programming languages and build out a platform to meet Leisure Times needs.`,
                  },
                  {
                    type: 'p',
                    content: `During this process Stafford did a phenomenal job outlining the projects needs, timelines, and constraints. Stafford did an excellent job keeping me informed on the projects progress and always provided valuable feedback.`,
                  },
                  {
                    type: 'p',
                    content: `Some of Stafford strengths would include:`,
                  },
                  {
                    type: 'ul',
                    props: {
                      className: 'pl-4 list-square list-outside',
                    },
                    children: [
                      {
                        type: 'li',
                        content: `Ability to see the big picture but keeps close watch on the small details`,
                      },
                      {
                        type: 'li',
                        content: `Manage and arrange big tasks into small workable projects`,
                      },
                      {
                        type: 'li',
                        content: `Improve upon ideas and make them better`,
                      },
                      { type: 'li', content: `Focused / driven` },
                      {
                        type: 'li',
                        content: `Able to adapt to new challenges and develop new skill sets with speed`,
                      },
                      { type: 'li', content: `Task oriented` },
                      { type: 'li', content: `Time management` },
                    ],
                  },
                  {
                    type: 'p',
                    content: `Stafford also did a great job onboarding new team members and provided excellent training.`,
                  },
                  {
                    type: 'p',
                    content: `Stafford will be a standout addition to your team.`,
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
                  title: `Michael Morgan`,
                  subtitle: `Lawyer at Kirkland & Ellis`,
                  info: `Personal Recommendation`,
                },
              },
              {
                type: 'ResumeItemContent',
                children: [
                  {
                    type: 'p',
                    content: `I have known Stafford Rose for almost 8 years now. We have been roommates multiple times; we have participated in a significant number of high-adventure activities together; and I have worked with him previously (while he was at his prior company, Leisure Time). I have had the opportunity to get to know Stafford over a long period of time and in a variety of settings. Regardless of the setting, I have repeatedly found Stafford to be smart, organized, and hardworking.`,
                  },
                  {
                    type: 'p',
                    content: `Stafford is smart. He is intellectually curious and can take complicated and unorganized information and quickly make sense of it. It is not uncommon for him to comprehend information before I do. When this happens, I usually turn to him to explain. This is because, while he can process information quickly, he knows how to explain concepts in easy-to-understand language.`,
                  },
                  {
                    type: 'p',
                    content: `Stafford is organized. He is punctual and prompt and keeps track of details—even when things get chaotic. His focus on detail and his ability to remain calm under pressure are a few reasons why I prefer to do high-adventure activities (i.e., canyoneering) with him. In planning and executing potentially life-threatening activities, I want someone who is as detail oriented and calm as Stafford is by my side.`,
                  },
                  {
                    type: 'p',
                    content: `Stafford is hardworking. As his roommate and as his coworker, I witnessed how many hours he can work without losing focus (despite a lack of supervision). His self-motivated work ethic is impressive. He doesn’t wait for others to tell him what to do. Whether it be finding ways to make a product better, to mentor a coworker, or to increase efficiencies, he adds value to whatever team he is part of.`,
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
