import ClienteRepository from "../../repository/ClienteRepository";
import bcrypt from "bcrypt"
import { criarTokenJWT } from "../utils/CriarTokenJWT";
import { iLogin } from "../../repository/Interfaces";

class LoginService {
    async verificarLogin(data: iLogin) {

        try {
            const cliente = await ClienteRepository.pegarPeloEmail(data.email)
            console.log(cliente)
            if (!cliente) {
                return { message: false }
            } else {
                const isLogin = bcrypt.compareSync(data.senha, cliente.senha)
                const isemail = cliente.email === data.email
                if (isLogin && isemail) {
                    const token = criarTokenJWT(cliente.id as string)
                    return { autorizacao: true, token }
                } else {
                    return { autorizacao: false, message: "E-mail ou senha inválidos"}
                }
            }
        } catch (error) {
            console.log(error)
        }

    }
}

export default new LoginService()