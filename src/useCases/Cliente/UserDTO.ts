export interface ICreateAddresDTO{
    idEndereco?: string
    idCliente: string
    rua: string
    bairro: string
    cidade: string
}


export interface ICreateUserDTO {
    name:string
    cpf:string
    email: string
    nascimento: string
    telefone:string
    senha: string
    endereco: ICreateAddresDTO
}

