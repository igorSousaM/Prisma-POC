-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "totalPrice" INTEGER NOT NULL,
    "totalCookingTime" INTEGER NOT NULL,
    "clientId" INTEGER NOT NULL,
    "plateId" INTEGER NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_plateId_fkey" FOREIGN KEY ("plateId") REFERENCES "plates"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
