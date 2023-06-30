const port = 3003

const express = require('express')
const app = express()
const bd = require('./db')

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/produtos', (req, res) =>{
    res.send(bd.getProdutos())
})

app.get('/produtos/:id', (req, res) =>{
    res.send(bd.getProduto(req.params.id))
})

app.post('/produtos', (req,res,) =>{
    const produto = bd.SalvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req,res,) =>{
    const produto = bd.SalvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req,res) =>{
    const produto = bd.delProduto(req.params.id)
    res.send(produto)
})

app.listen(port, () => console.log(`Servidor executando em ${port}`))