/* eslint-disable @typescript-eslint/return-await */
import { UsersDao } from '../daos/users.dao'
import { UserDto } from '../dtos/user.dto'
import { ICrud } from '../types/crud.interface'

class UsersService implements ICrud<UserDto> {
  public list: () => Promise<UserDto[]> = async () => {
    return await UsersDao.prototype.getUsers()
  }

  public itemById: (id: string) => Promise<UserDto | never> = async (
    id: string,
  ) => {
    return await UsersDao.prototype.getUserById(id)
  }

  public itemByEmail: (email: string) => Promise<UserDto | never> = async (
    email: string,
  ) => {
    return await UsersDao.prototype.getUserByEmail(email)
  }

  public create: (resource: UserDto) => Promise<string | never> = async (
    user: UserDto,
  ) => {
    return await UsersDao.prototype.addUser(user)
  }

  public updateById: (id: string, resource: UserDto) => Promise<void | never> =
    async (id: string, user: UserDto) => {
      return await UsersDao.prototype.putUserById(id, user)
    }

  public patchById: (id: string, resource: UserDto) => Promise<void | never> =
    async (id: string, user: UserDto) => {
      return await UsersDao.prototype.patchUserById(id, user)
    }

  public deleteById: (id: string) => Promise<void | never> = async (
    id: string,
  ) => {
    return await UsersDao.prototype.removeUserById(id)
  }
}

export default new UsersService()
