import { Request, Response } from "express"
import PratoService from "../service/Prato/PratoService"

class PratoController {
    async listar(req: Request, res: Response) {
        const result = await PratoService.listar()
        res.json(result)
    }

    async criar(req: Request, res: Response) {
        const result = await PratoService.criarOuAtualizarPrato(req.body)
        return res.status(201).json(result)
    }

    async atualizar(req: Request, res: Response) {
        const result = await PratoService.criarOuAtualizarPrato(req.body)
        res.status(200).json(result)
    }

    async excluir(req: Request, res: Response) {

        const id = req.body.idPrato
        const result = await PratoService.deletar(id)
        res.json(result)
    }

}

export default new PratoController()