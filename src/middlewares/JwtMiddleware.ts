import { NextFunction } from "express";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import dotenv from "dotenv"

dotenv.config()


export const JwtMiddleware = (req: Request, res: Response, next: NextFunction) => {

    console.log(req.headers)

    const authHeader = req.headers.authorization as string
    const token = authHeader && authHeader.split(' ')[1]

    if (!authHeader || !token || authHeader.split(' ')[0] !== "Bearer") return res.status(401).json({ message: "Não Autorizado" })

    jwt.verify(token, process.env.SECRET_KEY as string, (err, user) => {
        if (err) return res.status(403).json({ message: "Não Autorizado" })
        if (user) next()
    })

}