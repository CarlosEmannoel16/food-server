import ClienteRepository from "../../repository/ClienteRepository";
import bcrypt from "bcrypt"
import { criarTokenJWT } from "../utils/CriarTokenJWT";
import { ILogin } from "../../repository/Interfaces";
import AdmRepository from "../../repository/AdmRepository";

class LoginService {
    async verificarLogin(data: ILogin) {

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
                    const isAdm = await AdmRepository.pegarAdm(cliente.id)
                    if (isAdm.length > 0) {
                        return { autorizacao: true, role: "adm", token }
                    }
                    return { autorizacao: true, role: "cliente", token }
                } else {
                    return { autorizacao: false, message: "E-mail ou senha inválidos" }
                }
            }
        } catch (error) {
            console.log(error)
        }

    }
}

export default new LoginService()