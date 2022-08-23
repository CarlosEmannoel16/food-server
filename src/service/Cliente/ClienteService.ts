import Cliente from "../../database/entityes/Usuario";
import ClienteRepository from "../../repository/ClienteRepository";
import bcrypt from "bcrypt"
import { criarTokenJWT } from "../utils/CriarTokenJWT";


class ClienteService {

    async criarCliente(data: Cliente) {

        const salt = 10  /// VAI PARA O ENV
        let senha = data.senha
        if (data.email) {
            const existeEmail = await ClienteRepository.pegarPeloEmail(data.email)
            if (existeEmail) return { 
                message: "Email já cadastrado",
                autorizacao: false
             }
        }

        if (data.cpf) {
            const existeCpf = await ClienteRepository.pegarPeloCpf(data.cpf)
            if (existeCpf) return { 
                message: "cpf já cadastrado",
                autorizacao: false
            }
        }

        senha = await bcrypt.hash(senha, bcrypt.genSaltSync(salt))
        data = { ...data, senha }
        const cliente = await ClienteRepository.criar(data)

        if (!cliente) {
            return { messsage: "ops", autorizacao: false }
        } else {
            const token = criarTokenJWT(data.id as string)
            return { cliente, token, autorizacao: true }
        }
    }

    async atualizarCliente(id: string, data: Cliente) {

        const cliente = await ClienteRepository.pegarPeloId(id)

        data = {...data, id}

        if (cliente) {
            const cliente = await ClienteRepository.criar(data)
            return cliente
        } else {
            return { message: "Cliente não encontrado" }
        }

    }
}

export default new ClienteService()