import { Request, Response } from "express";
import ClienteService from "../service/Cliente/ClienteService";
import EnderecoService from "../service/Endereco/EnderecoService";



class ClienteController {

    async criar(req: Request, res: Response) {
        try {
            const result = await ClienteService.criarCliente(req.body)
            if (req.body.endereco && result.cliente!) {
                const data = {...req.body.endereco, idCliente: result.cliente.id}
                await EnderecoService.criarEndereco(data)
            }
            res.json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async atualizar(req: Request, res: Response) {
        try {
            const result = await ClienteService.atualizarCliente(req.params.id, req.body)
            res.json(result)
        } catch (error) {
            console.log(error)
        }
    }

}

export default new ClienteController()