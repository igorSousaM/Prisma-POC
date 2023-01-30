import { orders } from "@prisma/client";
import { notFoundError } from "../middleware/error-handling.js";
import { OrderInput } from "../protocols/index.js";
import clientsRepository from "../repository/clients-repository.js";
import ordersRepository from "../repository/orders-repository.js";
import platesRepository from "../repository/plates-repository.js";

async function createOrder(order: OrderInput): Promise<void> {
  const clientFoundById = await clientsRepository.findOneById(order.clientId);
  const plateFoundById = await platesRepository.findOneById(order.plateId);

  if (!clientFoundById || !plateFoundById) throw notFoundError();

  let totalCookingTime = plateFoundById.cookingTime * order.quantity;
  let totalPrice = plateFoundById.price * order.quantity;

  await ordersRepository.create(order, totalCookingTime, totalPrice);
}

async function getOrders(): Promise<orders[]> {
  const ordersList = await ordersRepository.findMany();
  if (!ordersList.length) throw notFoundError();
  return ordersList;
}

async function getOrdersById(id: number) {
  const order = await ordersRepository.findOneById(id);
  if (!order) throw notFoundError();
  return order;
}

async function updateOrder(order: OrderInput, id: number): Promise<void> {
  const orderFoundById = await ordersRepository.findOneById(id);
  const clientFoundById = await clientsRepository.findOneById(order.clientId);
  const plateFoundById = await platesRepository.findOneById(order.plateId);

  if (!clientFoundById || !plateFoundById || !orderFoundById)
    throw notFoundError();

  let totalCookingTime = plateFoundById.cookingTime * order.quantity;
  let totalPrice = plateFoundById.price * order.quantity;

  await ordersRepository.update(order, totalCookingTime, totalPrice, id);
}

async function deleteOrder(id: number) {
  const orderFoundById = await ordersRepository.findOneById(id);
  if (!orderFoundById) throw notFoundError();

  await ordersRepository.deleteOne(id);
}

const ordersServices = {
  createOrder,
  updateOrder,
  getOrders,
  getOrdersById,
  deleteOrder,
};

export default ordersServices;
