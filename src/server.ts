import express, { Request, Response } from "express";

const server = express();

server.get("/health", (req: Request, res: Response) => {
  res.send("okay");
});

server.listen(4000, () => {
  console.log("Server running on 4000 port");
});
