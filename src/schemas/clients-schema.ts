import joi from "joi";
import { ClientInput } from "../protocols/index.js";

export const clientSchema = joi.object<ClientInput>({
  name: joi.string().min(3).required(),
  phone: joi.string().min(10).max(14).required(),
  address: joi.string().required(),
});
