var express = require('express');
var router = express.Router();

var arr = [];

//create new object for cherry
var object1 = new Object();
object1.topping = 'Cherry';
object1.quant = '3';
arr.push(object1);

//create new object for plain
var object2 = new Object();
object2.topping = 'Plain';
object2.quant = '6';
arr.push(object2);

//create new object for chocolate
var object3 = new Object();
object3.topping = 'Chocolate';
object3.quant = '2';
arr.push(object3);

//convert array into string form for JSON
var string = JSON.stringify(arr);
console.log(string);

//convert the string into a valid JSON object 
var data = JSON.parse(string);
console.log(data);

//POST
router.post('/', function(req, res, next){
  res.send({'data':data});
});

module.exports = router;
