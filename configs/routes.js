var mongoose = require('mongoose');  //this is the mongoose MODULE.
require('./mongoose.js'); //this is the mongoose.js FILE

var express = require('express');
var router = express.Router();

var Element = mongoose.model('Element');
// module.exports = function Routes(app){
	// GET Home page of app
	router.get('/', function(req,res){ 
		res.render('index', { title: 'Elementary' }); 
	}); 

	//GET index of all elements
	router.get('/api/elements', function(req,res){
		Element.find({}, function(errors, results){
			res.json(results);
		});
	});

	//SHOW detail for element
	router.get('/api/elements/:id', function(req,res){
		Element.find({_id: req.params.id}, function(errors, result){
			console.log('Pulled element ', result);
			res.json(result);
		})
	});


module.exports = router;