var http = require('http')

function handle(request, response) {
  response.writeHead(200, {
    'Content-Type': 'text/html'
  })

  response.write('<!DOCTYPE HTML>')
  response.write('<html>')
  response.write('<body>')
  response.write('<h1>Hello from http module</h1>')
  response.write('</body>')
  response.write('</html>')
}

var server = http.createServer(handle)

server.listen(3333, function () {
  console.log('Server is listening at port 3333')
})