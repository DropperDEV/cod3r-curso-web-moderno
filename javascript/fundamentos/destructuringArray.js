const [a] = [10];
console.log(a);

const [n1, , n3 , n5 , , n8 = 0] = [1,2,3,4,5,6,7];
console.log(n1,n3,n5,n8);

const [, [, nota]] = [[, 8, 8], [9,6,8]]
console.log(nota);