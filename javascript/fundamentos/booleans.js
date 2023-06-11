let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3) // ! = falso !! falso falso isso é verdadeiro
console.log(!!-1) // todo número inteiro é true
console.log(!!' ') // string com caractere no caso espaço 
console.log(!!'texto')
console.log(!![]) // listas vazias
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || '   '))

let nome = 'Lucas'
console.log(nome || 'Desconhecido')