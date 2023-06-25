function criarpessoa (name, yr){
    this.name = name
    this.yr = yr

    this.falar = function (){
        console.log(`Meu nome é ${this.name} e minha idade é ${this.yr}`)
    }
}

const p1 = new criarpessoa('James',17)
p1.falar()
