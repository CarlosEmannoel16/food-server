export interface ILogin{
    email: string
    senha: string
}


export interface IPrato{
    idPrato?: string
    nome: string,
    url_foto?: string
    descricao?: string
    valor: number
    idCliente: string 
}
