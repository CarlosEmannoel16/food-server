import AdmRepository from "../../repository/AdmRepository";

class AdmService {
    async criar(id: string) {
        return await AdmRepository.adicionarAdm(id)
    }
}

export default new AdmService()