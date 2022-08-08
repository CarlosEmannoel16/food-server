import { Column, Entity, PrimaryColumn } from 'typeorm'

import {v4 as uuid} from 'uuid'

@Entity()
export default class Cliente {
    @PrimaryColumn()
    id!: string

    @Column()
    name!: string

    @Column()
    cpf!: string

    @Column()
    email!: string

    @Column()
    telefone!: string

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}