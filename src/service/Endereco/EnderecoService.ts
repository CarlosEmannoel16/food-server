import Cliente from "../../database/entityes/Cliente";
import ClienteRepository from "../../repository/ClienteRepository";
import bcrypt from "bcrypt"
import { criarTokenJWT } from "../utils/CriarTokenJWT";
import Endereco from "../../database/entityes/Endereco";
import EnderecoRepository from "../../repository/EnderecoRepository";


class ClienteService  {

    async criarEndereco(data: Endereco): Promise<Endereco | any>{
        const existeCliente = await ClienteRepository.pegarPeloId(data.idCliente)
        if(existeCliente){
            const result = await EnderecoRepository.criar(data)
            return result
        }else{
            return { message: "Cliente não encontrado" }
        }
    }

    async updateEndreco(data: Endereco){
        const result = EnderecoRepository.criar(data)
        return result
    }
}

export default new ClienteService()