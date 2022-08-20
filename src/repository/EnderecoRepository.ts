import { Repository } from "typeorm"
import dataSource from "../database/dataSource"
import Endereco from "../database/entityes/Endereco"

class EnderecoRepository {

    private readonly getRepository: Repository<Endereco>
    constructor() {
        this.getRepository = dataSource.getRepository(Endereco)
    }

    async getEnderecoByIdClinte(id: string) {
        const endereco = await this.getRepository.find({

            relations: {
                cliente: true
            },
            where: {
                idCliente: id
            }
        })
        return endereco
    }

    async criar(data: Endereco): Promise<Endereco> {
        const endereco = this.getRepository.create(data);
        const result = await this.getRepository.save(endereco);
        return result;
    }
}


export default new EnderecoRepository()