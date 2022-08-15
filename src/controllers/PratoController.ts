import { Request, Response } from "express"
import PratoService from "../service/Prato/PratoService"

class PratoController {
    async listar(req: Request, res: Response) {

    }

    async criar(req: Request, res: Response) {
        const adm = await PratoService.verificarSeEAdm(req.body.id);
        console.log(adm)
        if (adm) return res.json({ message: "ok" })
    }
}

export default new PratoController()