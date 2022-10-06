import { Project } from '@/common/types'

export const nbaReplay: Project = {
  id: 'nba-replay',
  url: 'https://nbareplay.staffordrose.com/2021',
  githubUrl: 'https://github.com/staffordrose/nba-replay',
  image: { src: '/images/projects/nba-replay.png', alt: 'NBA Replay' },
  title: 'NBA Replay',
  description: [
    {
      type: 'p',
      content: `NBA Replay is a play-by-play game recap tool. I wanted to make a project that would allow me to use what I had been learning in Three.js. With the NBA Playoffs happening at the time, I decided to make a 3D court visualization that could be played back at multiple speeds or scrubbed through with a slider. Each game of the 2021-2022 season has a court visualization of made/missed shots along with an ascending list of game actions.`,
    },
    { type: 'h3', content: `Getting the Data` },
    {
      type: 'p',
      content: `The most challenging part of the project was working with the data. The NBA doesn't offer a public API, and the endpoint for the current season's schedule is a JSON file with all 1000+ games.`,
    },
    {
      type: 'p',
      content: `Initially, I attempted to store the 2021 season schedule and play-by-play data in my project's public folder. This didn't work because Vercel has a 50MB compressed file size limit for serverless function invocations (it's an AWS limit). My compressed public folder was a few megabytes over the limit for a single season.`,
    },
    {
      type: 'p',
      content: `The solution was to keep the schedule and basic game data in the public folder, separated into the preseason, weeks of the regular season, and playoff rounds; then, use the unofficial NBA API to get play-by-play data on request. This reduced the public folder size to just a few megabytes, while preventing users from having to download the entire season when they first view the schedule.`,
    },
    {
      type: 'h3',
      content: `Modeling the Basketball Hoops`,
    },
    {
      type: 'p',
      content: `I couldn't find any low poly count basketball hoop models, so I made my own with Blender. Prior to this project, my only experience with 3D modeling software was making a rudimentary campervan layout in SketchUp about a decade ago. Knowing the model would take up very few pixels on the screen and with the help of a few YouTube tutorials, I was able to model a basic basketball hoop that was only 79KB in size.`,
    },
  ],
  technologies: ['typescript', 'emotion', 'zag-js', 'three-js'],
}
