/*
  Warnings:

  - You are about to drop the column `work_time_end` on the `Controller` table. All the data in the column will be lost.
  - You are about to drop the column `work_time_start` on the `Controller` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Controller" DROP COLUMN "work_time_end",
DROP COLUMN "work_time_start";
