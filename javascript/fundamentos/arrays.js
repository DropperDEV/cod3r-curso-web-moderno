const valores = [7.7,4.4,5.5,'arroz']
console.log(valores)
console.log(valores[3])
console.log(valores[15])

valores[4]=10
console.log(valores)
console.log(valores.length)

valores.push({id:3}, false, Math,'batata', 3)
console.log(valores)

valores.pop()
delete valores[0]
console.log(valores)

console.log(typeof valores)