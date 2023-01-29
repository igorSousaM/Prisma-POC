import { Router } from "express";

const clientsRouter = Router();

clientsRouter
    .get("/clients")
    .get("/clients/:id")
    .post("clients")
    .patch("/clients/:id")
    .delete("/clients/:id")

export default clientsRouter;
