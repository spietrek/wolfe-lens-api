import prisma from '../common/prisma.config'
import { Community } from '../models/community'

class CommunityService {
  async getItems(): Promise<Community[] | never> {
    const items = await prisma.community.findMany({
      orderBy: [
        {
          sortOrder: 'asc',
        },
      ],
    })

    return items
  }
}

export default new CommunityService()
