import { Entity, Column, OneToOne, JoinColumn, PrimaryColumn } from "typeorm";
import Cliente from "./Cliente";
import{v4 as uuid} from "uuid"


@Entity()
export default class Adm{
    @PrimaryColumn()
    idAdm?: string

    @OneToOne(() => Cliente, (cliente)=> cliente.adm)
    @JoinColumn()
    cliente?: Cliente

    constructor(){
        if(!this.idAdm) this.idAdm = uuid()
    } 

}     