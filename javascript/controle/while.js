function getInteiroAleatorio(min,max) {
    const valor =  Math.floor(Math.random() * (max - min + 1)) + min;
    return Math.floor(valor);
}

let opcao = 0

/* while (opcao != -1) {
    opcao = getInteiroAleatorio(-1,10)
    console.log(`Opção escolhida foi opcao: ${opcao}.`)
}

console.log('Até a proxima!') */

do{
    opcao = getInteiroAleatorio(-1,10)
    console.log(`Opção escolhida foi opcao: ${opcao}.`)
}while (opcao != -1)

console.log('Até a proxima!')