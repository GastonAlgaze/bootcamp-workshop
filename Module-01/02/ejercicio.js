var http = require('http');

http.createServer(function (req, res) {
  if (req.url === '/hello') {
    return res.end('hola mundo');
  }

}).listen(8080, function () {
  console.log('listening on http://localhost:8080');
});