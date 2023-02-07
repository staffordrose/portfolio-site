import { Project } from '@/common/types'

export const addressBook: Project = {
  id: 'address-book',
  // url: 'https://addressbook.staffordrose.com', // FIXME:
  url: '',
  githubUrl: 'https://github.com/staffordrose/address-book',
  image: { src: '/images/projects/address-book.png', alt: '' },
  title: 'Address Book',
  flag: 'Paused Development',
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
              content: `Development of this project is paused. Some features are unfinished or have `,
            },
            {
              type: 'emoji',
              props: {
                className: 'text-lg',
                label: 'bugs (beetle)',
              },
              content: `0x1fab2`,
            },
            {
              type: 'emoji',
              props: {
                className: 'text-lg',
                label: 'bugs (lady beetle)',
              },
              content: `0x1f41e`,
            },
            {
              type: 'emoji',
              props: {
                className: 'text-lg',
                label: 'bugs (caterpillar)',
              },
              content: `0x1f41b`,
            },
            {
              type: 'i',
              content: ` .`,
            },
          ],
        },
      ],
    },
    {
      type: 'p',
      content: `Address Book is a full-stack application for managing personal and business contacts. I developed it with Next.js in Typescript, and I used Supabase's managed database, authentication, and storage infrastructure for the backend.`,
    },
    {
      type: 'p',
      content: `Address Book supports importing and exporting contacts via the vCard standard and sharing contacts through QR codes.`,
    },
    {
      type: 'h3',
      content: `vCard Import/Export`,
    },
    {
      type: 'p',
      children: [
        {
          type: 'span',
          content: `The latest vCard specification (`,
        },
        {
          type: 'code',
          content: `v4.0`,
        },
        {
          type: 'span',
          content: `) was published over 10 years ago and was never fully adopted by major tech corporations, like Apple (`,
        },
        {
          type: 'code',
          content: `v3.0`,
        },
        {
          type: 'span',
          content: `) and Google (`,
        },
        {
          type: 'code',
          content: `v2.1`,
        },
        {
          type: 'span',
          content: `). Despite this fragmentation, I was interested in learning about the benefits and limitations of the only major contact file format I'm aware of.`,
        },
      ],
    },
    {
      type: 'p',
      children: [
        {
          type: 'span',
          content: `To parse vCards during import, I modified the script of `,
        },
        {
          type: 'a',
          props: {
            href: 'https://github.com/jasperla/node-vcard',
            openInNew: true,
          },
          content: `node-vcard`,
        },
        {
          type: 'span',
          content: `. To generate vCards for export, I reverse-engineered my modified version of the `,
        },
        {
          type: 'strong',
          content: `node-vcard`,
        },
        {
          type: 'span',
          content: ` script.`,
        },
      ],
    },
    {
      type: 'h4',
      content: `Bulk Import/Export`,
    },
    {
      type: 'p',
      content: `The vCard standard supports multiple contacts in a single VCF file, so I added the ability for users to both import and export multiple contacts at once.`,
    },
    {
      type: 'h3',
      content: `QR Code Sharing`,
    },
    {
      type: 'p',
      children: [
        {
          type: 'span',
          content: `A contact manager seemed like a solid use for QR codes, so I used `,
        },
        {
          type: 'a',
          props: {
            href: 'https://github.com/soldair/node-qrcode',
            openInNew: true,
          },
          content: `node-qrcode`,
        },
        {
          type: 'span',
          content: `, which is called via a Next.js API route.`,
        },
      ],
    },
    {
      type: 'p',
      content: `For now, the application only allows QR code sharing (export), but I plan to add an import method as well. This will require additional validation to ensure the contents of the QR code are, in fact, valid vCard fields.`,
    },
    {
      type: 'h3',
      content: `Supabase BaaS`,
    },
    {
      type: 'p',
      content: `I exclusively used Firebase for the backend of our web applications at my previous work. I learned firsthand about the challenges of using a NoSQL database with an ever-expanding number of collections, relationships, and queries - it was a constant battle to stay under Firestore's 200 composite index limit!`,
    },
    {
      type: 'p',
      content: `For this project, I knew I wanted to dive into SQL. When making the jump from Firebase, Supabase seemed like the no-brainer choice to help me gain experience with PostgreSQL, while not feeling hindered by backend challenges such as authentication and user management.`,
    },
  ],
  technologies: ['typescript', 'zustand', 'formik', 'supabase'],
}
