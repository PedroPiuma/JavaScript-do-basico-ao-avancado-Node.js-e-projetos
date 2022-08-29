class Carrinho {
    constructor(itens, qtdTotal, valorTotal) {
        this.itens = itens
        this.qtdTotal = qtdTotal
        this.valorTotal = valorTotal
    }

    novoItem(novoItem) {
        const { id, nome, qtd, preco } = novoItem
        const existe = this.itens.find(item => item.id == id)

        if (existe) this.itens.forEach(item => { if (item.id == novoItem.id) item.qtd += novoItem.qtd })
        else if (!this.itens.find(item => item.id == novoItem.id)) this.itens.push(novoItem)

        this.qtdTotal += qtd
        this.valorTotal += qtd * preco
    }

    deleteItem(id) {
        this.itens.forEach((item, index) => {
            if (item.id == id) {
                this.itens.splice(index)
                this.qtdTotal -= item.qtd
                this.valorTotal -= item.qtd * item.preco
            }
        })
    }
}

let car = new Carrinho([
    { id: 1, nome: 'Camisa', qtd: 1, preco: 100 },
    { id: 2, nome: 'Calca', qtd: 2, preco: 50 },
], 3, 200)

car.novoItem({
    id: 1,
    nome: 'Camisa',
    qtd: 4,
    preco: 100
})

car.deleteItem(2)

car.novoItem({
    id: 3,
    nome: 'Short',
    qtd: 9,
    preco: 10
})

console.log(car)
