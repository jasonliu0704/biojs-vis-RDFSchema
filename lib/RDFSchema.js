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
var font = 12;
var rect_padding = 2;
var rectH = 30;


var d3 = require('d3');
var _ = require('underscore');
var neo4j = require('neo4j-driver').v1;
var toolTip = require('d3-tip');
toolTip(d3)
// setup sparql client
/*var SparqlClient = require('sparql-client');
var client = new SparqlClient('http://www.ebi.ac.uk/rdf/services/atlas/sparql');*/

var sparql = require('jsparql');
var client = new sparql('http://www.ebi.ac.uk/rdf/services/atlas/sparql');
var $ = require('jquery');

var RDFSChema = function(opts) {
    var self = this;
    self.el = opts.el;
};


RDFSChema.jQuery = function(){
	return $;
}
RDFSChema.tool = function(){
	return client;
}
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

	// set up data
	var graph = {};
	graph.nodes = nodes;
	graph.links = edges;

	//Set up the colour scale
	var color = d3.scale.category20();

	//Set up the force layout
	var force = d3.layout.force()
	    .charge(-500)
		.theta(0.1)
	    .gravity(0.7)
	    .linkDistance(200)
	    .size([width, height]);

	//Append a SVG to the body of the html page. Assign this SVG as an object to svg
	var svg = d3.select("body").append("svg")
	    .attr("width", width)
	    .attr("height", height)
	    .attr('viewBox','0 0 '+Math.min(width,height)+' '+Math.min(width,height))



	//Creates the graph data structure out of the json data
	force.nodes(graph.nodes)
	    .links(graph.links)
	    .start();


	//Create all the line svgs but without locations yet
	var edges = svg.selectAll("line")
	    .data(graph.links)
	    .enter()
		.append("line")
	    .attr('id', function(d, i){return 'edge' + i;})
	    .style("marker-end",  "url(#arrowhead)") //Added 
	    .style('stroke-width', function(d){
	    	return d.count;
	    })
	    .style("pointer-events", "none");
	

	//Set up tooltip
	var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {

    return "<strong>Uri:</strong> <span style='color:red'>" + d.uri + "</span>";
  })

  svg.call(tip);
	   

	//Do the same with the circles for the nodes - no 
	var node = svg.selectAll(".rect")
	    .data(graph.nodes)
	    .enter().append("g")
	    .attr("class", "node")
	    .call(force.drag)
	    .on('click', tip.show)
      	.on('mouseout', function() {
      d3.select(".d3-tip")
      .transition()
        .delay(100)
        .duration(1000)
        .style("opacity",0)
        .style('pointer-events', 'none')
      })


	node.append('rect')
	.attr('height', font + rect_padding)
	.attr('width', function(d){
		if(d.label){
			return (d.label.length/2 * font) + 'px'; 
		}else{
			return font + 'px';
		}
	})
	.style('stroke-width', 1)
	.style('stroke', 'black')
    .style("fill", function (d) {
    	if(d.label){
    		return 'green';
    	}else{
    		return 'red';
    	}
	});
	


	node.append("text")
	//.attr('text-anchor', 'middle')
	.text(function(d){
		//console.log(d)
		return d.label;
	})
	.style('font-size',font + 'px')
	.style('color', 'black')
	.attr("dy", font + 'px');





	var edgepaths = svg.selectAll(".edgepath")
		.data(graph.links)
		.enter()
		.append('path')
		.attr({'d': function(d) {return 'M '+d.source.x+' '+d.source.y+' L '+ d.target.x +' '+d.target.y},
			'class':'edgepath',
			'fill-opacity':1,
			'stroke-opacity':1,
			'fill':'blue',
			'stroke':'red',
			'id':function(d,i) {return 'edgepath'+i}})
		.style("pointer-events", "none");

	var edgelabels = svg.selectAll(".edgelabel")
		.data(graph.links)
		.enter()
		.append('text')
		.style("pointer-events", "none")
		.attr({'class':'edgelabel',
			'id':function(d,i){return 'edgelabel'+i},
			'dx':80,
			'dy':0,
			'font-size':10,
			'fill':'#aaa'});

	edgelabels.append('textPath')
		.attr('xlink:href',function(d,i) {return '#edgepath'+i})
		.style("pointer-events", "none")
		.text(function(d,i){
			return d.label
		});


	svg.append('defs').append('marker')
		.attr({'id':'arrowhead',
			'viewBox':'-0 -5 10 10',
			'refX':25,
			'refY':0,
			//'markerUnits':'strokeWidth',
			'orient':'auto',
			'markerWidth':10,
			'markerHeight':10,
			'xoverflow':'visible'})
		.append('svg:path')
		.attr('d', 'M 0,-5 L 10 ,0 L 0,5')
		.attr('fill', '#ccc')
		.attr('stroke','#ccc');
