export interface ILogin{
    email: string
    senha: string
}


export interface IPrato{
    idPrato?: string
    nome: string
    url_foto?: string
    valor: number
    idCliente: string 
}
