import { Entity, Column, OneToOne, JoinColumn, PrimaryColumn } from "typeorm";
import Cliente from "./Cliente";
import{v4 as uuid} from "uuid"


@Entity()
export default class Adm{
    @PrimaryColumn()
    id!: string

    @Column()
    idCliente!: string

    @OneToOne(() => Cliente, (cliente)=> cliente.adm)
    @JoinColumn({name: "idCliente"})
    cliente?: Cliente

    constructor(){
        if(!this.id) this.id = uuid()
    } 

}     