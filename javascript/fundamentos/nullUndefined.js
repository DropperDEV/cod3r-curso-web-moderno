let valor // não inicializada
console.log(valor)

valor = null //ausência de valor
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined. Já que o sistema que decide, e undefined não é um tipo e sim uma situação atual
console.log(!!produto.preco)
// delete produto.preco // forma de deletar uma coluna de objeto
console.log(produto)

produto.preco = null // sem preço já que é null = nulo
