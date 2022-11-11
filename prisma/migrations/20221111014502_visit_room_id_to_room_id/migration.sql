/*
  Warnings:

  - You are about to drop the column `roomId` on the `Visit` table. All the data in the column will be lost.
  - Added the required column `room_id` to the `Visit` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Visit" DROP CONSTRAINT "Visit_roomId_fkey";

-- AlterTable
ALTER TABLE "Visit" DROP COLUMN "roomId",
ADD COLUMN     "room_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Visit" ADD CONSTRAINT "Visit_room_id_fkey" FOREIGN KEY ("room_id") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
