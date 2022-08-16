import AdmRepository from "../../repository/AdmRepository";

class AdmService {
    async criar(id: string) {
        const isAdm = await AdmRepository.pegarAdm(id)
        if (isAdm.length > 0) {
            return await AdmRepository.adicionarAdm(id)
        }else{
           return {message: "Não autroizado"}
        }
    }
}

export default new AdmService()