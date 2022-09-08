import express from 'express'
import ProductsService from '../services/products.service'

class ProductsController {
  async getProducts(
    _req: express.Request,
    res: express.Response,
  ): Promise<void> {
    const products = await ProductsService.getProducts()
    res.status(200).send(products)
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
