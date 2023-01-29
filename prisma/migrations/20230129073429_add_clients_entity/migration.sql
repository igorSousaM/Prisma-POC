-- CreateTable
CREATE TABLE "clients" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50),
    "phone" VARCHAR(14),
    "address" VARCHAR(50),

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plates" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT,
    "cookingTime" INTEGER NOT NULL,
    "type" VARCHAR(50) NOT NULL,

    CONSTRAINT "plates_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "plates_name_key" ON "plates"("name");
