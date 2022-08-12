import express from "express";
import controllers from "./controllers";

const router = express.Router();

router.use(express.json())

//CLIENTE
router.get("/cliente",  controllers.clienteController.listar)
router.post("/cliente/create", controllers.clienteController.criar)
router.put("/cliente", controllers.clienteController.atualizar)

//AUTENTICAÇÃO
router.get("/auth", controllers.authController.loginController)

//PRATOS




export default router;