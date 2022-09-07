import express from 'express'
import { Product } from '../models/product'
import ProductsService from '../services/products.service'

class ProductsMiddleware {
  async validateProductExists(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ): Promise<void> {
    const product = await ProductsService.getProductById(req.params.productId)
    if (product !== null) {
      next()
    } else {
      res
        .status(404)
        .send({ error: `Product ${req.params.productId} not found` })
    }
  }

  extractProductId(
    req: express.Request,
    _res: express.Response,
    next: express.NextFunction,
  ): void {
    const reqBody = req.body as Product
    reqBody.id = Number(req.params.productId)
    next()
  }
}

export default new ProductsMiddleware()
