console.log('1)', '1' == 1);
console.log('2)', '2' === 2);
console.log('3)', '3'!= 3);
console.log('3.5)', '3'!== 3);

console.log('4)', '4' > 3);
console.log('4.5)', '4' < 3);
console.log('5)', '5' >= 3);
console.log('5.5)', '5' <= 3);

const d1 = new Date(0);
const d2 = new Date(0);
console.log('6)', d1 === d2);
console.log('6)', d1 == d2);
console.log('6)', d1.getTime() === d2.getTime());

console.log('12)', null == undefined);
console.log('13)', undefined === null);