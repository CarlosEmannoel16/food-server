
import { Request, Response } from "express";

class AuthController{
    async loginController(req: Request, res: Response){
        res.send({message: "Ok!"})

    }

}

export default new AuthController()