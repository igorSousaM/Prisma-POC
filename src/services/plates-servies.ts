import { plates } from "@prisma/client";
import { notFoundError } from "../middleware/error-handling.js";
import platesRepository from "../repository/plates-repository.js";

async function getPlates(): Promise<plates[]> {
  const platesList = await platesRepository.findMany();

  if (!platesList.length) throw notFoundError();

  return platesList;
}

async function getPlateById(id: number): Promise<plates> {
  const plate = await platesRepository.findOne(id);

  if (!plate) throw notFoundError();

  return plate;
}

const platesServices = {
  getPlates,
  getPlateById,
};

export default platesServices;
