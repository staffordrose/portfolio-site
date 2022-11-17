import { injectGlobal } from 'twind'

const injectGlobalStyles = () => injectGlobal`
  body {
    @apply min-w-[360px] bg-(navy-50 dark:navy-900);
  }
  body, p {
    @apply font-helvetica-neue;
  }
  h1, h2, h3, h4, h5, h6 {
    @apply font-ibm-plex-mono text-(navy-800 dark:navy-100);
  }
  h1 {
    @apply text-(4xl md:5xl);
  }
  h2 {
    @apply text-(3xl md:4xl);
  }
  h3 {
    @apply text-(2xl md:3xl);
  }
  h4 {
    @apply text-xl;
  }
  h5 {
    @apply text-lg;
  }
  h6 {
    @apply text-md;
  }
  b, strong {
    @apply font-medium;
  }
  code {
    @apply px-1 rounded-sm font-ibm-plex-mono text-sm text-navy-700 bg-navy-200 dark:(text-navy-300 bg-navy-700);
  }
`

export default injectGlobalStyles
