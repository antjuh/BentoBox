/*
  Warnings:

  - You are about to drop the column `firstName` on the `Administrators` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Administrators` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Administrators" DROP COLUMN "firstName",
DROP COLUMN "lastName";
