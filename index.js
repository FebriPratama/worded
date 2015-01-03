var http    = require('http');
var url     = require('url');
var wordnet = require('wordnet');

http.createServer(function(req, res) {
  var route = url.parse(req.url, true);

  if (route.pathname !== '/' || !route.query.word) {
    res.writeHeader(400, {'Content': 'application/json'});
    res.end(JSON.stringify({
      status: 400,
      message: 'Bad request.'
    }));
  }
  else {
    wordnet.lookup(route.query.word, function(err, definitions) {
      if (err) {
        var status = (err.message === 'Definition(s) not found.') ? 404 : 500;

        res.writeHeader(status, {'Content': 'application/json'});
        res.end(JSON.stringify({
          status: status,
          message: err.message
        }));
      }
      else {
        res.writeHeader(200, {'Content': 'application/json'});
        res.end(JSON.stringify({
          status: 200,
          definitions: definitions
        }));
      }
    });
  }
}).listen(process.env.PORT || 5000);
