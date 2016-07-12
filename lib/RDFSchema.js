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
	var width = 1000;
	var height = 1000;
	var edges = [];
  links.forEach(function(e) { 
    var sourceNode = nodes.filter(function(n) { return n.id === e.source; })[0],
    targetNode = nodes.filter(function(n) { return n.id === e.target; })[0];
    	
    edges.push({source: sourceNode, target: targetNode, label:e.label, uri: e.uri});
    });

   links = edges;

	var force = d3.layout.force()
      .nodes(nodes) 
      .links(links)
      .size([width,height]) 
      .linkDistance(150) 
      .charge([-400]);

    force.start();
    console.log(nodes);
    console.log(links);

     var svg = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

    // add edges
    var svg_edges = svg.selectAll("line")
    .data(links)
    .enter()
    .append("line")
    .style("stroke", "#ccc")
    .style("stroke-width", 1);

    var color = d3.scale.category20();

    // add nodes
    var svg_nodes = svg.selectAll("circle")
    .data(nodes)
    .enter()
    .append("circle")
    .attr("r", 20)
    .style("fill", function(d,i){
    	return color(i);
    })
    .call(force.drag);

    // add text to nodes
	var svg_texts_nodes = svg.selectAll("text")
	.data(nodes)
	.enter()
	.append("text")
	.style("fill", "black")
	.attr("dx", 20)
	.attr("dy", 8)
	.text(function(d){
		return d.label;
	});

	/*// add text to edges
	var svg_texts_edges = svg.selectAll("text")
	.data(links)
	.enter()
	.append("text")
	.style("fill", "black")
	.attr("dx", 20)
	.attr("dy", 8)
	.text(function(d){
		return d.label;
	});*/

	force.on("tick", function(){
	    // update edges position
	    svg_edges.attr("x1",function(d){ return d.source.x; })
	        .attr("y1",function(d){ return d.source.y; })
	        .attr("x2",function(d){ return d.target.x; })
	        .attr("y2",function(d){ return d.target.y; });
	 
	    //update nodes position
	    svg_nodes.attr("cx",function(d){ return d.x; })
	        .attr("cy",function(d){ return d.y; });
	 
	    //update text position for nodes
	    svg_texts_nodes.attr("x", function(d){ return d.x; })
	       .attr("y", function(d){ return d.y; });

	   /* //update text position for edges
	    svg_texts_edges.attr("x", function(d){ return d.x; })
	       .attr("y", function(d){ return d.y; });*/
	 });
}


RDFSChema.getData = function(){
	var nodes = [];
	var links = [];
	
	var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "52@USA0704"));
	var session = driver.session();

	// store nodes and links
	var p1 = new Promise(function(resolve, reject){
		//store c
		session.run( 'MATCH (n)-[r:Related{label:"inverseOf"}]->(c) return c' )
		.then( function( result ) {
			//console.log(result)
		  	for(var i = 0; i < result.records.length; i++){
		  		var node = {};
		  		node.id = result.records[i].get('c').identity.low.toString();
		  		node.label = result.records[i].get('c').properties.label;
		  		node.uri = result.records[i].get('c').properties.id;
		  		nodes.push(node);
		  	}    
		  	resolve();
		});
	});

	var p2 = new Promise(function(resolve, reject){

		//store n
		session.run( 'MATCH (n)-[r:Related{label:"inverseOf"}]->(c) return distinct n')
		.then( function( result ) {
			//console.log(result)
			for(var i = 0; i < result.records.length; i++){
		  		var node = {};
		  		node.id = result.records[i].get('n').identity.low.toString();
		  		node.label = result.records[i].get('n').properties.labels;
		  		node.uri = result.records[i].get('n').properties.id;
		  		nodes.push(node);
		  	}
		  	resolve();  
		});
	});

	var p3 = new Promise(function(resolve, reject){

		//store related
		session.run( 'MATCH (n)-[r:Related{label:"inverseOf"}]->(c) return r' )
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