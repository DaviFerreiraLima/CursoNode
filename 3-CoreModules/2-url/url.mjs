import url from 'url'

const address = 'https://www.meusite.com.br/catalogo?produtos=cadeira'

const parsedUrl= new url.URL(address)

console.log('host:' + parsedUrl.host)
console.log('Nome do pacote:' + parsedUrl.pathname)
console.log('Pesquisa:' + parsedUrl.search)
console.log('Nome dos parametros:' + parsedUrl.searchParams)
console.log('Nome do produto pesquisado:' + parsedUrl.searchParams.get('produtos'))
