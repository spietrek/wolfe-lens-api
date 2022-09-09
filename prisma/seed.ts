// @ts-nocheck

import { PrismaClient } from '@prisma/client'
import { companys, colors, sizes, products } from './data'

const prisma = new PrismaClient()

const load = async () => {
  try {
    const companyInserts = []
    for (const data of companys) {
      companyInserts.push(prisma.company.create({ data }))
    }
    await prisma.$transaction(companyInserts)
    console.log('Added company data')

    const colorInserts = []
    for (const data of colors) {
      colorInserts.push(prisma.color.create({ data }))
    }
    await prisma.$transaction(colorInserts)
    console.log('Added color data')

    const sizeInserts = []
    for (const data of sizes) {
      sizeInserts.push(prisma.size.create({ data }))
    }
    await prisma.$transaction(sizeInserts)
    console.log('Added size data')

    const productInserts = []
    for (const data of products) {
      productInserts.push(prisma.product.create({ data }))
    }
    await prisma.$transaction(productInserts)
    console.log('Added product data')
  } catch (e) {
    console.error(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

load()
