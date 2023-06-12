console.log(a); // O JS ENTENDE QUE EXISTE UMA VARIAVEL ( var a ) mas não acha valor
var a = 3;
console.log(a);

function tuaMãe(b){
    console.log(b);
    var b = 3;
    console.log(b);
}
console.log(tuaMãe());

