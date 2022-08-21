import Cliente from "../../database/entityes/Cliente"
import Prato from "../../database/entityes/Prato"
import AdmRepository from "../../repository/AdmRepository"
import { IPrato } from "../../repository/Interfaces"
import PratoRepository from "../../repository/PratoRepository"

class PratoService {
    async criarPrato(data: IPrato) {
        console.log("___________________________)_)_)__)_)_", data)
        const isAdm = data.idCliente && await this.verificarSeEAdm(data.idCliente)

        const prato: Prato = {
            nome: data.nome,
            valor: data.valor,
            url_foto: data.url_foto || ""
        }

        if (isAdm) {
            return await PratoRepository.criarOuAtualizarPrato(prato)
        }
        return { message: "Não Autorizado 3" }
    }

    async atualizarPrato(id: string, data: IPrato) {
        const isAdm = data.idCliente && await this.verificarSeEAdm(data.idCliente)

        const prato: Prato = {
            idPrato: id,
            nome: data.nome,
            valor: data.valor,
            url_foto: data.url_foto || ""
        }

        if (isAdm) {
            return await PratoRepository.criarOuAtualizarPrato(prato)
        }
        return { message: "Não Autorizado adm" }
    }

    async verificarSeEAdm(id: string) {
        const isAdm = await AdmRepository.pegarAdm(id)
        if (isAdm.length > 0) {
            return isAdm
        }
        return false
    }

    async listar() {
        return await PratoRepository.listar()
    }

    async pegarPeloId(id: string) {
        return await PratoRepository.pegarPeloId(id)
    }

    async deletar(id: string) {
        const deletado = await PratoRepository.deletar(id)
        const isadm = id && await this.verificarSeEAdm(id)

        if (isadm) {
            if (deletado) return { message: "Produto deletado" }
        } else {
            return { message: "Não Autorizado 5" }
        }
    }
}

export default new PratoService()