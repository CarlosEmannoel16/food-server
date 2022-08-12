import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import {v4 as uuid} from 'uuid'
import Cliente from "./Cliente";

@Entity()
export default class Endereco{

    @PrimaryColumn()
    idEndereco!: string

    @Column()
    rua!: string

    @Column()
    bairro!: string

    @Column()
    cidade!: string


    // @ManyToOne(()=> Cliente, (cliente) => cliente.id)
    // @JoinColumn()
    // cliente?: Cliente


    constructor(){
        if(!this.idEndereco) this.idEndereco = uuid()
    }
}