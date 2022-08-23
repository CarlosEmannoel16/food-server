
import Adm from "../database/entityes/Adm";

export interface IAdmRepository {
    create(id: string): Promise<Adm>,
    find(userMadeRequest: string): Promise<Adm | null>,
}