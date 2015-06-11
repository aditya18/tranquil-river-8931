var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Hello World! this is really cool!');
});


app.get('/adi', function(request, response) {
  response.send('Hello adi! you are funny weird!');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
