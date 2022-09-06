import argon2 from 'argon2'
import express from 'express'
import { PutUserDto } from './put.user.dto'
import { UserDto } from './user.dto'
import UsersService from './users.service'

class UsersController {
  async listUsers(req: express.Request, res: express.Response): Promise<void> {
    const users = await UsersService.list()
    res.status(200).send(users)
  }

  async getUserById(
    req: express.Request,
    res: express.Response,
  ): Promise<void> {
    const user = await UsersService.itemById(req.params.userId)
    res.status(200).send(user)
  }

  async getUserByEmail(
    req: express.Request,
    res: express.Response,
  ): Promise<void> {
    const user = await UsersService.itemByEmail(req.params.email)
    res.status(200).send(user)
  }

  async createUser(req: express.Request, res: express.Response): Promise<void> {
    const reqBody = req.body as UserDto
    const hashPassword = await argon2.hash(reqBody.password)
    const body: UserDto = {
      ...reqBody,
      password: hashPassword,
    }
    const id = await UsersService.create(body)
    res.status(201).send({ id })
  }

  async putUser(req: express.Request, res: express.Response): Promise<void> {
    const reqBody = req.body as PutUserDto
    const hashPassword = await argon2.hash(reqBody.password)
    const body: PutUserDto = {
      ...reqBody,
      password: hashPassword,
    }
    await UsersService.updateById(req.params.userId, body)
    res.status(204).send()
  }

  async patchUser(req: express.Request, res: express.Response): Promise<void> {
    const reqBody = req.body as PutUserDto
    const hashPassword = await argon2.hash(reqBody.password)
    const body: PutUserDto = {
      ...reqBody,
      password: hashPassword,
    }
    await UsersService.patchById(req.params.userId, body)
    res.status(204).send()
  }

  async removeUserById(
    req: express.Request,
    res: express.Response,
  ): Promise<void> {
    await UsersService.deleteById(req.params.userId)
    res.status(204).send()
  }
}

export default new UsersController()
