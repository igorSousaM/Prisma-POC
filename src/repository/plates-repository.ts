import { plates } from "@prisma/client";
import prisma from "../database/database.js";

async function findMany(): Promise<plates[]> {
  return prisma.plates.findMany();
}

async function findOne(id: number): Promise<plates> {
  return prisma.plates.findFirst({
    where: {
      id: id,
    },
  });
}

const platesRepository = {
  findMany,
  findOne,
};

export default platesRepository;
