-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_HomeHero" (
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
INSERT INTO "new_HomeHero" ("altText", "createdAt", "id", "image", "label", "link", "subtitle", "title", "updatedAt") SELECT "altText", "createdAt", "id", "image", "label", "link", "subtitle", "title", "updatedAt" FROM "HomeHero";
DROP TABLE "HomeHero";
ALTER TABLE "new_HomeHero" RENAME TO "HomeHero";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
