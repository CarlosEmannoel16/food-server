import Cliente from "../../database/entityes/Cliente";
import ClienteRepository from "../../repository/ClienteRepository";
import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

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
            const keyScret = "90diwjdoiesdhe" // vai para o env
            const token = Jwt.sign({ id: cliente.id }, keyScret)
            return { cliente, token }
        }


    }
}

export default new ClienteService()