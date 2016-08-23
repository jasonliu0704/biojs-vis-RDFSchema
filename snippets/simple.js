// if you don't specify a html file, the sniper will generate a div
var app = require("biojs-vis-RDFSchema");


// data from neo4j
var dbData;

new app({el: yourDiv, name: 'biojs'});

var $ = app.jQuery();

// add filter box
$('<input type="text" id="filterBox" name="search" placeholder="Filter..">').appendTo("body");
$('#filterBox').hide();

var checkExist = "SELECT (count(distinct ?type) as ?count) WHERE { <@input> a ?type . FILTER (!isBlank(?s)) }"
// get graph data 
var p1 = new Promise(function(resolve, reject){
	
	var data = app.getData();
	resolve(data)
	console.log(data);
	console.log("getdata")

})
.then(function(data){
	dbData = data;
	console.log(data);
	app.visualize(dbData);

	// filter validation
	$('#filterBox').show();
});

// listen on filter box change to start processing and visualiaing data
$('#filterBox').on('change', function(e){
	//validate filter
	var client = app.tool();
	var input = this.value;
	if(!input) return;
	client.query (checkExist.replace('@input', input), function(err, res){
		debugger;
		if(err){
			console.error(err);
			return;
		}
		// parse data on valid input
		if(res){
			
			// proccess graph data according to input data
			app.parseInput(client,input, dbData).then(
				function(){
					//visulization
					console.log('visualization')
					app.visualize(dbData);
				});
		}
	});
});




