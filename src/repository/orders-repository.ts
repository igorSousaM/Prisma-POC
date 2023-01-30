import { orders } from "@prisma/client";
import prisma from "../database/database.js";
import { OrderInput } from "../protocols/index.js";

async function create(
  order: OrderInput,
  totalCookingTime: number,
  totalPrice: number
): Promise<orders> {
  return prisma.orders.create({
    data: {
      ...order,
      totalCookingTime,
      totalPrice,
    },
  });
}

async function findMany(): Promise<orders[]> {
  return prisma.orders.findMany();
}

async function findOneById(id: number): Promise<orders> {
  return prisma.orders.findFirst({
    where: {
      id,
    },
  });
}

async function update(
  order: OrderInput,
  totalCookingTime: number,
  totalPrice: number,
  id: number
) {
  return prisma.orders.update({
    where: { id },
    data: {
      ...order,
      totalCookingTime,
      totalPrice,
    },
  });
}

async function deleteOne(id: number): Promise<orders> {
  return prisma.orders.delete({
    where: { id },
  });
}

const ordersRepository = {
  create,
  findMany,
  findOneById,
  update,
  deleteOne
};

export default ordersRepository;
