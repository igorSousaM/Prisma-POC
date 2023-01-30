import { Request, Response } from "express";
import { OrderInput } from "../protocols/index.js";
import ordersServices from "../services/orders-services.js";

async function postOrder(req: Request, res: Response): Promise<void> {
  const newOrder = req.body as OrderInput;

  try {
    await ordersServices.createOrder(newOrder);
    res.status(201).send("ordem criada");
  } catch (err) {
    if (err.type === "error_not_found") {
      res.status(404).send("nao tem esse cliente ou pedido");
    } else {
      console.log(err);
      res.sendStatus(500);
    }
  }
}

async function updateOrder(req: Request, res: Response): Promise<void> {
  const newOrder = req.body as OrderInput;
  const id = Number(req.params.id);

  try {
    await ordersServices.updateOrder(newOrder, id);
    res.status(200).send("ordem alterada");
  } catch (err) {
    if (err.type === "error_not_found") {
      res.status(404).send("nao tem esse cliente ou pedido ou ordem");
    } else {
      console.log(err);
      res.sendStatus(500);
    }
  }
}

async function deleteOrder(req: Request, res: Response): Promise<void> {
  const id = Number(req.params.id);

  try {
    await ordersServices.deleteOrder(id);
    res.status(200).send("ordem deletado");
  } catch (err) {
    if (err.type === "error_not_found") {
      res.sendStatus(404);
    } else {
      console.log(err);
      res.sendStatus(500);
    }
  }
}

async function getOrdersList(req: Request, res: Response): Promise<void> {
  try {
    const orders = await ordersServices.getOrders();
    res.status(200).send(orders);
  } catch (err) {
    if (err.type === "error_not_found") {
      res.sendStatus(404);
    } else {
      console.log(err);
      res.sendStatus(500);
    }
  }
}

async function getOneOrder(req: Request, res: Response): Promise<void> {
  const id = Number(req.params.id);

  try {
    const order = await ordersServices.getOrdersById(id);
    res.status(200).send(order);
  } catch (err) {
    if (err.type === "error_not_found") {
      res.sendStatus(404);
    } else {
      console.log(err);
      res.sendStatus(500);
    }
  }
}

export { postOrder, updateOrder, deleteOrder, getOneOrder, getOrdersList };
