

    const colorir = require('chalk')
    const prompt = require('prompt-sync') ()
    const name = prompt ('Qual seu nome?:')
    console.log(colorir.bgBlue(`Oi, ${name}`))
