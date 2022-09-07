/* eslint-disable @typescript-eslint/return-await */
import { ICrud } from '../types/crud.interface'
import { UserDto } from './user.dto'
import UsersDao from './users.dao'

class UsersService implements ICrud<UserDto> {
  async list(): Promise<UserDto[] | never> {
    return await UsersDao.getUsers()
  }

  async itemById(id: string): Promise<UserDto | never> {
    return await UsersDao.getUserById(id)
  }

  async itemByEmail(email: string): Promise<UserDto | never> {
    return await UsersDao.getUserByEmail(email)
  }

  async create(resource: UserDto): Promise<string | never> {
    return await UsersDao.addUser(resource)
  }

  async updateById(id: string, resource: UserDto): Promise<void | never> {
    return await UsersDao.putUserById(id, resource)
  }

  async patchById(id: string, resource: UserDto): Promise<void | never> {
    return await UsersDao.patchUserById(id, resource)
  }

  async deleteById(id: string): Promise<void | never> {
    return await UsersDao.removeUserById(id)
  }
}

export default new UsersService()
