import express from 'express'
import CompanysService from '../services/companys.service'

class ProductsMiddleware {
  async validateActiveCompanyExists(
    _req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ): Promise<void> {
    const company = await CompanysService.getActiveCompany()
    if (company !== null) {
      next()
    } else {
      res.status(404).send({ error: 'No active company was found' })
    }
  }
}

export default new ProductsMiddleware()
