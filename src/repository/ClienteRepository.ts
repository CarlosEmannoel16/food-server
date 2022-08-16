import { Repository } from "typeorm";
import dataSource from "../database/dataSource";
import Cliente from "../database/entityes/Cliente";


class ClienteRepository {

    private readonly getRepository: Repository<Cliente>

    constructor() {
        this.getRepository = dataSource.getRepository(Cliente)
    }

    async listar(): Promise<Cliente[]> {
        const clienteRes = await this.getRepository.find()
        return clienteRes
    }


    async criar(data: Cliente): Promise<Cliente> {
        const clienteCreate = this.getRepository.create(data);
        const cliente = await this.getRepository.save(clienteCreate);
        return cliente;
    }


    async pegarPeloEmail(email: string) {
        const cliente = await this.getRepository.findOne({
            where: {
                email
            }
        })
        return cliente
    }

    async pegarPeloCpf(cpf: string) {
        const cliente = await this.getRepository.findOne({
            where: {
                cpf
            }
        })
        return cliente
    }

}

export default new ClienteRepository()