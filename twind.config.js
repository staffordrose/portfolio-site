import { defineConfig } from 'twind'
import presetAutoprefix from '@twind/preset-autoprefix'
import presetTailwind from '@twind/preset-tailwind'

export default defineConfig({
  presets: [presetAutoprefix(), presetTailwind()],
  preflight: {
    '@import': `url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,700;1,500&display=swap')`,
  },
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'svg-yellow-100': "url('/images/home/bg-yellow-100.svg')",
        'svg-yellow-800': "url('/images/home/bg-yellow-800.svg')",
        'svg-navy-100': "url('/images/home/bg-navy-100.svg')",
        'svg-navy-800': "url('/images/home/bg-navy-800.svg')",
        'gradient-threejs-50':
          'radial-gradient(50% 65%, rgba(245, 249, 249, 0) 50%, rgba(245, 249, 249, 1) 100%)',
        'gradient-threejs-900':
          'radial-gradient(50% 65%, rgba(18, 29, 51, 0) 50%, rgba(18, 29, 51, 1) 100%)',
      },
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
      listStyleType: {
        square: 'square',
      },
    },
  },
})
