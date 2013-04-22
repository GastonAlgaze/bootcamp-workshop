var http    = require('http');
var express = require('express');
var app     = express();

var documentos = {
  '12345': {
    id: '12345',
    contenido: 'Documento 12345, blabliblo'
  },
  '67891': {
    id: '67891',
    contenido: 'Documento 67891, blabliblo'
  }
};

app.get('/doc/:id', function (req, res) {
  var doc = documentos[req.params.id];
  if (!doc) {
    res.send(404);
  } else {
    res.json(doc);
  }
});

http.createServer(app)
    .listen(8080, function () {
      console.log('listening on http://localhost:8080');
    });