import Cliente from "../../database/entityes/Cliente";
import ClienteRepository from "../../repository/ClienteRepository";
import bcrypt from "bcrypt"
import { criarTokenJWT } from "../utils/CriarTokenJWT";


class ClienteService {

    async criarCliente(data: Cliente) {
        const salt = 10  /// VAI PARA O ENV
        let senha = data.senha
        senha = await bcrypt.hash(senha, bcrypt.genSaltSync(salt))
        data = { ...data, senha }
        const cliente = await ClienteRepository.criar(data)

        if (!cliente) {
            return { messsage: "ops" }
        } else {
           const token = criarTokenJWT(data.id as string)
            return { cliente, token }
        }
    }

    async atualizarCliente(data: Cliente){
        
    }
}

export default new ClienteService()