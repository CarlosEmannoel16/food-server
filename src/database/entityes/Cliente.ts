import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from 'typeorm'
import Endereco from './Endereco'
import { v4 as uuid } from 'uuid'
import Adm from './Adm'

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
    nascimento!: string

    @Column()
    telefone!: string

    @Column()
    senha!: string

    @OneToMany(() => Endereco, (endereco) => endereco.idEndereco)
    @JoinColumn()
    endereco?: Endereco

    @OneToOne(() => Adm, (adm)=> adm.cliente)
    adm?: Adm

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}