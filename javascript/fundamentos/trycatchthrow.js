function tratarErroeLancar(erro){
    throw {
    nome: erro.nome,
    id: erro.id,
    date: new Date
}
}
function palavraCapslock (obj){
    try{      
        return obj.name.toUpperCase() + '!!!!'
    }catch(e){
        tratarErroeLancar(e)
    }
    finally{
        console.log('final')
    }
}

const obj = {
    nome: 'Diego',
    idade: 35,
    peso: 80    
}

console.log(palavraCapslock(obj))