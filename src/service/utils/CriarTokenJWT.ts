import Jwt from "jsonwebtoken"

export function criarTokenJWT(id: string) {
    const keyScret = "90diwjdoiesdhe" // vai para o env
    const token = Jwt.sign({ id }, keyScret)
    return token
}