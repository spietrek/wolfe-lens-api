import prisma from '../common/prisma.config'
import { Company } from '../models/company'

class CompanysService {
  async getActiveCompany(): Promise<Company | null | never> {
    const [company] = await prisma.company.findMany({
      where: {
        active: true,
      },
    })
    return company ?? null
  }
}

export default new CompanysService()
