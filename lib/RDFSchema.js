/*jslint node: true */
/*jshint laxbreak: true */
"use strict";
/*
 * Copyright (c) 2016 jasonliu0704
 * Licensed under the Apache 2 license.
 */

/*
json format schema needed for force graph
node={
	'id': int,
	'label': string,
	'uri': string
}


link = {
	'source': int,
	'target': int,
	'id': int,
	'count': int,
	'label': string,
	'uri': string
}
*/

var d3 = require('d3');
var _ = require('underscore');
var neo4j = require('neo4j-driver').v1;

var RDFSChema = function(opts) {
    console.log('start');
    var self = this;
    self.el = opts.el;
};


RDFSChema.visualize = function(data){
	var nodes = data.nodes;
	var links = data.links;
	var width = window.innerWidth;
	var height = window.innerHeight;
	var edges = [];
	
  links.forEach(function(e) { 
    var sourceNode = nodes.filter(function(n) { return n.id === e.source; })[0],
    targetNode = nodes.filter(function(n) { return n.id === e.target; })[0];
    	
    edges.push({source: sourceNode, target: targetNode, label:e.label, uri: e.uri});
    });

   links = edges;
   var graph = {};
   graph.nodes = nodes;
   graph.links = links;

	//Set up the colour scale
	var color = d3.scale.category20();

	//Set up the force layout
	var force = d3.layout.force()
	    .charge(-120)
	    .linkDistance(30)
	    .size([width, height]);

	//Append a SVG to the body of the html page. Assign this SVG as an object to svg
	var svg = d3.select("body").append("svg")
	    .attr("width", width)
	    .attr("height", height);




	//Creates the graph data structure out of the json data
	force.nodes(graph.nodes)
	    .links(graph.links)
	    .start();

	//Create all the line svgs but without locations yet
	var link = svg.selectAll(".link")
	    .data(graph.links)
	    .enter().append("line")
	    .attr("class", "link")
	    .style("marker-end",  "url(#suit)"); //Added 
	    

	//Do the same with the circles for the nodes - no 
	var node = svg.selectAll(".node")
	    .data(graph.nodes)
	    .enter().append("g")
	    .attr("class", "node")
	    .call(force.drag)
	    

	node.append("rect")
	.attr("height", 7)
	.attr('width', 14)
	.style('stroke-opacity', .5)
	.style('stroke', 'red')
    .style("fill", function (d) {
    	return color(d.type);
	})


	node.append("text")
	      .attr("dx", 10)
	      .attr("dy", ".35em")
	      .text(function(d) { return d.label })
	      .style("stroke", "gray");

	// tooltip for node
	var tooltipDiv = d3.select("body").append("div")
	.attr("class", "tooltip")
	.style("opacity", 0);

	node.on('click', function(d){
		tooltipDiv.transition()
		.duration(200)
		.style('opacity', .9);
		tooltipDiv.html(d.uri)
		.style("left", (d3.event.pageX) + "px")
		.style("top", (d3.event.pageY - 28) + "px");
	})
	.on('mouseout', function(d){
		tooltipDiv.transition()
		.duration(500)
		.style('opacity', 0);
	});




	//Now we are giving the SVGs co-ordinates - the force layout is generating the co-ordinates which this code is using to update the attributes of the SVG elements
	force.on("tick", function () {
	    link.attr("x1", function (d) {
	        return d.source.x;
	    })
	        .attr("y1", function (d) {
	        return d.source.y;
	    })
	        .attr("x2", function (d) {
	        return d.target.x;
	    })
	        .attr("y2", function (d) {
	        return d.target.y;
	    });

	    d3.selectAll("rect").attr("x", function (d) {
	        return d.x;
	    })
	        .attr("y", function (d) {
	        return d.y;
	    });
	    d3.selectAll("text").attr("x", function (d) {
	        return d.x;
	    })
	        .attr("y", function (d) {
	        return d.y;
	    });
	});

	//Arrows
	svg.append("defs").selectAll("marker")
	    .data(["suit", "licensing", "resolved"])
	  .enter().append("marker")
	    .attr("id", function(d) { return d; })
	    .attr("viewBox", "0 -5 10 10")
	    .attr("refX", 25)
	    .attr("refY", 0)
	    .attr("markerWidth", 6)
	    .attr("markerHeight", 6)
	    .attr("orient", "auto")
	  .append("path")
	    .attr("d", "M0,-5L10,0L0,5 L10,0 L0, -5")
	    .style("stroke", "#4679BD")
	    .style("opacity", "0.6");
	

	//Toggle stores whether the highlighting is on
	var toggle = 0;
	//Create an array logging what is connected to what
	var linkedByIndex = {};
	for (var i = 0; i < graph.nodes.length; i++) {
	    linkedByIndex[i + "," + i] = 1;
	};




	// search
	var optArray = [];
	for (var i = 0; i < graph.nodes.length - 1; i++) {
	    optArray.push(graph.nodes[i].label);
	}
	optArray = optArray.sort();
	$(function () {
	    $("#search").autocomplete({
	        source: optArray
	    });
	});
	function searchNode() {
	    //find the node
	    var selectedVal = document.getElementById('search').value;
	    var node = svg.selectAll(".node");
	    if (selectedVal == "none") {
	        node.style("stroke", "white").style("stroke-width", "1");
	    } else {
	        var selected = node.filter(function (d, i) {
	            return d.label != selectedVal;
	        });
	        selected.style("opacity", "0");
	        var link = svg.selectAll(".link")
	        link.style("opacity", "0");
	        d3.selectAll(".node, .link").transition()
	            .duration(5000)
	            .style("opacity", 1);
	    }
	}
}

