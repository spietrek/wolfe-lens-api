import express from 'express'
import HomeHeroService from '../services/homeHero.service'

class HomeHeroController {
  async getActiveHero(
    _req: express.Request,
    res: express.Response,
  ): Promise<void> {
    const hero = await HomeHeroService.getActiveHero()
    res.status(200).send(hero)
  }
}

export default new HomeHeroController()
