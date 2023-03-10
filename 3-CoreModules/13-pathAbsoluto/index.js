const path = require('path')

//path absoluto

console.log(path.resolve('teste.txt'))


//formar path

const pastaInter = 'Relatorios'
const nomeDoArq= "Matheus.txt"

const finalPath = path.join('/','arquivos', pastaInter, nomeDoArq)

console.log(finalPath)