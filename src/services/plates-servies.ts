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
  const plateFound = await platesRepository.findOneByName(plate.name);

  if (plateFound) throw conflictError();

  await platesRepository.create(plate);
}

async function updatePlate(plate: PlateInput, id: number) {
  const plateFoundById = await platesRepository.findOneById(id);
  if (!plateFoundById) throw notFoundError();

  const plateFoundByName = await platesRepository.findOneByName(plate.name);
  if (plateFoundByName) throw conflictError();

  await platesRepository.update(plate, id);
}

async function deletePlate(id: number) {
  const plateFoundById = await platesRepository.findOneById(id);
  if (!plateFoundById) throw notFoundError();

  await platesRepository.deleteOne(id);
}

const platesServices = {
  getPlates,
  getPlateById,
  createPlate,
  updatePlate,
  deletePlate
};

export default platesServices;
