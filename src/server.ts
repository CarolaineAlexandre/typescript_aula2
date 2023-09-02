import express from 'express'
import dotenv from 'dotenv'
import dataBase from './database/ormconfig'
import routes from './routes'
import cors from 'cors'



dotenv.config()
const app = express()
const port = process.env.PORT || 3000

/*app.get('/',(requisicao,resposta)=>{
    console.log(requisicao)
    resposta.send('Olá mundo!')
})*/

/*app.get('/user',(requisicao,resposta)=>{
    console.log(requisicao)
    resposta.send('Olá mundo!')
})*/

// //app.listen executa a porta port e volta a mensagem
// app.listen(port, ()=>{ // ()=>{} function anonima -> criada assim para usar somente uma vez
//     console.log(`Servidor rodando na port ${port}`)
// })
app.use(express.json()) // habilita o express para receber dados no formato json
app.use(routes) // habilita as rotas

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`)
    console.log(`Banco de dados`, dataBase.isInitialized ? 'inicializado' : 'não inicializado')
  })  //baixar extensão sqlite view

  app.use(cors()) // habilita o CORS
  // app.use(cors({
  //     origin: ['http://localhost:3000', 'https://meuapp.com']
  //   }))

