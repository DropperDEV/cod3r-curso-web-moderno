const JurosSimples = (CapitalInicial, TaxaJuros, TempoAplicar) =>{
    return CapitalInicial * TaxaJuros * TempoAplicar
}

const JurosCompostos = (CapitalInicial, TaxaJuros, TempoAplicar) =>{
    return CapitalInicial*Math.pow((1-TaxaJuros), TempoAplicar)
}

console.log(JurosSimples(1000, 0.05, 30))
console.log(JurosCompostos(100,0.05, 30));