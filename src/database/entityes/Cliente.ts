import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm'
import Endereco from './Endereco'
import {v4 as uuid} from 'uuid'

@Entity()
export default class Cliente {
    @PrimaryColumn()
    id?: string

    @Column()
    name!: string

    @Column()
    cpf!: string

    @Column()
    email!: string

    @Column()
    nascimento!: string

    @Column()
    telefone!: string

    @Column()
    senha!: string

     @OneToMany(()=> Endereco, (endereco) => endereco.idEndereco)
     @JoinColumn()
     endereco?: Endereco

    constructor(){
        
        if(!this.id){
            this.id = uuid()
        }
    }
}