/*
  Warnings:

  - You are about to drop the column `created_at` on the `Visit` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Visit" DROP COLUMN "created_at",
ADD COLUMN     "creation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
