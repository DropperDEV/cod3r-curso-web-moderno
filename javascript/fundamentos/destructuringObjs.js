const pessoa = {
    nome: 'Roberto',
    idade: 32,
    endereco: {
        rua: 'Sei n',
        numero: 10,
        cep: 61934140
    }
}

const {nome, idade} = pessoa;
console.log(nome,idade);
const {endereco: {rua,numero}} = pessoa
console.log(rua,numero);
const {endereco: {cep: c}} = pessoa;
console.log(c);
const {sobrenome} = pessoa;
console.log(sobrenome);
const {cabelo = true} = pessoa;
console.log(cabelo);
