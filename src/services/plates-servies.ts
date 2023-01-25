import { plates } from "@prisma/client";
import { notFoundError } from "../middleware/error-handling.js";
import platesRepository from "../repository/plates-repository.js";

async function getPlates(): Promise<plates[]> {
  const platesList = await platesRepository.findMany();

  if (!platesList.length) throw notFoundError();

  return platesList;
}

const platesServices = {
  getPlates,
};

export default platesServices;
