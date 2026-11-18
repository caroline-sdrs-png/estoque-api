const valorProduto = function(req, res, next){
    let preco = req.body.preco
    if (preco < 100) {
        //Chuta pra fora.
        res.send (`Não autorizado, é menor que 100`)
    } else {
        next()
    }

}

module.exports = valorProduto