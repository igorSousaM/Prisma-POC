import { plates } from "@prisma/client";
import prisma from "../database/database.js";

async function findMany(): Promise<plates[]> {
  return prisma.plates.findMany();
}

const platesRepository = {
  findMany,
};

export default platesRepository;
