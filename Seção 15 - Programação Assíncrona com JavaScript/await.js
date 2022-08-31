const somaComDelay = (a, b) => new Promise(resolve => setTimeout(() => resolve(a + b), 2000))

const soma = async (a, b, c, d) => {
    let x = somaComDelay(a, b)
    let y = somaComDelay(c, d)
    return await x + await y
}

soma(2, 4, 6, 8).then(x => console.log(x))
