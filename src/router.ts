import express from "express";
import controllers from "./controllers";

const router = express.Router();

router.use(express.json())

//CLIENTE
router.get("/cliente",  controllers.ClienteController.listar)
router.post("/cliente/create", controllers.ClienteController.criar)
router.put("/cliente", controllers.ClienteController.atualizar)

//AUTENTICAÇÃO
router.get("/auth", controllers.AuthController.loginController)

//PRATOS




export default router;