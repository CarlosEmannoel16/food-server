import { Repository } from "typeorm";
import dataSource from "../database/dataSource";
import Cliente from "../database/entityes/Usuario";
import { ICreateUserDTO } from "../useCases/Cliente/UserDTO";
import { IUserRepository } from "./IUserRepository";

class ClienteRepository implements IUserRepository {

    private readonly getRepository: Repository<Cliente>

    constructor() {
        this.getRepository = dataSource.getRepository(Cliente)
    }

    async find() {
        const clienteRes = await this.getRepository.find()
        return clienteRes
    }


    async create(data: ICreateUserDTO): Promise<Cliente> {
        const clienteCreate = this.getRepository.create(data);
        const cliente = await this.getRepository.save(clienteCreate);
        return cliente;
    }


    async findByEmail(email: string) {
        const cliente = await this.getRepository.findOne({
            where: {
                email
            }
        })
        return cliente
    }

    async findByCpf(cpf: string) {
        const cliente = await this.getRepository.findOne({
            where: {
                cpf
            }
        })
        return cliente
    }

    async findById(id: string) {
        const cliente = await this.getRepository.findOne({ where: { id } })
        return cliente

    }

}

export default new ClienteRepository()