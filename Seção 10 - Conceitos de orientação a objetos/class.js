class Cachorro {
    constructor(raca, cor) {
        this.raca = raca
        this.cor = cor
    }

    latir() { console.log('au au') }

}

// Para passar mais propriedades para uma classe
// é necessário adicionar via prototype, dessa maneira,
// como todo cachorro tem 4 patas, setando patas = 4 via
// prototype não é mais necessário passar isso também por
// parâmetro. Tornando ese valor de patas padrão
Cachorro.prototype.raca = 'SRD'
Cachorro.prototype.patas = 4

let labrador = new Cachorro('Labrador', 'Amarelo')

console.log(labrador.patas)

labrador.latir()

console.log(Cachorro.prototype.raca)
console.log(labrador.raca)
