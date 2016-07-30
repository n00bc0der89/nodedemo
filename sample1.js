/*exports.testobj = function(test){
return console.log(test);    
    
}*/

module.exports = (width) => {
    var obj = {};
    
    obj.circumference = 3;
    obj.area = () => width * width;
  return {
    obj
  };
}