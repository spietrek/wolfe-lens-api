import express from 'express'
import { UserDto } from '../dtos/user.dto'
import usersService from '../services/users.service'

class UsersMiddleware {
  validateRequiredUserBodyFields(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ): void {
    const reqBody = req.body as UserDto
    if (
      reqBody !== undefined &&
      reqBody.email.length > 0 &&
      reqBody.password.length > 0
    ) {
      next()
    } else {
      res
        .status(400)
        .send({ error: 'Missing required fields email and password' })
    }
  }

  async validateSameEmailDoesntExist(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ): Promise<void> {
    const reqBody = req.body as UserDto
    const user = await usersService.itemById(reqBody.email)
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
}

export default new UsersMiddleware()
