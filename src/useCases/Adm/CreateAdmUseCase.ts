import { IAdmRepository } from "../../repository/IAdmRepository";
import { ICreateAdmDTO } from "./AdmDTO";

export class CreateAdmUseCase {
    constructor(
        private admRepository: IAdmRepository
    ) { }

    async execute(data: ICreateAdmDTO) {

        const isAdm = await this.admRepository.find(data.userMadeRequest)

        if (!isAdm) {
            throw new Error("Usuário não autorizado")
        }
        await this.admRepository.create(data.adminId)
    }
}