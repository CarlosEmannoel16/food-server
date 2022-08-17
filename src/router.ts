import express from "express";
import controllers from "./controllers";
import { JwtMiddleware } from "./middlewares/JwtMiddleware";

const router = express.Router();

router.use(express.json())

//CLIENTE
router.post("/cliente/criar", controllers.ClienteController.criar)
router.put("/cliente/:id", JwtMiddleware, controllers.ClienteController.atualizar)

//AUTENTICAÇÃO
router.post("/login", controllers.AuthController.loginController)
//router.get("/auth", controllers.AuthController.loginController)


//PRATOS
router.post("/prato/criar", JwtMiddleware, controllers.PratoController.criar)
router.get("/prato/listar", controllers.PratoController.listar)
router.put("/prato/:id", JwtMiddleware, controllers.PratoController.atualizar)

//ADM
router.post("/adm/criar", JwtMiddleware, controllers.AdmController.criar)




export default router;