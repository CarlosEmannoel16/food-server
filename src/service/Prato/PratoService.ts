import Cliente from "../../database/entityes/Cliente"
import Prato from "../../database/entityes/Prato"
import AdmRepository from "../../repository/AdmRepository"
import { IPrato } from "../../repository/Interfaces"
import PratoRepository from "../../repository/PratoRepository"

class PratoService {
    async criarPrato(data: IPrato) {
        const isAdm = data.idCliente && await this.verificarSeEAdm(data.idCliente)

        const prato: Prato = {
            nome: data.nome,
            valor: data.valor,
            descricao: data.descricao || "",
            url_foto: data.url_foto || ""
        }

        if (isAdm) {
            return await PratoRepository.criarOuAtualizarPrato(prato)
        }
        return { message: "Não Autorizado" }
    }

    async atualizarPrato(id: string, data: IPrato) {
        const isAdm = data.idCliente && await this.verificarSeEAdm(data.idCliente)

        const prato: Prato = {
            idPrato: id,
            nome: data.nome,
            valor: data.valor,
            descricao: data.descricao || "",
            url_foto: data.url_foto || ""
        }

        if (isAdm) {
            return await PratoRepository.criarOuAtualizarPrato(prato)
        }
        return { message: "Não Autorizado" }
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

    async deletar(id: string) {
        const deletado = await PratoRepository.deletar(id)
        const isadm = id && await this.verificarSeEAdm(id)

        if (isadm) {
            if (deletado) return { message: "Produto deletado" }
        } else {
            return { message: "Não Autorizado" }
        }



    }
}

export default new PratoService()