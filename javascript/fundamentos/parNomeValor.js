// par nome/valor

const saudacao = 'Opa' // contexto léxico1

function exec(){
    saudacao = 'AUEPA' // saudacao aqui é diferente de lá fora
    return saudacao
}

//Objetos são grupos aninhados de pares nomes/valor
const Cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua muito massa',
        numero: 32,
    }
}
console.log(Cliente);