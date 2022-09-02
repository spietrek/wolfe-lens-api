import shortid from 'shortid'
import logger from '../common/logging.config'
import { UserDto } from '../dtos/user.dto'
import { timeout } from '../utils/timeout'

class UsersDao {
  private readonly users: UserDto[] = []

  constructor() {
    logger.info('Created new instance of UsersDao')
  }

  async addUser(user: UserDto): Promise<string> {
    await timeout(1000)
    user.id = shortid.generate()
    this.users.push(user)
    return user.id
  }

  async getUsers(): Promise<UserDto[]> {
    await timeout(1000)
    return this.users
  }

  async getUserById(id: string): Promise<UserDto> {
    await timeout(1000)
    const user = this.users.find(u => u.id === id)
    if (user === undefined) {
      throw new Error(`User with id ${id} not found`)
    }
    return user
  }

  async putUserById(id: string, user: UserDto): Promise<void> {
    await timeout(1000)
    const index = this.users.findIndex(u => u.id === id)
    if (index === -1) {
      throw new Error(`User with id ${id} not found`)
    }
    this.users.splice(index, 1, user)
  }

  async patchUserById(id: string, user: UserDto): Promise<void> {
    await timeout(1000)
    const index = this.users.findIndex(u => u.id === id)
    if (index === -1) {
      throw new Error(`User with id ${id} not found`)
    }
    const existingUser = this.users[index]
    Object.assign(existingUser, user)
  }
}

export default new UsersDao()
