var express = require('express');
var mongojs = require('mongojs');
var bodyParser = require('body-parser');


var db = mongojs('contactlist', ['contactlist']);

var app = express();

app.set('port', (process.env.PORT || 5000));

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.get('/contactList', function(req, res){
	console.log("I got a GET request!!");

	db.contactlist.find(function (err, docs) {
	
		//console.log(docs);
		res.json(docs);
	});
	
});

app.post('/contactListPost', function(req,res){
	
	console.log("this is post msg");
	console.log(req.body);
	db.contactlist.insert(req.body, function(err, doc){
			res.json(doc);

	});

});

app.delete('/contactList/:id', function(req, res){
	var id = req.params.id;
	console.log(id);
	db.contactlist.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	});

});

app.get('/contactlist/:id', function(req, res){
	var id = req.params.id;
	console.log(id);
	db.contactlist.findOne({_id:mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	});

});

app.put('/contactlist/:id', function(req, res){
	var id = req.params.id;
	console.log(req.body.name);
	db.contactlist.findAndModify({query:{_id: mongojs.ObjectId(id)}, 
		update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}}, 
		new: true}, function(err, doc){
			res.json(doc);
		});
});


app.get('/', function(req,res){
	res.render('index');
});

app.get('/createRide', function(req,res){
	res.render('createRide');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
