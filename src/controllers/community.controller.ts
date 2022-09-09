import express from 'express'
import CommunityService from '../services/community.service'

class CommunityController {
  async getItems(_req: express.Request, res: express.Response): Promise<void> {
    const items = await CommunityService.getItems()
    res.status(200).send(items)
  }
}

export default new CommunityController()
