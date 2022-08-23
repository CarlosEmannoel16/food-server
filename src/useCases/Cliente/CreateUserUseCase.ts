import { IUserRepository } from "../../repository/IUserRepository";
import { ICreateUserDTO } from "./UserDTO";
import bcrypt from "bcrypt"
import CreateJwtToken from "../../service/utils/CriarTokenJWT";

export class CreateUserUseCase {

    constructor(
        private ClienteRepository: IUserRepository
    ) { }

    async execute(data: ICreateUserDTO) {
        const salt = 10

        const {
            senha: senhaRequest,
            cpf,
            email,
            endereco
        } = data

        if (email) {
            const existEmail = await this.ClienteRepository.findByEmail(email)
            if (existEmail) throw new Error("Email Já Cadastrado")
        }

        if (cpf) {
            const existCpf = await this.ClienteRepository.findByCpf(cpf)
            if (existCpf) throw new Error("Cpf Já Cadastrado")
        }
        if (!cpf) throw new Error("CPF não infromado")

        if (!endereco) throw new Error("Endereço não informado")


        const senha = await bcrypt.hash(senhaRequest, bcrypt.genSaltSync(salt))
        data = { ...data, senha }

        const cliente = await this.ClienteRepository.create(data)

        if (cliente) {
            const token = await CreateJwtToken.execute(cliente.id)
            return { cliente, token }
        } else {
            throw new Error("Não foi possivel realizar o cadastro")
        }


    }


}