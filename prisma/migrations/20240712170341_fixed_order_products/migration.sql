/*
  Warnings:

  - The primary key for the `OrderProducts` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "OrderProducts" DROP CONSTRAINT "OrderProducts_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "OrderProducts_pkey" PRIMARY KEY ("id");
