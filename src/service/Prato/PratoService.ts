import AdmRepository from "../../repository/AdmRepository"
import PratoRepository from "../../repository/PratoRepository"



class PratoService {

    async criarPrato(id: string) {
        const isAdm = await this.verificarSeEAdm(id)

    }

    async verificarSeEAdm(id: string) {
        const isAdm = await AdmRepository.pegarAdm(id)
        return isAdm ? isAdm : false
        
    }

}

export default new PratoService()