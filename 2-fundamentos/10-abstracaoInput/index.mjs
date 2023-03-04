/*const ler = require('prompt-sync')()

let davi = ler('Davi é lindo?/n')
console.log(davi)
*/
import ler from 'readline'

const leia =ler.createInterface({
    input: process.stdin,
    output:process.stdout
})
//const leia = ler()

 leia.question('Davi é lindo?' , (mensagem)=>{
    console.log(mensagem)
    leia.close
 })



    
