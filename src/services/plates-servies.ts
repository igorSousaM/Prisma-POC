import { plates } from "@prisma/client";
import { conflictError, notFoundError } from "../middleware/error-handling.js";
import { PlateInput } from "../protocols/index.js";
import platesRepository from "../repository/plates-repository.js";

async function getPlates(): Promise<plates[]> {
  const platesList = await platesRepository.findMany();

  if (!platesList.length) throw notFoundError();

  return platesList;
}

async function getPlateById(id: number): Promise<plates> {
  const plate = await platesRepository.findOneById(id);

  if (!plate) throw notFoundError();

  return plate;
}

async function createPlate(plate: PlateInput) {
  const plateFound = await platesRepository.findOneByName(plate.name)

  if(plateFound) throw conflictError();
  
  await platesRepository.create(plate)
}

const platesServices = {
  getPlates,
  getPlateById,
  createPlate
};

export default platesServices;
