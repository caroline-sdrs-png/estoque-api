const dobroValor = function (req,res,next) {
    const dobrado = req.body.preco
    req.body.preco = dobrado
    next()
}

module.exports = dobroValor