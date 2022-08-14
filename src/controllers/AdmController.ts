import AdmService from "../service/Adm/AdmService";

class AdmController{
    
    async criar(req: Request, res: Response){
        AdmService.criar(req.body.id)
    }
}