/*
	//fisheye
	var fisheye = FE.fisheye.circular()
      .radius(120);
	svg.on("mousemove", function() {
      force.stop();
      fisheye.focus(d3.mouse(this));
      d3.selectAll("rect").each(function(d) { d.fisheye = fisheye(d); })
          .attr("x", function(d) { return d.fisheye.x; })
          .attr("y", function(d) { return d.fisheye.y; })
      edges.attr("x1", function(d) { return d.source.fisheye.x; })
          .attr("y1", function(d) { return d.source.fisheye.y; })
          .attr("x2", function(d) { return d.target.fisheye.x; })
          .attr("y2", function(d) { return d.target.fisheye.y; });
    });
*/

	//Now we are giving the SVGs co-ordinates - the force layout is generating the co-ordinates which this code is using to update the attributes of the SVG elements
	force.on("tick", function () {
	    edges.attr("x1", function (d) {
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

		edgepaths.attr('d', function(d){
			var path='M'+d.source.x+' '+d.source.y+' L '+ d.target.x +' '+d.target.y;
			return path;
		});

		edgelabels.attr('transform',function(d,i){
			if (d.target.x<d.source.x){
				var bbox = this.getBBox();
				var rx = bbox.x+bbox.width/2;
				var ry = bbox.y+bbox.height/2;
				return 'rotate(180 '+rx+' '+ry+')';
			}
			else {
				return 'rotate(0)';
			}
		});
	    
	    node.each(collide(1)); //Added
	});

	// collision detection
	var padding = 1, // separation between circles
	    radius=8;
	function collide(alpha) {
	  var quadtree = d3.geom.quadtree(graph.nodes);
	  return function(d) {
	    var rb = 2*radius + padding,
	        nx1 = d.x - rb,
	        nx2 = d.x + rb,
	        ny1 = d.y - rb,
	        ny2 = d.y + rb;
	    quadtree.visit(function(quad, x1, y1, x2, y2) {
	      if (quad.point && (quad.point !== d)) {
	        var x = d.x - quad.point.x,
	            y = d.y - quad.point.y,
	            l = Math.sqrt(x * x + y * y);
	          if (l < rb) {
	          l = (l - rb) / l * alpha;
	          d.x -= x *= l;
	          d.y -= y *= l;
	          quad.point.x += x;
	          quad.point.y += y;
	        }
	      }
	      return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
	    });
	  };
}
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




	/*// search
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
	}*/
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
		  		node.label = result.records[i].get('n').properties.label;
		  		node.uri = result.records[i].get('n').properties.uri;
		  		node.type = result.records[i].get('n').labels[0];
		  		nodes.push(node);
		  	}
		  	resolve();  
		});
	});

	var p3 = new Promise(function(resolve, reject){

		//store related
		session.run( 'MATCH (n)-[r:Related]->(c) return r ' )
		.then( function( result ) {
			//node
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

	//return Promise.all([p1,p2,p3])
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
		debugger;
		return out;
	});
}

module.exports = RDFSChema;