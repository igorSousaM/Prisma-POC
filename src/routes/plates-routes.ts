import { Router } from "express";
import {
  getOnePlate,
  getPlatesList,
} from "../controllers/plates.controller.js";

const platesRouter = Router();

platesRouter.get("/plates", getPlatesList);
platesRouter.get("/plates/:id", getOnePlate);

export default platesRouter;
