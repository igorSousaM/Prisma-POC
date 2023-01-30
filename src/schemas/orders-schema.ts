import joi, { number } from "joi"
import { OrderInput } from "../protocols/index.js"

export const orderSchema = joi.object<OrderInput>({
    quantity: joi.number().min(1).max(10).required(),
    clientId: joi.number().min(1).required(),
    plateId: joi.number().min(1).max(10).required()
})