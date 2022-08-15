import Cliente from "../../database/entityes/Cliente"
import Prato from "../../database/entityes/Prato"
import AdmRepository from "../../repository/AdmRepository"
import { IPrato } from "../../repository/Interfaces"
import PratoRepository from "../../repository/PratoRepository"



class PratoService {

    async criarPrato(data: IPrato) {
        const isAdm = await this.verificarSeEAdm(data.idCliente)
        const prato: Prato = {
            nome: data.nome,
            valor: data.valor,
            descricao: data.descricao,
            url_foto: data.url_foto
        }

        if (isAdm) {
           return await PratoRepository.criarPrato(prato)
        }

        return {message: "false"}

    }

    async verificarSeEAdm(id: string) {
        const isAdm = await AdmRepository.pegarAdm(id)
        if (isAdm.length > 0) {
            return isAdm
        }
        return false
    }

    async listar(){
        return await PratoRepository.listar()
    }

}

export default new PratoService()