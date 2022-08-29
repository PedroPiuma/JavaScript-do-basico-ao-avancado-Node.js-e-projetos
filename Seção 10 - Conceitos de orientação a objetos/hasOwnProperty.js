const pessoa = { maos: 2 }
// console.log(pessoa)
const pessoaNova = Object.create(pessoa)
console.log(pessoaNova)

console.log(pessoaNova.hasOwnProperty('maos'))
pessoaNova.maos = 'teste'
console.log(pessoaNova.hasOwnProperty('maos'))

console.log(Object.getPrototypeOf(pessoaNova) === pessoa)