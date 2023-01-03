import type { FC } from 'react'
import { css, keyframes, tw } from 'twind'
import type { CSSValue } from 'twind'

const technologiesKeyframes = keyframes`
  0% {
    transform: translate(-50%, 0);
  }
  100% {
    transform: translate(-50%, -600px);
  }
`

export const Technologies: FC = () => {
  return (
    <div
      className={`
        relative z-10 overflow-hidden
        h-full w-full
        bg-gradient-to-br from-(navy-100 dark:navy-900) to-(navy-50 dark:navy-800)
        after:(bg-(svg-navy-100 dark:svg-navy-800))
        ${css`
          &::after {
            content: '';
            position: absolute;
            z-index: -10;
            left: 0;
            top: 0;
            display: block;
            height: 100%;
            width: 100%;
            background-size: 7.5px 7.5px, 100% 100%;
            background-position: calc(50% - 1.875px) 0, 0 0;
          }

          &::before {
            content: '';
            position: absolute;
            z-index: 10;
            left: 50%;
            top: 0;
            display: block;
            height: 1800px;
            width: 100%;
            background-color: transparent;
            background-image: url('/images/home/technologies.svg'),
              url('/images/home/technologies.svg');
            background-repeat: repeat-y;
            background-size: 630px 600px;
            background-position: calc(50% - 375px), calc(50% + 375px) 0;
            transform: translateX(-50%);

            animation-duration: 5s;
            animation-timing-function: steps(10);
            animation-delay: 0s;
            animation-iteration-count: infinite;
            animation-direction: normal;
            animation-fill-mode: none;
            animation-play-state: running;
            animation-name: ${technologiesKeyframes};

            @media (prefers-reduced-motion) {
              animation-play-state: paused;
            }

            @media screen(sm) {
              background-position: calc(50% - 450px), calc(50% + 450px) 0;
            }

            @media screen(lg) {
              background-position: calc(50% - 600px), calc(50% + 600px) 0;
            }

            @media screen(2xl) {
              background-position: calc(50% - 750px), calc(50% + 750px) 0;
            }
          }
        `}
      `}
    >
      <div
        className={`
          relative z-10
          flex flex-col gap-10 justify-center items-center
          min-h-[calc(100vh_-_64px)] w-full max-w-7xl mx-auto px-4 py-16
        `}
      >
        <h2
          className={`
            ${css`
              text-shadow: 2px 0 3px ${tw.theme('colors.navy.100') as CSSValue},
                0 2px 3px ${tw.theme('colors.navy.100') as CSSValue},
                -2px 0 3px ${tw.theme('colors.navy.100') as CSSValue},
                0 -2px 3px ${tw.theme('colors.navy.100') as CSSValue};
            `}
            dark:${css`
              text-shadow: 2px 0 3px ${tw.theme('colors.navy.800') as CSSValue},
                0 2px 3px ${tw.theme('colors.navy.800') as CSSValue},
                -2px 0 3px ${tw.theme('colors.navy.800') as CSSValue},
                0 -2px 3px ${tw.theme('colors.navy.800') as CSSValue};
            `}
          `}
        >
          Technologies I Use
        </h2>

        <div
          className={`
            h-auto w-full max-w-[240px] p-0.5 rounded
            bg-gradient-to-br from-yellow-500/75 via-orange-600/75 to-red-500/75
          `}
        >
          <div className="h-auto w-full p-4 rounded-sm bg-(white/75 dark:navy-900/75)">
            <ul className="text-center">
              {[
                'HTML',
                'CSS',
                'JavaScript',
                'TypeScript',
                'React',
                'Next.js',
                'Gatsby',
                'Redux',
                'Zustand',
                'Styled Components',
                'Emotion',
                'Tailwind CSS',
                'Framer Motion',
                'GSAP',
                'Three.js',
                'Firebase',
                'Supabase',
                'Prismic',
              ].map((technology: string) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
