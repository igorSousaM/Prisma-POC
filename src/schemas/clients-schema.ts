import joi from "joi";
import { ClientInput } from "../protocols/index.js";

export const plateSchema = joi.object<ClientInput>({
  name: joi.string(),
  phone: joi.string(),
  address: joi.string(),
});
