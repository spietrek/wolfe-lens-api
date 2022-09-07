import express from 'express'
import { CommonRoutesConfig } from '../common/common.routes.config'
import UsersController from './users.controller'
import UsersMiddleware from './users.middleware'

export class UsersRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'UsersRoutes')
  }

  configureRoutes(): express.Application {
    this.app
      .route('/users')
      .get(UsersController.listUsers.bind(UsersController))
      .post(
        UsersMiddleware.validateRequiredUserBodyFields.bind(UsersMiddleware),
        // UsersMiddleware.validateSameEmailDoesntExist.bind(UsersMiddleware),
        UsersController.createUser.bind(UsersController),
      )

    this.app.param(
      'userId',
      UsersMiddleware.extractUserId.bind(UsersMiddleware),
    )
    this.app
      .route('/users/:userId')
      .all(UsersMiddleware.validateUserExists.bind(UsersMiddleware))
      .get(UsersController.getUserById.bind(UsersController))
      .delete(UsersController.removeUserById.bind(UsersController))

    this.app.put('/users/:userId', [
      UsersMiddleware.validateRequiredUserBodyFields.bind(UsersMiddleware),
      UsersMiddleware.validateSameEmailBelongToSameUser.bind(UsersMiddleware),
      UsersController.putUser.bind(UsersController),
    ])

    this.app.patch('/users/:userId', [
      UsersMiddleware.validatePatchEmail.bind(UsersMiddleware),
      UsersController.patchUser.bind(UsersController),
    ])

    return this.app
  }
}
