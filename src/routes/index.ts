import { Router } from "express";
import clientsRouter from "./clients-routes.js";
import platesRouter from "./plates-routes.js";

const routers = Router();

routers
    .use(platesRouter)
    .use(clientsRouter);

export default routers;
