import { Request, Response } from "express";
import ClienteService from "../service/Cliente/ClienteService";



class ClienteController {
  
    async criar(req: Request, res: Response) {
        try {
            const result =  await ClienteService.criarOuAtualizarCliente(req.body)
            res.json(result)
        } catch (error) {
            console.log(error)
        }
    }

    async atualizar(req: Request, res: Response){ 
        try {
            const result =  await ClienteService.criarOuAtualizarCliente(req.body)
            res.json(result)
        } catch (error) {
            console.log(error)
        }
    }

}

export default new ClienteController()