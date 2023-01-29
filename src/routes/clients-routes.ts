import { Router } from "express";
import { deleteClient, getClientsList, getOneClient, postClient, updateClient } from "../controllers/clients-controller.js";
import { validateSchema } from "../middleware/validate-schemas.js";
import { clientSchema } from "../schemas/clients-schema.js";

const clientsRouter = Router();

clientsRouter
    .get("/clients",getClientsList)
    .get("/clients/:id",getOneClient)
    .post("/clients",validateSchema(clientSchema),postClient)
    .patch("/clients/:id",validateSchema(clientSchema),updateClient)
    .delete("/clients/:id",deleteClient)

export default clientsRouter;
