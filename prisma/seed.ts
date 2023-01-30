import prisma from "../src/database/database.js";

async function main() {
  await prisma.plates.create({
    data: {
      name: "filé de frango",
      price: 1199,
      description: "file de frango grelhado bem gostoso",
      cookingTime: 20,
      type: "prato principal",
    },
  });

  await prisma.clients.create({
    data: {
      name: "igor",
      phone: "9979593221",
      address: "rua de casa",
    },
  });

  await prisma.orders.create({
    data: {
      quantity: 3,
      clientId: 1,
      plateId: 1,
      totalCookingTime: 60,
      totalPrice: 3597,
    },
  });
}

main()
  .then(() => {
    console.log("registo feito com sucesso");
  })
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async()=>{
    await prisma.$disconnect();
  });
