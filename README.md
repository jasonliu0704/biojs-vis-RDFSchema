## Project Overview
Through aggregating data from multiple sources, biological researchers can gain valuable information from exploring and visualization relationship between biological entities. Resource Description Framework(RDF) provides us a standard and nature way to discover the relationship between entities in the form of subject, predicate, object expression.

However, BioJS team are currently looking for tools and implementation that supports their existing platform to visualize and analyze their meta data so that it will benefits biological researches around the world to help them find valuable connection between their targeting biological entities.

With this in mind, my project includes conducting researches on choosing the most efficient and compatible existing technology and using that to implement a tool or application that will achieve the goal for the community.

## Project Progress
Currently I have successfully built a parsor to parse the target dataset from sparql endpoints into neo4j database. The parsor supports full pipeline of parsing and store in neo4j db and is located at this repo(https://github.com/jasonliu0704/biojs-neo4j-dbsedd). The dbseed.py will seed the neo4j db for a given sparql endpoint while crawler.py will seed database with predefined filter. In addition, I have also worked on a parsor in java with similar functionalities.(https://github.com/jasonliu0704/linksets4RDF)

After the midterm evaluation, I spend some of my time configing my local sparql endpoint instance using apache jena fuseki since the remote serve is not stable at that time. Most of my time was spent on figuring out how to filtering out targeting class to reduce the number of nodes to present and design and implement a suitable visualization. All the visualization is implemented according to the original design with a few exception (some feature will slow the visualization down when the dataset is large so I remove it). For targeting and parameterizating node to reduce traffic, there are two approach that has been implemented with some issues:
1. allow parameterizing throgh the python script before populating the database. drawback: not useful for interactive visualization becuase each request to sparql endpoint takes time to process.
2. implement through front end by parsing input parameter and dynamically creating node and edges. This approache offers better performace but I encounterd 'Access-Control-Allow-Origin' issue which needs to be addressed on the sparql endpoint. See details at issues.

In the future, we need to work on Path finder part of this project.


## How to run?
1. you need a neo4j server running
2. git clone this and other linked repo
3. For the parser repo, recommend use python3 to install all the dependencies with pip (sparql, neo4j.v1, urlparse)
4. run dbseed.py to parse and seed the neo4j database.
5. in biojs-vis-RDFSchema, run npm install 
6. run npm sniper to start the server and go to http://localhost:9090/snippets/simple

## Demo
Follow the how to run instruction and you will see a working demo.


## Issues
When use sparql client package from npm, I ran into this issue:
XMLHttpRequest cannot load http://www.ebi.ac.uk/rdf/services/atlas/sparql. A wildcard '*' cannot be used in the 'Access-Control-Allow-Origin' header when the credentials flag is true. Origin 'http://localhost:9090' is therefore not allowed access. The credentials mode of an XMLHttpRequest is controlled by the withCredentials attribute.

To solve, the sparql server need to set  Access-Control-Allow-Credentials header to false for each response.
