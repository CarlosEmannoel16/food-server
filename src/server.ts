import "reflect-metadata";
import express from "express";
import database from "./database/dataSource";
import routers from "./router";
import cors from 'cors'

const app = express();

const port = process.env.PORT || 3000;

app.use(cors())

app.use(routers);

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
