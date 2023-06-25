const Calcbase = (n1,n2) => {
    return `
    Soma: ${n1+n2} 

    Subtração: ${n1-n2} 

    Multiplicação: ${n1*n2} 

    Divisão: ${n1/n2} 

    Potenciação: ${Math.pow(n2,n1)} 

    Resto: ${n1%n2} `
}

console.log(Calcbase(2,3))