/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'scale-in': '800ms ease forwards scale-in',
        'slide-up': '800ms ease forwards slide-up',
        technologies:
          '5s steps(10, jump-start) infinite normal none running technologies',
      },
      backgroundImage: ({ theme }) => ({
        'svg-yellow-100': `url('/images/home/bg-yellow-100.svg')`,
        'svg-yellow-800': `url('/images/home/bg-yellow-800.svg')`,
        'svg-navy-100': `url('/images/home/bg-navy-100.svg')`,
        'svg-navy-800': `url('/images/home/bg-navy-800.svg')`,
        'svg-technologies': `url('/images/home/technologies.svg'), url('/images/home/technologies.svg')`,
        'gradient-yellow-orange-red-500': `linear-gradient(135deg, ${theme(
          'colors.red.500',
        )} 0%, ${theme('colors.orange.500')} 20%, ${theme(
          'colors.yellow.500',
        )} 45%, ${theme('colors.yellow.500')} 55%, ${theme(
          'colors.orange.500',
        )} 80%, ${theme('colors.red.500')} 100%)`,
      }),
      colors: {
        navy: {
          50: '#f5f9f9',
          100: '#e1f1f9',
          200: '#bee0f2',
          300: '#8cc1de',
          400: '#559cc5',
          500: '#3f7aab',
          600: '#346090',
          700: '#2a4870',
          800: '#1e304e',
          900: '#121d33',
        },
      },
      fontFamily: {
        'ibm-plex-mono': ['"IBM Plex Mono"', 'monospace'],
        'helvetica-neue': ['"Helvetica Neue"', 'ui-sans-serif', 'sans-serif'],
      },
      gridTemplateAreas: {
        'resume-item-heading': ['title .', 'subtitle .', 'info .'],
        'resume-item-heading-md': ['title info', 'subtitle .'],
      },
      keyframes: ({ theme }) => ({
        'scale-in': {
          '0%': {
            opacity: 0,
            transform: 'scale(0)',
          },
          '50%': {
            opacity: 1,
            transform: 'scale(1.1)',
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
        'slide-up': {
          '0%': {
            opacity: 0,
            transform: `translateY(${theme('spacing.8')})`,
          },
          '75%': {
            opacity: 1,
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        technologies: {
          '0%': {
            transform: 'translate(-50%, 0)',
          },
          '100%': {
            transform: 'translate(-50%, -600px)',
          },
        },
      }),
      listStyleType: {
        square: 'square',
      },
      minHeight: ({ theme }) => ({
        'screen-header': `calc(100vh - ${theme('spacing.16')})`,
      }),
    },
  },
  plugins: [require('@savvywombat/tailwindcss-grid-areas')],
}
