import { plates } from "@prisma/client";
import prisma from "../database/database.js";
import { PlateInput } from "../protocols/index.js";

async function findMany(): Promise<plates[]> {
  return prisma.plates.findMany();
}

async function findOneById(id: number): Promise<plates> {
  return prisma.plates.findFirst({
    where: {
      id,
    },
  });
}

async function findOneByName(name: string): Promise<plates> {
  return prisma.plates.findFirst({
    where: {
      name,
    },
  });
}

async function create(plate: PlateInput): Promise<plates> {
  return prisma.plates.create({
    data: {
      ...plate,
    },
  });
}

async function update(plate: PlateInput, id: number): Promise<plates> {
  return prisma.plates.update({
    where: { id },
    data: {
      ...plate,
    },
  });
}

async function deleteOne(id: number): Promise<plates> {
  return prisma.plates.delete({
    where: { id },
  });
}

const platesRepository = {
  findMany,
  findOneById,
  findOneByName,
  create,
  update,
  deleteOne,
};

export default platesRepository;
