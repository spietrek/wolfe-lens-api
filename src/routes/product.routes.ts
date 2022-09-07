import express from 'express'
import { CommonRoutesConfig } from '../common/common.routes.config'
import ProductsController from '../controllers/products.controller'
import ProductsMiddleware from '../middleware/products.middleware'

export class ProductsRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'ProductsRoutes')
  }

  configureRoutes(): express.Application {
    this.app
      .route('/products')
      .get(ProductsController.getProducts.bind(ProductsController))

    this.app.param(
      'productId',
      ProductsMiddleware.extractProductId.bind(ProductsMiddleware),
    )
    this.app
      .route('/products/:productId')
      .all(ProductsMiddleware.validateProductExists.bind(ProductsMiddleware))
      .get(ProductsController.getProductById.bind(ProductsController))

    return this.app
  }
}
