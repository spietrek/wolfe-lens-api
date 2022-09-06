import shortid from 'shortid'
import logger from '../common/logging.config'
import { UserDto } from '../dtos/user.dto'
import { timeout } from '../utils/timeout'

const mapTo = <T, S extends T, K extends keyof T>(
  target: T,
  source: S,
  key: K,
): void => {
  target[key] = source[key]
}

const allowedPatchKeys = [
  'firstName',
  'lastName',
  'password',
  'permissionLevel',
]

export class UsersDao {
  private readonly users: UserDto[] = []

  constructor() {
    logger.info('Created new instance of UsersDao')
  }

  async addUser(user: UserDto): Promise<string | never> {
    await timeout(500)
    user.id = shortid.generate()
    this.users.push(user)
    return user.id
  }

  async getUsers(): Promise<UserDto[] | never> {
    await timeout(500)
    return this.users
  }

  async getUserById(id: string): Promise<UserDto | never> {
    await timeout(500)
    const user = this.users.find(u => u.id === id)
    if (user === undefined) {
      throw new Error(`User with id ${id} not found`)
    }
    return user
  }

  async getUserByEmail(email: string): Promise<UserDto | never> {
    await timeout(500)
    const user = this.users.find(u => u.email === email)
    if (user === undefined) {
      throw new Error(`User with email ${email} not found`)
    }
    return user
  }

  async putUserById(id: string, user: UserDto): Promise<void | never> {
    await timeout(500)
    const index = this.users.findIndex(u => u.id === id)
    if (index === -1) {
      throw new Error(`User with id ${id} not found`)
    }
    this.users.splice(index, 1, user)
  }

  async patchUserById(id: string, user: UserDto): Promise<void | never> {
    await timeout(500)
    const index = this.users.findIndex(u => u.id === id)
    if (index === -1) {
      throw new Error(`User with id ${id} not found`)
    }
    const existingUser = this.users[index]
    Object.keys(user).forEach(key => {
      if (allowedPatchKeys.includes(key)) {
        mapTo(existingUser, user, key as keyof UserDto)
      }
    })

    this.users.splice(index, 1, existingUser)
  }

  async removeUserById(id: string): Promise<void | never> {
    await timeout(500)
    const index = this.users.findIndex(u => u.id === id)
    if (index === -1) {
      throw new Error(`User with id ${id} not found`)
    }
    this.users.splice(index, 1)
  }
}

export default new UsersDao()
