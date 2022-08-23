import Cliente from "../database/entityes/Usuario";
import { ICreateUserDTO } from "../useCases/Cliente/UserDTO";

export interface IUserRepository {

    find(): Promise<Cliente[]>
    create(data: ICreateUserDTO): Promise<Cliente>
    findByEmail(email:string): Promise<Cliente | null>
    findByCpf(cpf: string): Promise<Cliente | null>
    findById(id: string): Promise<Cliente | null>

}