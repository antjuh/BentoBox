/*
  Warnings:

  - The primary key for the `OrderProducts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `orderProductId` on the `OrderProducts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "OrderProducts" DROP CONSTRAINT "OrderProducts_pkey",
DROP COLUMN "orderProductId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "OrderProducts_pkey" PRIMARY KEY ("id");
