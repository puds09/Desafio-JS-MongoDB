const express = require('express')
const app = express()
const db = require('../config/dbConnect.js')
const rotas = require('../routes/rotas');
// const bodyParser = require('body-parser')

// Permite a renderização do formulário
app.set('view engine', 'ejs');

// Testando conexão com o MongoDB usando mongoose (importado da pasta config)
// Mongoose deve printar no console uma mensagem a cada vez que um arquivo for modificado e salvo
db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('conexão com o banco feita com sucesso')
})

// Libera o acesso do Body da Requisição (default = bloqueado pelo express)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', rotas);

app.listen(process.env.PORT || 3000);
