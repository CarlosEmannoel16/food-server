import AdmService from "../service/Adm/AdmService";
import { Request, Response } from "express"

class AdmController {

    async criar(req: Request, res: Response) {
        if (req.body.id) {
            try {
                const result = await AdmService.criar(req.body.id)
                res.json(result)
            } catch (error) {
                res.json(error)
            }
        }
    }
}

export default new AdmController()