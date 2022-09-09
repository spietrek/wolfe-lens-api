import express from 'express'
import CompanyService from '../services/company.service'

class CompanyController {
  async getActiveCompany(
    _req: express.Request,
    res: express.Response,
  ): Promise<void> {
    const company = await CompanyService.getActiveCompany()
    res.status(200).send(company)
  }
}

export default new CompanyController()
