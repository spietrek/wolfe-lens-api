import prisma from '../common/prisma.config'
import { Hero } from '../models/hero'

class HomeHeroService {
  async getActiveHero(): Promise<Hero | null | never> {
    const [hero] = await prisma.hero.findMany({
      where: {
        active: true,
      },
    })

    return hero ?? null
  }
}

export default new HomeHeroService()
