import AdmService from "../service/Adm/AdmService";
import { Request, Response } from "express"

class AdmController {

    async criar(req: Request, res: Response) {
        if (req.body.id) {
           const adm =  await AdmService.criar(req.body.id)
           if(adm) res.json({message: "ok"})
        }
    }
}

export default new AdmController()