RDFSChema.searchBox = function(){
	// create search box
	var searchDiv = document.createElement("div");
	searchDiv.setAttribute("class", "ui-widget");
	searchDiv.appendChild(document.createElement("input").setAttribute("id","search"));
	var searchBut = document.createElement("button");
	searchBut.setAttribute("type", "button");
	searchBut.setAttribute("onclick", "searchNode()");
	var t = document.createTextNode("Search");
	searchBut.appendChild(t);
	searchDiv.appendChild(searchBut);
}

RDFSChema.createSvg = function(){
	var svg = document.createElement('svg');
	svg.setAttribute('width', 960);
	svg.setAttribute('height', 600);
}

RDFSChema.getData = function(){
	var nodes = [];
	var links = [];
	
	var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "52@USA0704"));
	var session = driver.session();

	// store nodes and links
	var p1 = new Promise(function(resolve, reject){
		//store c
		session.run( 'MATCH (n)-[r:Related]->(c) return distinct c' )
		.then( function( result ) {
			//console.log(result)
		  	for(var i = 0; i < result.records.length; i++){
		  		var node = {};
		  		node.id = result.records[i].get('c').identity.low.toString();
		  		node.label = result.records[i].get('c').properties.label;
		  		node.uri = result.records[i].get('c').properties.id;
		  		node.type = result.records[i].get('c').labels[0];
		  		nodes.push(node);
		  	}    
		  	resolve();
		});
	});

	var p2 = new Promise(function(resolve, reject){

		//store n
		session.run( 'MATCH (n)-[r:Related]->(c) return distinct n')
		.then( function( result ) {
			//console.log(result)
			for(var i = 0; i < result.records.length; i++){
		  		var node = {};
		  		node.id = result.records[i].get('n').identity.low.toString();
		  		node.label = result.records[i].get('n').properties.labels;
		  		node.uri = result.records[i].get('n').properties.id;
		  		node.type = result.records[i].get('n').labels[0];
		  		nodes.push(node);
		  	}
		  	resolve();  
		});
	});

	var p3 = new Promise(function(resolve, reject){

		//store related
		session.run( 'MATCH (n)-[r:Related]->(c) return r' )
		.then( function( result ) {
			//console.log(result)
			
			for(var i = 0; i < result.records.length; i++){
		  		var link = {};
		  		link.source = result.records[i].get('r').start.low.toString();
		  		link.target = result.records[i].get('r').end.low.toString();
		  		link.id = result.records[i].get('r').identity.low.toString();
		  		if(link.count = result.records[i].get('r').properties.count === undefined){
		  			link.count = 0;
		  		}else{
		  			link.count = result.records[i].get('r').properties.count.low;

		  		}
		  		link.label = result.records[i].get('r').properties.label;
		  		link.uri = result.records[i].get('r').properties.uri;

		  		links.push(link);
		  	}
		  	resolve();  
		});
	});

	return Promise.all([p1,p2,p3])
	// finishing getting data 
	.then(function(){
		//console.log(nodes)
		//console.log(links)
		session.close();
		driver.close();
		var out = {}
		out.nodes = nodes;
		out.links = links;
		return out;
	});
}

module.exports = RDFSChema;