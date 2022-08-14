import { Repository } from "typeorm";
import dataSource from "../database/dataSource";
import Adm from "../database/entityes/Adm";


class AdmRepository {

    private readonly getRepository: Repository<Adm>

    constructor() {
        this.getRepository = dataSource.getRepository(Adm)
    }
    async adicionarAdm(id: string) {

        const result = this.getRepository.create({clienteId: id})
        return await this.getRepository.save(result)

    }
}

export default new AdmRepository()