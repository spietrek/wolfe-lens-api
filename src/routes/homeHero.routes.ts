import express from 'express'
import { CommonRoutesConfig } from '../common/common.routes.config'
import HomeHeroController from '../controllers/homeHero.controller'
import HomeHeroMiddleware from '../middleware/homeHero.middleware'

export class HomeHeroRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'HomeHeroRoutes')
  }

  configureRoutes(): express.Application {
    this.app
      .route('/api/v1/activeHomeHero')
      .all(HomeHeroMiddleware.validateActiveHeroExists.bind(HomeHeroMiddleware))
      .get(HomeHeroController.getActiveHero.bind(HomeHeroController))

    return this.app
  }
}
