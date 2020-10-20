//cria um objeto da dependência express
let express = require('express')
//vamos criar o server do express
let server = express();

//criar objeto da dependência CORS
let cors = require('cors')
//associa o servidor ao cors
server.use(cors())

let Correios = require('node-correios')
let correios = new Correios()

server.get('/:cep',(req, res) =>{
  let usuario = req.params.cep;
  correios.consultaCEP({cep:usuario})
  .then(resultado => {
    console.log(resultado)
    res.json(resultado)
  })
  .catch(erro =>{
    console.log(erro)
  })
})

//porta que o servidor vai ouvir
let porta = 3001

//definir rota 
server.get('/', (req,res) =>{
  res.json(`Aplicação em node do correios`)
})
//sobe o servidor 
server.listen(porta,()=>{
  console.log(`Servidor rodando na porta ${porta}`)
})