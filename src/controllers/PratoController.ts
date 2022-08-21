import { Request, Response } from "express"
import PratoService from "../service/Prato/PratoService"

class PratoController {
    async listar(req: Request, res: Response) {
        const result = await PratoService.listar()
        res.json(result)
    }

    async pegarPeloId(req: Request, res: Response) {
        const id = req.params.id
        const result = await PratoService.pegarPeloId(id)
        res.json(result)
    }

    async criar(req: Request, res: Response) {
        const result = await PratoService.criarPrato(req.body)
        return res.status(201).json(result)
    }
    
    async atualizar(req: Request, res: Response) {
        const result = await PratoService.atualizarPrato(req.params.id, req.body)
        res.status(200).json(result)
    }

    async excluir(req: Request, res: Response) {
        const id = req.params.id
        const result = await PratoService.deletar(id)
        res.json(result)
    }

}

export default new PratoController()