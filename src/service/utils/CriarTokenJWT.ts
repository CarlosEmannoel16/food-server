import Jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export function criarTokenJWT(id: string) {
    const keyScret = process.env.SECRET_KEY as string // vai para o env
    const token = Jwt.sign({ id }, keyScret, { expiresIn: '1080s' })
    return token
}