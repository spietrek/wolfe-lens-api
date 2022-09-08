import express from 'express'
import CompanysService from '../services/companys.service'

class CompanysController {
  async getActiveCompany(
    _req: express.Request,
    res: express.Response,
  ): Promise<void> {
    const company = await CompanysService.getActiveCompany()
    res.status(200).send(company)
  }
}

export default new CompanysController()
