import {Request, Response} from "express"
import PratoService from "../service/Prato/PratoService"

class PratoController{
    async listar(req: Request, res: Response){

    }

    async criar(req: Request, res: Response){
        await PratoService.verificarSeEAdm(req.body.id);
    }
}

export default new PratoController()