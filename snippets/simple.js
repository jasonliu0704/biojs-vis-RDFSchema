// if you don't specify a html file, the sniper will generate a div
var app = require("biojs-vis-RDFSchema");


new app({el: yourDiv, name: 'biojs'});



var p1 = new Promise(function(resolve, reject){
	
	var data = app.getData();
	resolve(data)
	console.log(data);
	console.log("getdata")

})
.then(function(data){
	console.log("visualize")
	app.visualize(data);
	//app.searchBox();
});



