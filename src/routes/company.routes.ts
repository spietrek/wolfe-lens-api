import express from 'express'
import { CommonRoutesConfig } from '../common/common.routes.config'
import CompanyController from '../controllers/company.controller'
import CompanyMiddleware from '../middleware/company.middleware'

export class CompanyRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'CompanyRoutes')
  }

  configureRoutes(): express.Application {
    this.app
      .route('/api/v1/activeCompany')
      .all(
        CompanyMiddleware.validateActiveCompanyExists.bind(CompanyMiddleware),
      )
      .get(CompanyController.getActiveCompany.bind(CompanyController))

    return this.app
  }
}
