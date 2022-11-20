let num = [0, 1, 2, 3, 4, 5]
num.push(0)

console.log (`Esse vetor tem ${num.length} posiçoes`)
console.log (`Esse vetor em ordem crescente fica ${num.sort()}`)
console.log (`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(1)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor esta na posição ${pos}`)
}