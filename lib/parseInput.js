var RDFSChema = function(opts) {
    var self = this;
    self.el = opts.el;
};

RDFSChema.parseInput = function(client, input, graph){
	console.log('parseing input')
	return new Promise(function(resolve, reject){
		var checkSubType = "ASK { <@type> <http://www.w3.org/2000/01/rdf-schema#subClassOf>* <@inputtype>}";
		checkSubType.replace("@inputtype", input);
		var nodes = graph.nodes;
		var links = graph.links
		var replaceTable = new Map();

		// processing nodes
		var input_node = {url: input, id: 0};

		for(var i = 0; i < nodes.length(); i++){
		 	client.query(checkSubType.replace('@type', nodes[i].uri )).execute(function(error, results){
		 		if(err){
		 			console.error(err);
		 			reject(err)
		 			
		 		}

		 		if(res.results.bindings){
		 			replaceTable.set(nodes[i].id, true);
		 			nodes.split(i,1);
		 			i--;
		 		}

		 		return;
		 	});
		 }
		 nodes.push(input_node);

		 // porcessing edges
		 for(var j=0; i<links.length(); j++){
		 	if(replaceTable.get(links[j].source)){
		 		links[j].source = 0;
		 	}else if(replaceTable.get(links[j].target)){
		 		links[j].target = 0;
		 	}
		 }


		 resolve();
	});
	
};    