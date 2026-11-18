require("dotenv").config();
const express = require('express');
const app = express();
const port = 3000;

//Middeware formata o body para JSON
app.use(express.json());
//Para formatar os dados do formulário ()x-www-from-urlencoded()
app.use(express.urlencoded({extended: true}));


app.get('/', function(req,res){
    res.send('Bem Vindo')
});

app.post('/produtos', (req, res) => {
    let produto = req.body
    res.send(`O produto foi criado! Nome: ${produto.nome}, Valor: ${produto.preco}`)
});


app.put('/produtos/:id', (req,res) =>{
    let id = req.params.id
    res.send(`O produto ${id} foi alterado.`)
});

app.delete('/produtos/:id', (req,res) =>{
    let id = req.params.id
     res.send(`O produto ${id} foi excluído.`)
});

app.listen(port, function(){
    console.log('Servidor rodando na porta' + port)

});


