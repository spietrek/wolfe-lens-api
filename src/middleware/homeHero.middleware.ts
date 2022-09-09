import express from 'express'
import HomeHeroService from '../services/homeHero.service'

class HomeHeroMiddleware {
  async validateActiveHeroExists(
    _req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ): Promise<void> {
    const hero = await HomeHeroService.getActiveHero()
    if (hero !== null) {
      next()
    } else {
      res.status(404).send({ error: 'No active home hero was found' })
    }
  }
}

export default new HomeHeroMiddleware()
