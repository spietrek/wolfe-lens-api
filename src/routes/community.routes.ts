import express from 'express'
import { CommonRoutesConfig } from '../common/common.routes.config'
import CommunityController from '../controllers/community.controller'

export class CommunityRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'CommunityRoutes')
  }

  configureRoutes(): express.Application {
    this.app
      .route('/api/v1/community')
      .get(CommunityController.getItems.bind(CommunityController))

    return this.app
  }
}
