import express, { json, Request, Response } from "express";
import routers from "./routes/index.js";

const server = express();
server.use(json());
server.use(routers);

server.get("/health", (req: Request, res: Response) => {
  res.send("okay");
});

server.listen(5000, () => {
  console.log("Server running on 4000 port");
});
