import Cliente from "../../database/entityes/Cliente";
import ClienteRepository from "../../repository/ClienteRepository";
import bcrypt from "bcrypt"
import { criarTokenJWT } from "../utils/CriarTokenJWT";


class ClienteService {

    async criarCliente(data: Cliente) {

        const salt = 10  /// VAI PARA O ENV
        let senha = data.senha
        const existeEmail = await ClienteRepository.pegarPeloEmail(data.email)
        const existeCpf = await ClienteRepository.pegarPeloCpf(data.cpf)

        if (existeEmail) return { message: "E-mail já cadastrado" }
        if (existeCpf) return { message: "Cpf Já Cadastrado" }

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