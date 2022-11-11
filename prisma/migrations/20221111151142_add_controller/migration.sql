-- CreateTable
CREATE TABLE "Controller" (
    "id" SERIAL NOT NULL,
    "room_id" INTEGER NOT NULL,
    "work_time_start" TIMESTAMP(3) NOT NULL,
    "work_time_end" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Controller_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Controller_room_id_key" ON "Controller"("room_id");

-- AddForeignKey
ALTER TABLE "Controller" ADD CONSTRAINT "Controller_room_id_fkey" FOREIGN KEY ("room_id") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
