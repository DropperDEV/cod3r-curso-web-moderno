let numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
}
console.log('fora =', numero); // ele respeita escopo mas se declarado no universal, então será global