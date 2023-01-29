import { Request, Response } from "express";

export function validateSchema(schema) {
  return (req: Request, res: Response, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(422).send(errors);
    }
    next();
  };
}
