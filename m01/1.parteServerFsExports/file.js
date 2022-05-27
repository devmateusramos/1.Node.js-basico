var fs = require('fs')

fs.writeFile('data.txt', 'Hello world from fs node', function (err) {
  if (err) {
    throw err
  }
})