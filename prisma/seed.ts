// @ts-nocheck

import { PrismaClient } from '@prisma/client'
import {
  companys,
  colors,
  sizes,
  categories,
  products,
  communityImages,
  headerLinks,
  heroItems,
  footerItems,
} from './data'

const prisma = new PrismaClient()

const load = async () => {
  try {
    const companyInserts = []
    for (const data of companys) {
      companyInserts.push(prisma.company.create({ data }))
    }
    await prisma.$transaction(companyInserts)
    console.log('Added company data')

    // const colorInserts = []
    // for (const data of colors) {
    //   colorInserts.push(prisma.color.create({ data }))
    // }
    // await prisma.$transaction(colorInserts)
    // console.log('Added color data')

    // const sizeInserts = []
    // for (const data of sizes) {
    //   sizeInserts.push(prisma.size.create({ data }))
    // }
    // await prisma.$transaction(sizeInserts)
    // console.log('Added size data')

    // const categoryInserts = []
    // for (const data of categories) {
    //   categoryInserts.push(prisma.category.create({ data }))
    // }
    // await prisma.$transaction(categoryInserts)
    // console.log('Added category data')

    const productInserts = []
    for (const data of products) {
      productInserts.push(prisma.product.create({ data }))
    }
    await prisma.$transaction(productInserts)
    console.log('Added product data')

    const communityInserts = []
    for (const data of communityImages) {
      communityInserts.push(prisma.community.create({ data }))
    }
    await prisma.$transaction(communityInserts)
    console.log('Added community data')

    const headerInserts = []
    for (const data of headerLinks) {
      headerInserts.push(prisma.header.create({ data }))
    }
    await prisma.$transaction(headerInserts)
    console.log('Added header data')

    const heroInserts = []
    for (const data of heroItems) {
      heroInserts.push(prisma.hero.create({ data }))
    }
    await prisma.$transaction(heroInserts)
    console.log('Added hero data')

    const footerInserts = []
    for (const data of footerItems) {
      footerInserts.push(prisma.footer.create({ data }))
    }
    await prisma.$transaction(footerInserts)
    console.log('Added footer data')
  } catch (e) {
    console.error(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

load()
