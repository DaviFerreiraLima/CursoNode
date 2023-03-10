const fs = require("fs")

    function sc(nome) {
        console.log(nome)
    }
if(!fs.existsSync('./minhapasta')){
    console.log('não existe')
}

fs.mkdirSync("minhaPasta")

if(!fs.existsSync('./minhapasta')){
    console.log('não existe')
}else {
    sc('Existe')
}
