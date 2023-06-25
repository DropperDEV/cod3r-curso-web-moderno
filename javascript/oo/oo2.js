const Carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 2010,
    valor: 20000,
    Proprietario: {
        nome: 'José',
        idade: 20,
        endereco: {
            logradouro:'Rua ABC',
            numero: 1000,
            complemento: 'A',
            bairro: 'Vila fuzil',
            cidade: 'BigDick',
            uf: 'AL'
        }
    },
    dirigidores: [
            {
            nome: 'José',
            idade: 20,
        },
        {
            nome: 'Ana',
            idade: 45,
        }
    ]
}

console.log(Carro.Proprietario.endereco.logradouro)
console.log(Carro);