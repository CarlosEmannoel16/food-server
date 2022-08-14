
import { Request, Response } from "express";
import { iLogin } from "../repository/Interfaces";
import LoginService from "../service/Autenticacao/LoginService";


class AuthController{
    async loginController(req: Request, res: Response){ 
        const {email, senha} = req.body
        const resultado = await LoginService.verificarLogin({email, senha} as iLogin)
        res.json(resultado)
    }

}

export default new AuthController()