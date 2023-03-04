//const url = require("url")
const http= require("http")
const fs = require("fs")

const porta = 3000

const server= http.createServer((request,response) => {
    const urlInfo = require('url').parse(request.url,true)

    const name = urlInfo.query.name


    if(!name){
        fs.readFile('escrevendo.html', function (erro,data) {
            response.writeHead(200, {'Content-Type':'text/html'})
            response.write(data)
            return response.end
        })
    } else{
            fs.writeFile("arquivo.txt", name, (erro,data) => {
                response.writeHead(302, {
                    location: '/',
                })
                return response.end()
            })
    }
})

server.listen(porta, () =>{
    console.log(`servidor está rodando na porta ${porta}`)
})