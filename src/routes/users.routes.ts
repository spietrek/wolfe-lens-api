import express from 'express'
import { CommonRoutesConfig } from '../common/common.routes.config'

export class UsersRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'UsersRoutes')
  }

  configureRoutes(): express.Application {
    // (we'll add the actual route configuration here next)
    this.app
      .route('/users')
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send('List of users')
      })
      .post((req: express.Request, res: express.Response) => {
        res.status(200).send('Create new user')
      })

    this.app
      .route('/users/:id')
      .all(
        (
          req: express.Request,
          res: express.Response,
          next: express.NextFunction,
        ) => {
          // this middleware function runs before any request to /users/:id
          // but it doesn't accomplish anything just yet---
          // it simply passes control to the next applicable function below using next()
          next()
        },
      )
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send(`GET requested for id ${req.params.id}`)
      })
      .put((req: express.Request, res: express.Response) => {
        res.status(200).send(`PUT requested for id ${req.params.id}`)
      })
      .patch((req: express.Request, res: express.Response) => {
        res.status(200).send(`PATCH requested for id ${req.params.id}`)
      })
      .delete((req: express.Request, res: express.Response) => {
        res.status(200).send(`DELETE requested for id ${req.params.id}`)
      })

    return this.app
  }
}
