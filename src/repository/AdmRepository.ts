import { Repository } from "typeorm";
import dataSource from "../database/dataSource";
import Adm from "../database/entityes/Adm";
import Cliente from "../database/entityes/Usuario";

import { IAdmRepository } from "./IAdmRepository";
class AdmRepository implements IAdmRepository {

    private readonly getRepository: Repository<Adm>
    private readonly getRepositoryCliente: Repository<Cliente>

    constructor() {
        this.getRepository = dataSource.getRepository(Adm)
        this.getRepositoryCliente = dataSource.getRepository(Cliente)
    }

    async create(id: string) {
        const result = this.getRepository.create({ idCliente: id })
        return await this.getRepository.save(result)
    }

    async find(userMadeRequest: string) {
        return await this.getRepository.findOne(
            {
                relations: {
                    cliente: true
                },
                where: { idCliente: userMadeRequest }
            })

    }
}

export default new AdmRepository()