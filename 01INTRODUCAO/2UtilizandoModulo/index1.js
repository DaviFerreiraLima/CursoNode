const fs = require('fs') //file System

fs.readFile('node.txt','utf8', (err, data) => {
    if(err){
        console.log(err)
        return
    }

    console.log(data)
})