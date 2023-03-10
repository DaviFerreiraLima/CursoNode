//const url = require("url")
const http= require("http")
const fs = require("fs")
const url = require('url')

    const porta = 3000

    const server= http.createServer((request,response) => {
    const query = url.parse(request.url,true)

    const filename = query.pathname.substring(1)


    if(filename.includes('html')){
        if(fs.existsSync(filename)){

            fs.readFile(filename, function (erro,data) {
                response.writeHead(200, {'Content-Type':'text/html'})
                response.write(data)
                return response.end
            })
        }else{
            fs.readFile('404.html',function (erro,data) {
                    response.writeHead(404, {
                        'Content-Type': 'text/html'
                      })
                    response.write(data)
                return response.end
            })
    } 
    } 
})


server.listen(porta, () =>{
    console.log(`servidor está rodando na porta ${porta}`)
})