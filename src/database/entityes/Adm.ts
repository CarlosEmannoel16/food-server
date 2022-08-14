import { Entity, Column, OneToOne, JoinColumn } from "typeorm";
import Cliente from "./Cliente";


@Entity()
export default class Adm{
    @Column()
    idUsuario!: string


    @OneToOne(() => Cliente)
    @JoinColumn()
    cliente?: Cliente

}