/*
  Warnings:

  - You are about to drop the column `productImageAlt` on the `Product` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "recurrence" INTEGER NOT NULL,
    "discount" REAL NOT NULL,
    "productTitle" TEXT NOT NULL,
    "productDescription" TEXT NOT NULL,
    "productImage" TEXT NOT NULL,
    "heroImage1" TEXT NOT NULL,
    "heroImage2" TEXT NOT NULL,
    "heroImage3" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Product" ("createdAt", "discount", "heroImage1", "heroImage2", "heroImage3", "id", "name", "price", "productDescription", "productImage", "productTitle", "recurrence", "subtitle", "updatedAt") SELECT "createdAt", "discount", "heroImage1", "heroImage2", "heroImage3", "id", "name", "price", "productDescription", "productImage", "productTitle", "recurrence", "subtitle", "updatedAt" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
