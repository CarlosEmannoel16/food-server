export interface ILogin{
    email: string
    senha: string
}


export interface IPrato{
    nome: string,
    url_foto?: string
    descricao?: string
    valor: number
    idCliente: string 
}