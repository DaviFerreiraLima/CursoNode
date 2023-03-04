import http from 'http'

const port = 3000


const server = http.createServer( (request,response) => {
    response.statusCode= 200
    response.setHeader('contenty-type', 'text/html')
    response.end('<h1>Olá , tudo bem? </h1> <p> testando a atualização</p>')
}
)

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})