import { DataSource } from "typeorm";
import dotenv from 'dotenv'
import { join } from "path";

dotenv.config() // carrega as variáveis de ambiente do arquivo .env

 const dataBase = new DataSource({
     type: 'sqlite',
     database: process.env.DATABASE || './db.sqlite',
     entities: [
      // './src/models/*.ts'
      join(__dirname, '..', 'models/*.{ts,js}')
     ],
     logging: true, // log das queries executadas - escreve todo o comando sendo rodado
     synchronize: true // cria as tabelas automaticamente -> ele apaga tudo e cria novamente
   })


  dataBase.initialize() //ele devolve uma promise
  .then(() => { //quando
    console.log(`Banco de dados inicializado`);
  })
  .catch((erro) => { //se não der certo
    console.error(`Erro ao inicializar o banco de dados`, erro);
  })

export default dataBase
