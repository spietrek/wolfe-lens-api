import argon2 from 'argon2'
import express from 'express'
import { PutUserDto } from '../dtos/put.user.dto'
import { UserDto } from '../dtos/user.dto'
import usersService from '../services/users.service'

class UsersController {
  async list(req: express.Request, res: express.Response): Promise<void> {
    const users = await usersService.list()
    res.status(200).send(users)
  }

  async getById(req: express.Request, res: express.Response): Promise<void> {
    const user = await usersService.itemById(req.params.userId)
    res.status(200).send(user)
  }

  async getByEmail(req: express.Request, res: express.Response): Promise<void> {
    const user = await usersService.itemByEmail(req.params.email)
    res.status(200).send(user)
  }

  async create(req: express.Request, res: express.Response): Promise<void> {
    const reqBody = req.body as UserDto
    const hashPassword = await argon2.hash(reqBody.password)
    const body: UserDto = {
      ...reqBody,
      password: hashPassword,
    }
    const id = await usersService.create(body)
    res.status(201).send({ id })
  }

  async put(req: express.Request, res: express.Response): Promise<void> {
    const reqBody = req.body as PutUserDto
    const hashPassword = await argon2.hash(reqBody.password)
    const body: PutUserDto = {
      ...reqBody,
      password: hashPassword,
    }
    await usersService.updateById(req.params.userId, body)
    res.status(204).send()
  }

  async patch(req: express.Request, res: express.Response): Promise<void> {
    const reqBody = req.body as PutUserDto
    const hashPassword = await argon2.hash(reqBody.password)
    const body: PutUserDto = {
      ...reqBody,
      password: hashPassword,
    }
    await usersService.patchById(req.params.userId, body)
    res.status(204).send()
  }

  async removeById(req: express.Request, res: express.Response): Promise<void> {
    await usersService.deleteById(req.params.userId)
    res.status(204).send()
  }
}

export default new UsersController()
