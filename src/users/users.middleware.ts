import express from 'express'
import { UserDto } from './user.dto'
import usersService from './users.service'

class UsersMiddleware {
  validateRequiredUserBodyFields(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ): void {
    const reqBody = req.body as UserDto
    const email = reqBody?.email ?? ''
    const password = reqBody?.password ?? ''
    if (reqBody !== undefined && email.length > 0 && password.length > 0) {
      next()
    } else {
      res
        .status(400)
        .send({ error: 'Missing required fields email and/or password' })
    }
  }

  async validateSameEmailDoesntExist(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ): Promise<void> {
    const reqBody = req.body as UserDto
    const user = await usersService.itemByEmail(reqBody.email)
    if (user !== undefined) {
      res.status(400).send({ error: 'User email already exists' })
    }
    next()
  }

  async validateSameEmailBelongToSameUser(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ): Promise<void> {
    const reqBody = req.body as UserDto
    const user = await usersService.itemById(req.params.userId)
    if (user !== undefined && user.email === reqBody.email) {
      next()
    } else {
      res.status(400).send({ error: 'Invalid email' })
    }
  }

  async validateUserExists(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ): Promise<void> {
    const user = await usersService.itemById(req.params.userId)
    if (user !== undefined) {
      next()
    } else {
      res.status(404).send({ error: `User ${req.params.userId} not found` })
    }
  }

  async validatePatchEmail(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ): Promise<void> {
    const reqBody = req.body as UserDto
    const email = reqBody?.email ?? ''
    if (reqBody !== undefined && email.length > 0) {
      await this.validateSameEmailBelongToSameUser(req, res, next)
    } else {
      next()
    }
  }

  extractUserId(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ): void {
    const reqBody = req.body as UserDto
    reqBody.id = req.params.userId
    next()
  }
}

export default new UsersMiddleware()
