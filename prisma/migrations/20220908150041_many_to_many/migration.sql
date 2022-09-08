-- CreateTable
CREATE TABLE "Hello" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "_HelloToProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_HelloToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Hello" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_HelloToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_HelloToProduct_AB_unique" ON "_HelloToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_HelloToProduct_B_index" ON "_HelloToProduct"("B");
