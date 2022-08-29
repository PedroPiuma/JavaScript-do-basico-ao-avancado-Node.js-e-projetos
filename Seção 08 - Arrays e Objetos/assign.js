let objetoA = {
    pro1: 'teste',
    pro2: 'teste2',
}

let objetoB = {
    prop3: 'propriedade'
}

console.log(objetoA)
const teste = Object.assign(objetoA, objetoB)
console.log(objetoA)
console.log(objetoB)

console.log(teste)
console.log(teste === objetoA)
