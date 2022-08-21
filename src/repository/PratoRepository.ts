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

    async criarOuAtualizarPrato(data: Prato) {
        const result = this.getRepository.create(data);
        return await this.getRepository.save(result)
    }

    async deletar(id: string) {
        const result = await this.getRepository.delete(id)
        return result
    }
}

export default new PratoRepository()