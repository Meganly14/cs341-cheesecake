var express = require('express');
var router = express.Router();
var data = {"error": null, "data": [{"topping": "cherry", "quantity":2}, {"topping": "plain", "quantity":6}, {"topping": "chocolate", "quantity":3}]};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(json);
});

/*gets post*/
router.post('/', async function(req, res, next){
  var month = req.body.month.toUpperCase();
  var plain = await quantity("plain", month);
  if(plain == null){
    plain = 0;
  }
  var cherry = await quanitity("cherry", month);
  if(cherry == null){
    cherry = 0;
  }
  var chocoloate = await quanitity ("chocolate", month);
  if(chocolate == null){
    chocolate = 0;
  }
  var pastOrders = [{"topping":"cherry", "quantity":cherry},{"topping":"chocolate", "quantity":chocolate},{"topping":"plain", "quantity":plain}];
  var order_json = JSON.stringify(pastOrders);
  res.send(order_json);
})

module.exports = router;
