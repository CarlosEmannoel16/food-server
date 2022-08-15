import { Repository } from "typeorm";
import dataSource from "../database/dataSource";
import Adm from "../database/entityes/Adm";
import Cliente from "../database/entityes/Cliente";


class AdmRepository {

    private readonly getRepository: Repository<Adm>
    private readonly getRepositoryCliente: Repository<Cliente>

    constructor() {
        this.getRepository = dataSource.getRepository(Adm)
        this.getRepositoryCliente = dataSource.getRepository(Cliente)
    }

    async adicionarAdm(id: string) {
        const result = this.getRepository.create({ idCliente: id })
        return await this.getRepository.save(result)
    }

    async pegarAdm(id: string) {
        // const result = await this.getRepository.find({where: {idCliente: id}})
        const result = await this.getRepository.find(
            {
                relations: {
                    cliente: true
                },
                where: { idCliente: id }
            })
        return result

    }
}

export default new AdmRepository()