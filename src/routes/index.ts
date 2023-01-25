import { Router } from "express";
import platesRouter from "./plates-routes.js";

const routers = Router();

routers.use(platesRouter);

export default routers;