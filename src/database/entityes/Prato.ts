import {Entity, Column, PrimaryColumn, OneToOne, JoinColumn} from 'typeorm'
import {v4 as uuid} from 'uuid'
@Entity()
export default class Prato{
    @PrimaryColumn()
    idPrato!: string

    @Column()
    nome!: string

    @Column()
    url_foto!: string

    @Column()
    valor!: number

    @Column()
    descricao!: string

    constructor(){
        if(!this.idPrato) this.idPrato = uuid()
    }
}



