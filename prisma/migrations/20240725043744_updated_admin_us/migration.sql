/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `Administrators` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Administrators_username_key" ON "Administrators"("username");
