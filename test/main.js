/*
 * Assemble Plugin: assemble-middleware-htaccess
 * https://github.com/davidwickman/assemble-middleware-htaccess
 * Assemble is the 100% JavaScript static site generator for Node.js, Grunt.js, and Yeoman.
 *
 * Copyright (c) 2015 davidwickman
 * Licensed under the MIT license.
 */

var expect = require('chai').expect;

var middleware_htaccess = require('../');

describe('assemble-middleware-htaccess', function() {

	before(function(){
		// run any code before tests here
	});

  it('should do something awesome', function() {
    var expected = 'assemble-middleware-htaccess';
    var actual = 'assemble-middleware-htaccess';
    expect(actual).to.eql(expected);
  });

});