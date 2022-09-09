import prisma from '../common/prisma.config'
import { Product } from '../models/product'

class ProductsService {
  async getProducts(): Promise<Product[] | never> {
    const products = await prisma.product.findMany({
      include: {
        colors: true,
        sizes: true,
        category: true,
      },
    })

    return products
  }

  async getProductById(id: string): Promise<Product | null | never> {
    const [product] = await prisma.product.findMany({
      where: {
        id: Number(id),
      },
      include: {
        colors: true,
        sizes: true,
      },
    })

    return product ?? null
  }
}

export default new ProductsService()
