/*
 * Assemble Plugin: assemble-middleware-htaccess
 * https://github.com/davidwickman/assemble-middleware-htaccess
 * Assemble is the 100% JavaScript static site generator for Node.js, Grunt.js, and Yeoman.
 *
 * Copyright (c) 2015 davidwickman
 * Licensed under the MIT license.
 */

var options = {
  events: ['assemble:before:render']
};

var plugin = module.exports = function(assemble) {

  assemble.registerPlugin(
    'assemble-middleware-htaccess',
    '.htaccess Middleware for Assemble',
    options,
    function (params, next) {
     console.log('assemble-middleware-htaccess', params.event);
     next();
    }
  );

};