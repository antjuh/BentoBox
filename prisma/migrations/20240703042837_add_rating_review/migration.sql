/*
  Warnings:

  - You are about to drop the column `details` on the `Reviews` table. All the data in the column will be lost.
  - Added the required column `content` to the `Reviews` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `Reviews` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reviews" DROP COLUMN "details",
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "rating" INTEGER NOT NULL;
