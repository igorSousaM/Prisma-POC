import prisma from "../database/database.js";

async function findMany() {
  return prisma.plates.findMany();
}

const platesRepository = {
  findMany,
};

export default platesRepository;
