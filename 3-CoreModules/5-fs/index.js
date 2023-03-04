//const url = require("url")
const http= require("http")
const fs = require("fs")
const porta = 3000

const server= http.createServer((request,response) => {
    fs.readFile('mensagem.html', (erro,data) => {
        response.writeHead(200,{'Content-Type':'text/html'})
        response.write(data)
        return response.end
    })
})

server.listen(porta, () =>{
    console.log(`servidor está rodando na porta ${porta}`)
})