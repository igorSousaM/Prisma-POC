import joi from "joi";
import { PlateInput } from "../protocols/index.js";

export const plateSchema = joi.object<PlateInput>({
  name: joi.string(),
  price: joi.number().integer(),
  description: joi.string(),
  cookingTime: joi.number().integer(),
  type: joi.string().valid("entrada", "prato principal", "sobremesa"),
});
