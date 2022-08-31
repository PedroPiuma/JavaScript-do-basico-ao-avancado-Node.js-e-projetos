const verificarNumero = num => {
    return new Promise((resolve, reject) => {
        if (num === 2) resolve(console.log(`O número é ${num}`))
        else reject(new Error('Falhou'))
    })
}

// verificarNumero(2)
// verificarNumero(3)

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(100)
    }, 2500)
})

const p2 = Promise.resolve(5)

const p3 = new Promise((resolve, reject) => resolve(10))

Promise.all([p1, p2, p3]).then(values => console.log(values))