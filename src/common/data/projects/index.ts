import { Project } from '@/common/types'
import { addressBook } from './address-book'
import { connectSquares } from './connect-squares'
import { nbaReplay } from './nba-replay'
import { portfolioSite } from './portfolio-site'

export const projects: Project[] = [
  addressBook,
  nbaReplay,
  connectSquares,
  portfolioSite,
]
