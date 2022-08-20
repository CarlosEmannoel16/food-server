
import { Request, Response } from "express";
import { ILogin } from "../repository/Interfaces";
import LoginService from "../service/Autenticacao/LoginService";


class AuthController {
    async loginController(req: Request, res: Response) {
        const { email, senha } = req.body
        const resultado = await LoginService.verificarLogin({ email, senha } as ILogin)
        if (resultado) {
            if (resultado.autorizacao === true) {
             return res.status(200).json(resultado)
            }

            if (resultado.autorizacao === false) {
             return res.status(401).json(resultado)
            }
        } else {
         return res.status(500)
        }

    }

}

export default new AuthController() 