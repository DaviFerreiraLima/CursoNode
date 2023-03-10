const fs = require("fs")

    
    
    fs.stat("novoarquivo.txt", (erro,stats) =>{
        if(erro){
        console.log(erro)
        return
        }
        console.log(stats.isFile())
        console.log(stats.isDirectory())
        console.log(stats.isSymbolicLink())
        console.log(stats.ctime)
        console.log(stats.size)
})

   
