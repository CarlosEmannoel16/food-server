import { Request, Response } from "express"
import PratoService from "../service/Prato/PratoService"

class PratoController {
    async listar(req: Request, res: Response) {
        const result = await PratoService.listar()
        res.json(result)
    }

    async criar(req: Request, res: Response) {

        const adm = await PratoService.criarPrato(req.body)
        return res.json(adm)
    }
}

export default new PratoController()