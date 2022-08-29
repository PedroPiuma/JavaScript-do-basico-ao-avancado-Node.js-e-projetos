class Cliente {
    constructor(nome, documento) {
        this.nome = nome
        this.documento = documento
        this.saldoTotal
    }
}

class ContaBancaria {
    constructor(cliente, saldo = 0) {
        if (this.constructor === ContaBancaria) return new Error('Essa classe é abstrata!')
        this.cliente = cliente
        this.saldo = saldo
    }

    depositar(valor) { valor > 0 ? this.saldo += +valor : new Error('Valor de depósito inválido!') }
    sacar(valor) { valor <= this.saldo ? this.saldo -= valor : new Error('Valor de sacar inválido!') }
    transfir(valor, contaAlvo) {
        const autorizaCliente = this.cliente.documento === contaAlvo.cliente.documento && this.cliente.nome === contaAlvo.cliente.nome
        const autorizaValor = valor <= this.saldo
        if (autorizaCliente && autorizaValor) {
            console.log('Saldo da conta: ', this.saldo, '|| Saldo conta alvo: ', contaAlvo.saldo, '|| Valor de transf: ', valor)
            this.sacar(valor)
            contaAlvo.depositar(valor)
            console.log('Saldo da conta: ', this.saldo, '|| Saldo conta alvo: ', contaAlvo.saldo, '|| Valor de transf: ', valor)
        }
    }
}

class ContaCorrente extends ContaBancaria { constructor(cliente, saldo) { super(cliente, saldo) } }
class ContaPoupanca extends ContaBancaria {
    constructor(cliente, saldo) {
        super(cliente, saldo)
        this.juros = 2.75
    }
}

class ContaPoupancaX extends ContaPoupanca {
    constructor(cliente, saldo) {
        super(cliente, saldo)
        this.juros = this.juros * 2
    }
}

const cliente1 = new Cliente('Luís', '04782369050')
let cc1 = new ContaCorrente(cliente1)
cc1.depositar('123d12')
cc1.depositar('500')
cc1.depositar(500)
cc1.sacar(125)
cc1.sacar(165464798797)


const cp1 = new ContaPoupanca(cliente1)
cp1.depositar(171)
cp1.sacar(21)


cc1.transfir(100, cp1)


const cpX = new ContaPoupancaX(cliente1)
cpX.depositar(416)
cpX.sacar(16)
// console.log(cpX)

// console.log(cliente1)