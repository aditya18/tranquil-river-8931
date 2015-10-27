var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));



/*app.get('/', function(request, response) {
  response.send('Hello World! this is really cool!');
});
*/

//app.get('/adi', function(request, response) {
  //response.send('Hello adi! you are funny weird!');
//});

app.get('/', function(req,res){
	res.render('index');
});

app.get('/createRide', function(req,res){
	res.render('createRide');
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
