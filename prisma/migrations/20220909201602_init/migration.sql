-- CreateTable
CREATE TABLE "Company" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "recurrence" INTEGER NOT NULL,
    "discount" REAL NOT NULL,
    "productTitle" TEXT NOT NULL,
    "productDescription" TEXT NOT NULL,
    "productImage" TEXT NOT NULL,
    "productImageAltText" TEXT NOT NULL,
    "heroImage1" TEXT NOT NULL,
    "heroImage1AltText" TEXT NOT NULL,
    "heroImage2" TEXT NOT NULL,
    "heroImage2AltText" TEXT NOT NULL,
    "heroImage3" TEXT NOT NULL,
    "heroImage3AltText" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Color" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" TEXT NOT NULL,
    "hex" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Size" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Community" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sortOrder" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "altText" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Hero" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "altText" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Header" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "sortOrder" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "altText" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Footer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "sortOrder" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Link" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "sortOrder" INTEGER NOT NULL,
    "label" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "_ProductToSize" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ProductToSize_A_fkey" FOREIGN KEY ("A") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ProductToSize_B_fkey" FOREIGN KEY ("B") REFERENCES "Size" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ColorToProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ColorToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Color" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ColorToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_FooterToLink" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_FooterToLink_A_fkey" FOREIGN KEY ("A") REFERENCES "Footer" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_FooterToLink_B_fkey" FOREIGN KEY ("B") REFERENCES "Link" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToSize_AB_unique" ON "_ProductToSize"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToSize_B_index" ON "_ProductToSize"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ColorToProduct_AB_unique" ON "_ColorToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_ColorToProduct_B_index" ON "_ColorToProduct"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FooterToLink_AB_unique" ON "_FooterToLink"("A", "B");

-- CreateIndex
CREATE INDEX "_FooterToLink_B_index" ON "_FooterToLink"("B");
