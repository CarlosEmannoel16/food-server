import "reflect-metadata";
import express from "express";
import database from "./database/dataSource";
const app = express();

const port = process.env.PORT || 3000;

database
  .initialize()
  .then(() => {
    app.listen(port, () => {
      console.log("Server On na port: ", port);
    });
  })
  .catch((error) => {
    console.log(`Erro na inicialização do postgress:${error}`);
  });
