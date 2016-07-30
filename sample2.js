/*var sam1 = require("./sample1.js");
sam1.testobj("Print me");*/

const square = require('./sample1.js');
var mySquare = square(2);
console.log("Circumference : " + mySquare.obj.circumference);
console.log("The area of my square is "+  mySquare.obj.area());

