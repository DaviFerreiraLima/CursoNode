import inquirer from 'inquirer'

import chalk from "chalk"

inquirer.prompt([
    {name:'nome', mensagem: 'Qual seu nome?'},
    {name:'idade', mensagem: 'Qual a sua idade?'}
]).then((respostas) =>{
    const resposta = (`Sua idade é ${respostas.idade} e seu nome é)
    ${respostas.nome}`)

    console.log(chalk.bgYellow.black(resposta))

}).catch((err) => console.log(err))
