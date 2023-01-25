import { Request, Response } from "express";
import platesServices from "../services/plates-servies.js";

async function getPlatesList(req: Request, res: Response): Promise<void> {
  try {
    const plates = await platesServices.getPlates();

    res.status(200).send(plates);
  } catch (err) {
    if (err.type === "error_not_found") {
      res.sendStatus(404);
    } else {
      console.log(err);
      res.sendStatus(500);
    }
  }
}

async function getOnePlate(req: Request, res: Response): Promise<void> {
  const  id  = Number(req.params.id);

  try {
    const plate = await platesServices.getPlateById(id);

    res.status(200).send(plate);
  } catch (err) {
    if (err.type === "error_not_found") {
      res.sendStatus(404);
    } else {
      console.log(err);
      res.sendStatus(500);
    }
  }
}

export { getPlatesList, getOnePlate };
