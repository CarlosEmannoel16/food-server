import Jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()
class CreateJwtToken {

    async execute(id: string) {
        const keyScret = process.env.SECRET_KEY as string
        return Jwt.sign({ id }, keyScret, { expiresIn: '5000' })
    }
}

export default new CreateJwtToken()