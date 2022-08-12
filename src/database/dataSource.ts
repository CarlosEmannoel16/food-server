import {DataSource} from 'typeorm'
import Cliente from './entityes/Cliente'
import Endereco from './entityes/Endereco'
import Prato from './entityes/Prato'

const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "surane2210",
    database: "postgres",
    entities: [Cliente, Prato, Endereco]
})

export default dataSource