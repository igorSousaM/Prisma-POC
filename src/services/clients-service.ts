import { conflictError, notFoundError } from "../middleware/error-handling.js";
import { ClientInput } from "../protocols/index.js";
import clientsRepository from "../repository/clients-repository.js";

async function getClients() {
  const clientsList = await clientsRepository.findMany();
  if (!clientsList.length) throw notFoundError();
  return clientsList;
}

async function getClientsById(id: number) {
  const client = await clientsRepository.findOneById(id);
  if (!client) throw notFoundError();
  return client;
}

async function createClient(client: ClientInput) {
  const clientFoundByName = await clientsRepository.findOneByName(client.name);
  if (clientFoundByName) throw conflictError();
  await clientsRepository.create(client);
}

async function updateClient(client: ClientInput, id: number) {
  const clientFoundById = await clientsRepository.findOneById(id);
  if (!clientFoundById) throw notFoundError();

  const clientFoundByName = await clientsRepository.findOneByName(client.name);
  if (clientFoundByName) throw conflictError();

  await clientsRepository.update(client, id);
}

async function deleteClient(id: number) {
  const clientFoundById = await clientsRepository.findOneById(id);
  if (!clientFoundById) throw notFoundError();

  await clientsRepository.deleteOne(id);
}

const clientsServices = {
  getClients,
  getClientsById,
  createClient,
  deleteClient,
  updateClient,
};

export default clientsServices;
