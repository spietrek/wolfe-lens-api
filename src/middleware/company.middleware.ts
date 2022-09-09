import express from 'express'
import CompanyService from '../services/company.service'

class CompanyMiddleware {
  async validateActiveCompanyExists(
    _req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ): Promise<void> {
    const company = await CompanyService.getActiveCompany()
    if (company !== null) {
      next()
    } else {
      res.status(404).send({ error: 'No active company was found' })
    }
  }
}

export default new CompanyMiddleware()
