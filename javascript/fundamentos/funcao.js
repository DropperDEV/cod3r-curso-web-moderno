// Função sem retorno 
function imprimirSoma(a,b){
    console.log(a+b);
}

imprimirSoma(2,3)
imprimirSoma(2) // b não é 0 nem inteiro nem string, ele é undefined
imprimirSoma(2,10,4,5,6,7,8,9,10)

// Função com retorno

function soma(a, b=1){
    return a+b
}

console.log(soma(2,3));
console.log(soma(2));
