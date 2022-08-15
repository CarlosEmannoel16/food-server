import { Repository } from "typeorm";
import dataSource from "../database/dataSource";
import Prato from "../database/entityes/Prato";

class PratoRepository {

    private readonly getRepository: Repository<Prato>

    constructor() {
        this.getRepository = dataSource.getRepository(Prato)
    }

    async listar() {
        return await this.getRepository.find()
    }

    async pegarPeloId(id: string) {
        return await this.getRepository.findOne({ where: { idPrato: id } })
    }

    async criarPrato(data: Prato) {
        const result = this.getRepository.create(data);
        return await this.getRepository.save(result)
    }
}

export default new PratoRepository()