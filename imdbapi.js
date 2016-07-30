var lyric = require("lyric-node");

var input = new Array();
input['x'] = new Array();	input['y'] = new Array();
input['x'][0] = 1;		input['y'][0] = 0.5;
input['x'][1] = 2;		input['y'][1] = 1.6;	
input['x'][2] = 3;		input['y'][2] = 4.5;
input['x'][3] = 4;		input['y'][3] = 7.6;
input['x'][4] = 5;		input['y'][4] = 10.1;

var estimationInput = new Array();
estimationInput['x'] = new Array();	
estimationInput['x'][0] = 6;
estimationInput['x'][1] = 7;
estimationInput['x'][2] = 8;


console.log(input);
var model = lyric.buildModel(input);

var data = lyric.applyModel(estimationInput,model);
console.log(data);






