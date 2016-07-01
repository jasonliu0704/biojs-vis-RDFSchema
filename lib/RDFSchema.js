/*jslint node: true */
/*jshint laxbreak: true */
"use strict";
/*
 * Copyright (c) 2015 jasonliu0704
 * Licensed under the Apache 2 license.
 */

var d3 = require('d3');
var _ = require('underscore');

var RDFSChema = function(opts) {
    console.log('start');
    var self = this;
    self.el = opts.el;
    console.log(self.el);
    
    self.hello = function(name) {
    	return 'Hello ' + name;
    };
    d3.select(self.el).html(self.hello(opts.name));
};



module.exports = RDFSChema;