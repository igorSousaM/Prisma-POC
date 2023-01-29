import { Request, Response } from "express";
import { PlateInput } from "../protocols/index.js";
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
  const id = Number(req.params.id);

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

async function postPlate(req: Request, res: Response): Promise<void> {
  const newPlate = req.body as PlateInput;

  try {
    await platesServices.createPlate(newPlate);
    res.status(201).send("prato criado");
  } catch (err) {
    if (err.type === "conflict") {
      res.sendStatus(409);
    } else {
      console.log(err);
      res.sendStatus(500);
    }
  }
}

async function updatePlate(req: Request, res: Response): Promise<void> {
  const newPlate = req.body as PlateInput;
  const { id } = req.params;

  try {
    await platesServices.updatePlate(newPlate, Number(id));
    res.status(200).send("alterado com sucesso");
  } catch (err) {
    if (err.type === "conflict") {
      res.sendStatus(409);
    } else if (err.type === "error_not_found") {
      res.sendStatus(404);
    } else {
      console.log(err);
      res.sendStatus(500);
    }
  }
}

async function deletePlate(req: Request, res: Response): Promise<void> {
  const { id } = req.params;

  try {
    await platesServices.deletePlate(Number(id));
    res.status(200).send("prato deletado");
  } catch (err) {
    if (err.type === "error_not_found") {
      res.sendStatus(404);
    } else {
      console.log(err);
      res.sendStatus(500);
    }
  }
}

export { getPlatesList, getOnePlate, postPlate, updatePlate, deletePlate };
