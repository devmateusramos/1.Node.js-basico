var http = require('http')
var handle = require('./handle')

var server = http.createServer(handle)

var events = require('events')
var emiter = new events.EventEmitter()

emiter.on('say12', say)

function say() {
  console.log("I'm saying...")
}

emiter.emit('say12')


server.listen(3333, function () {
  console.log('Server is listening at port 3333')
})