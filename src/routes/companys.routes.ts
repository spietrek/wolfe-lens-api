import express from 'express'
import { CommonRoutesConfig } from '../common/common.routes.config'
import CompanysController from '../controllers/companys.controller'
import CompanysMiddleware from '../middleware/companys.middleware'

export class CompanysRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'CompanysRoutes')
  }

  configureRoutes(): express.Application {
    this.app
      .route('/api/v1/activeCompany')
      .all(
        CompanysMiddleware.validateActiveCompanyExists.bind(CompanysMiddleware),
      )
      .get(CompanysController.getActiveCompany.bind(CompanysController))

    return this.app
  }
}
