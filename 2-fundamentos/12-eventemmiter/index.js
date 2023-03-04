const eventEmitter = require('events')
const evento = new eventEmitter()


evento.on('start', () => {
    console.log("Durante")
})

console.log('antes')

evento.emit('start')

console.log('depois')