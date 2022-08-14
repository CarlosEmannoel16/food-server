import ClienteRepository from "../../repository/ClienteRepository"
import PratoRepository from "../../repository/PratoRepository"



class PratoService {

    async criarPrato(id: string) {
    const isAdm = await this.verificarSeEAdm(id)




    }

    async verificarSeEAdm(id: string) {
        const isAdm = await  ClienteRepository.pegarAdm(id)
        console.log(isAdm)
    }

}

export default new PratoService()