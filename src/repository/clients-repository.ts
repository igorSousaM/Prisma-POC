import { ClientInput } from "../protocols/index.js";

async function findMany() {}
async function findOneById(id:number) {}
async function findOneByName(name:string) {}
async function create(client:ClientInput) {}
async function update(client:ClientInput,id:number) {}
async function deleteOne(id:number) {}



const clientsRepository = {
    findMany,
    findOneById,
    findOneByName,
    create,
    update,
    deleteOne
};

export default clientsRepository;
