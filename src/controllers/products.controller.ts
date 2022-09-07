import express from 'express'
import ProductsService from '../services/products.service'

class ProductsController {
  async getProducts(
    _req: express.Request,
    res: express.Response,
  ): Promise<void> {
    const users = await ProductsService.getProducts()
    res.status(200).send(users)
  }

  async getProductById(
    req: express.Request,
    res: express.Response,
  ): Promise<void> {
    const product = await ProductsService.getProductById(req.params.productId)
    res.status(200).send(product)
  }
}

export default new ProductsController()
