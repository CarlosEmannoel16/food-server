import { Request, Response } from "express";
import ClienteService from "../service/Cliente/ClienteService";



class ClienteController {


    async listar(req: Request, res: Response) {
        res.send("Tudo certo!")
    }

    async criar(req: Request, res: Response) {

        try {
            const result =  await ClienteService.criarCliente(req.body)
            res.json(result)
        } catch (error) {
            console.log(error)
        }
    }

    async atualizar(req: Request, res: Response){ 

    }

}

export default new ClienteController()