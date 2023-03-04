const fs = require("fs")

fs.unlink('arquivo.txt', (err) =>{

    if(err){
        console.log("erro")
    }else{
        console.log("arquvo removido")
    }
    
})
