class Mamifero {
    constructor(patas) {
        this.patas = patas
    }
}

let coiote = new Mamifero(4)

class Cachorro extends Mamifero {
    constructor(patas, raca) {
        super(patas, patas)
        this.raca = raca
    }
    latir() { console.log('au au') }
}

let pug = new Cachorro(4, 'Pug')
pug.latir()

console.log(new Cachorro instanceof Mamifero)
console.log(coiote instanceof Mamifero)
