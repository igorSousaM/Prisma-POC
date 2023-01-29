import { clients } from "@prisma/client";
import prisma from "../database/database.js";
import { ClientInput } from "../protocols/index.js";

async function findMany(): Promise<clients[]> {
  return prisma.clients.findMany();
}
async function findOneById(id: number): Promise<clients> {
  return prisma.clients.findFirst({
    where: {
      id,
    },
  });
}
async function findOneByName(name: string): Promise<clients> {
  return prisma.clients.findFirst({
    where: {
      name,
    },
  });
}
async function create(client: ClientInput): Promise<clients> {
  return prisma.clients.create({
    data: {
      ...client,
    },
  });
}
async function update(client: ClientInput, id: number): Promise<clients> {
  return prisma.clients.update({
    where: { id },
    data: {
      ...client,
    },
  });
}
async function deleteOne(id: number): Promise<clients> {
  return prisma.clients.delete({
    where: { id },
  });
}

const clientsRepository = {
  findMany,
  findOneById,
  findOneByName,
  create,
  update,
  deleteOne,
};

export default clientsRepository;
