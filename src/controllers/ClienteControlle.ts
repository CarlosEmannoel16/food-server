import { Request, Response } from "express";
import ClienteRepository from "../repository/ClienteRepository";


class ClienteController {


    async listar(req: Request, res: Response) {
        res.send("Tudo certo!")
    }

    async criar(req: Request, res: Response) {

        /// FIZ COM RPOSITORY NO CONTROLLER SÓ PARA TESTAR
        try {
            await ClienteRepository.criar(
                {
                    name: 'fABIO',
                    cpf: '078876145',
                    email: 'carlos@email.com',
                    nascimento: '22-02-2000',
                    telefone: '88997018711',
                }
            )
            res.json({message: 'ok'})
        } catch (error) {
            console.log(error)
        }
    }

    async atualizar(req: Request, res: Response){ 

    }

}

export default new ClienteController()