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
        content: `Frontend web developer with 4+ years of experience designing and
        building web applications. I am self-taught and worked as the
        sole designer and developer of multiple user-facing React
        applications.`,
      },
      {
        type: 'p',
        content: `Working for Leisure Time Inc. in various capacities since 2014
        has allowed me to explore my interests and find what I want to
        do with my career. I'm seeking to join a frontend team where I
        can make an impact and advance my skills as a developer.`,
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
          className: 'flex flex-col gap-8 list-square',
        },
        children: [
          {
            type: 'ResumeItem',
            children: [
              {
                type: 'ResumeItemHeading',
                props: {
                  title: `Web Developer`,
                  subtitle: `Leisure Time Inc. - Idaho Falls, ID  (remote from SLC, UT)`,
                  timespan: `Apr 2018 - Feb 2022`,
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
                    content: `Worked as sole designer and developer of hot tub/hearth
                    product configurator, customer portal, employee dashboard,
                    headless Shopify storefront, public website, and internal
                    component library. Interfaced with ownership and
                    co-workers to ensure the products met desired outcomes.`,
                  },
                  {
                    type: 'ul',
                    props: {
                      className: 'list-square list-inside',
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
                              className: `group~link inline ${css`
                                vertical-align: -2px;
                              `}`,
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
                              className: `group~link inline ${css`
                                vertical-align: -2px;
                              `}`,
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
                              className: `group~link inline ${css`
                                vertical-align: -2px;
                              `}`,
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
                            content: `Migrated WordPress site to Next.js + Prismic `,
                          },
                          {
                            type: 'a',
                            props: {
                              className: `group~link inline ${css`
                                vertical-align: -2px;
                              `}`,
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
                        content: `Built inbound/outbound email service using Cloud Run + Postmark`,
                      },
                      {
                        type: 'li',
                        content: `Built shared component library to unify design language of websites`,
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
                      className: 'list-square list-inside',
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
                              className: 'ml-6 list-square',
                            },
                            children: [
                              {
                                type: 'li',
                                content: `Montana Fly Fishing Guides - Livingston, MT`,
                              },
                              {
                                type: 'li',
                                content: `Fly Fish Rockport - Rockport, TX`,
                              },
                              {
                                type: 'li',
                                content: `Alpine Fitness - Alpine, UT`,
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: 'li',
                        content: `Filmed & edited local TV commercial for Leisure Time Inc.`,
                      },
                      {
                        type: 'li',
                        content: `Filmed & edited weddings in Utah & Texas`,
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
                    content: `Worked for a few local businesses in Idaho, Montana, and
                    Texas. More than 60% of my billable hours were for Leisure
                    Time Inc.`,
                  },
                  {
                    type: 'ul',
                    props: {
                      className: 'list-square list-inside',
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
                  subtitle: `High 5 Promotions - Austin, TX (remote from Provo, UT)`,
                  timespan: `May 2013 - Apr 2014`,
                },
              },
              {
                type: 'ResumeItemContent',
                children: [
                  {
                    type: 'ul',
                    props: {
                      className: 'list-square list-inside',
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
                  subtitle: `High 5 Promotions - Austin, TX (remote from San Marcos, TX)`,
                  timespan: `Oct 2012 - May 2013`,
                },
              },
              {
                type: 'ResumeItemContent',
                children: [
                  {
                    type: 'ul',
                    props: {
                      className: 'list-square list-inside',
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
                      className: 'list-square list-inside',
                    },
                    children: [
                      { type: 'li', content: `Graduated May 2013` },
                      { type: 'li', content: `Texas State GPA: 3.92` },
                      {
                        type: 'li',
                        content: `American Marketing Association National Case Competition Team (2nd place)`,
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
                  title: `Austin Community College`,
                  timespan: `Fall 2010 - Spring 2011`,
                },
              },
            ],
          },
          {
            type: 'ResumeItem',
            children: [
              {
                type: 'ResumeItemHeading',
                props: {
                  title: `Weatherford College`,
                  timespan: `Fall 2007, Spring 2010`,
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    animationDelay: 300,
    children: [
      {
        type: 'ResumeItemContent',
        children: [
          {
            type: 'a',
            props: {
              className: `group`,
              href: `tel:18176942015`,
            },
            children: [
              {
                type: 'react-icon',
                props: {
                  className: `group-hover:text-yellow-500`,
                },
                component: BiPhone,
              },
              {
                type: 'span',
                content: `(817) 694-2015`,
              },
            ],
          },
          {
            type: 'a',
            props: {
              className: `group`,
              href: `mailto:hello@staffordrose.com`,
            },
            children: [
              {
                type: 'react-icon',
                props: {
                  className: `group-hover:text-yellow-500`,
                },
                component: BiEnvelope,
              },
              {
                type: 'span',
                content: `hello@staffordrose.com`,
              },
            ],
          },
          {
            type: 'span',
            props: {
              className: `flex gap-1 items-center`,
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
          {
            type: 'a',
            props: {
              className: `group`,
              href: `https://github.com/staffordrose`,
              openInNew: true,
            },
            children: [
              {
                type: 'react-icon',
                props: {
                  className: `group-hover:text-yellow-500`,
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
  {
    id: 'skills',
    title: 'Skills',
    animationDelay: 450,
    children: [
      {
        type: 'ul',
        props: {
          className: 'list-square list-inside',
        },
        children: [
          { type: 'li', content: `Teamwork` },
          { type: 'li', content: `Self-management` },
          { type: 'li', content: `Communication skills` },
          { type: 'li', content: `Problem solving` },
          { type: 'li', content: `Attention to detail` },
          { type: 'li', content: `Strategic planning` },
        ],
      },
    ],
  },
]

export default resume
