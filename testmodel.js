var math = require("mathjs");
var LinR = require('./readcsv');

 var s = LinR.modeldef(function(res){
  
 var m = [ 
  ];
  
 var o = [ ]
;
 
  var add=0;
  //Calculating standard estimation error( sum of squared deviations of prediction)
/*for (var i in m) {

var p = res.predict(m[i]);
console.log("Original rating: "+ o[i]);
console.log("Predicted rating: "+ p);
 var mse = math.pow((o[i]-p),2); 
 add += mse;

  }
  
  var rmse = math.sqrt(add/o.length);
  
console.log("RMSE: " + rmse);
*/
var model = [2,2,0,0,0,0,0,0,1,0,0,1,1,0.46,0.54];
var pred = res.predict(model);
console.log("Predicted value: "+ pred);
  
  
 });

 