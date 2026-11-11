require("dotenv").config();
const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req,res){
    res.send('Olá mundo! Meu nome é: ' + process.env.meuNome)
});

app.listen(port, function(){
    console.log('Servidor rodando na porta' + port)

});