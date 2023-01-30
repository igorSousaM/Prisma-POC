import { Router } from "express";
import {
  deleteOrder,
  getOneOrder,
  getOrdersList,
  postOrder,
  updateOrder,
} from "../controllers/orders-controller.js";
import { validateSchema } from "../middleware/validate-schemas.js";
import { orderSchema } from "../schemas/orders-schema.js";

const ordersRouter = Router();

ordersRouter
  .get("/orders", getOrdersList)
  .get("/orders/:id", getOneOrder)
  .post("/orders", validateSchema(orderSchema), postOrder)
  .patch("/orders/:id", validateSchema(orderSchema), updateOrder)
  .delete("/orders/:id", deleteOrder);

export default ordersRouter;
