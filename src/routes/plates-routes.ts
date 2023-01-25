import { Router } from "express";
import { getPlatesList } from "../controllers/plates.controller.js";

const platesRouter = Router();

platesRouter.get('/plates',getPlatesList);


export default platesRouter;