import { Request, Response } from "express";
import { ClientInput } from "../protocols/index.js";
import clientsServices from "../services/clients-service.js";

async function getClientsList(req: Request, res: Response): Promise<void> {
  try {
    const clients = await clientsServices.getClients();
    res.status(200).send(clients);
  } catch (err) {
    if (err.type === "error_not_found") {
      res.sendStatus(404);
    } else {
      console.log(err);
      res.sendStatus(500);
    }
  }
}
async function getOneClient(req: Request, res: Response): Promise<void> {
  const id = Number(req.params.id);

  try {
    const client = await clientsServices.getClientsById(id);
    res.status(200).send(client);
  } catch (err) {
    if (err.type === "error_not_found") {
      res.sendStatus(404);
    } else {
      console.log(err);
      res.sendStatus(500);
    }
  }
}

async function postClient(req: Request, res: Response): Promise<void> {
  const newClient = req.body as ClientInput;

  try {
    await clientsServices.createClient(newClient);
    res.status(201).send("cliente criado");
  } catch (err) {
    if (err.type === "conflict") {
      res.sendStatus(409);
    } else {
      console.log(err);
      res.sendStatus(500);
    }
  }
}

async function updateClient(req: Request, res: Response): Promise<void> {
  const newClient = req.body as ClientInput;
  const id = Number(req.params.id);

  try {
    await clientsServices.updateClient(newClient, id);
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

async function deleteClient(req: Request, res: Response): Promise<void> {
  const id = Number(req.params.id);

  try {
    await clientsServices.deleteClient(id);
    res.status(200).send("cliente deletado");
  } catch (err) {
    if (err.type === "error_not_found") {
      res.sendStatus(404);
    } else {
      console.log(err);
      res.sendStatus(500);
    }
  }
}

export { getClientsList, getOneClient, postClient, updateClient, deleteClient };
