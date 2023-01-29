import joi from "joi";
import { PlateInput } from "../protocols/index.js";

export const plateSchema = joi.object<PlateInput>({
  name: joi.string().required(),
  price: joi.number().integer().required(),
  description: joi.string().required(),
  cookingTime: joi.number().integer().required(),
  type: joi.string().valid("entrada", "prato principal", "sobremesa").required(),
});
