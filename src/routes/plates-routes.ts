import { Router } from "express";
import {
  getOnePlate,
  getPlatesList,
  postPlate,
  updatePlate,
} from "../controllers/plates.controller.js";
import { validateSchema } from "../middleware/validate-schemas.js";
import { plateSchema } from "../schemas/plate-schema.js";

const platesRouter = Router();

platesRouter
  .get("/plates", getPlatesList)
  .get("/plates/:id", getOnePlate)
  .post("/plates", validateSchema(plateSchema), postPlate)
  .patch("/plates/:id", validateSchema(plateSchema), updatePlate);

export default platesRouter;
