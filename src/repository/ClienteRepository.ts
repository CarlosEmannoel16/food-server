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

    async pegarAdm(id: string) {
        const result = await this.getRepository.createQueryBuilder().innerJoin("cliente.id", "isAdm").where("cliente.id = :id", { id })
        return result
    }
    async pegarPeloEmail(email: string) {
        const cliente = await this.getRepository.findOne({
            where: {
                email
            }
        })

        return cliente
    }

}

export default new ClienteRepository()