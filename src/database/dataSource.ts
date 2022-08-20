import { DataSource } from 'typeorm'
import Adm from './entityes/Adm'
import Cliente from './entityes/Cliente'
import Endereco from './entityes/Endereco'
import Prato from './entityes/Prato'
import dotenv from 'dotenv'

dotenv.config()

const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "postgres",
    entities: [Cliente, Prato, Endereco, Adm]
})

// const dataSource = new DataSource({
//     type: "postgres",
//     host: process.env.HOST_HEROKU,
//     port: parseInt(process.env.PORT_HEROKU as string),
//     username: process.env.USERNAME_HEROKU,
//     password: process.env.PASSWORD_HEROKU,
//     database: process.env.DATABASE_HEROKU,
//     entities: [Cliente, Prato, Endereco, Adm]
// })

export default dataSource