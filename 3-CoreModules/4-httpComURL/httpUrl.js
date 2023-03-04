const url = require("url")
const http = require("http")


const port = 3000


const server = http.createServer( (request,response) => {

    const urlInfo = require('url').parse(request.url, true)

    const name = urlInfo.query.name


    response.statusCode= 200
    response.setHeader('Contenty-type', 'text/html')
    if(!name){
        response.end('<h1>Preencha seu nome: </h1>  <form method= "get"> <input type="text" name="name"/> <input type="submit" value="enviar"/></form>')
        
    } else {
        response.end(`<h1>Seja bem vindo: ${name}!</h1>` )
    }
}      
)

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})