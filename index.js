var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var in_place = require('metalsmith-in-place');
var layouts     = require('metalsmith-layouts');
// var permalinks  = require('metalsmith-permalinks');
var serve = require('metalsmith-serve');
var watch = require('metalsmith-watch');

Metalsmith(__dirname)
  // .metadata({
  //   title: "My Static Site & Blog",
  //   description: "It's about saying »Hello« to the World.",
  //   generator: "Metalsmith",
  //   url: "http://www.metalsmith.io/"
  // })
  .source('./src')
  .destination('./public')
  .clean(true)
  .use(markdown())
  // .use(permalinks())
  .use(in_place({
    "partials": "partials",
    "engine": "handlebars",
    "pattern": "*.hbs",
  }))
  .use(layouts({
    "engine": "handlebars",
    "default": "layout.hbs",
    "directory": "layouts",
    "partials": "partials",
    "pattern": "*.hbs",
    "rename": true
  }))
  .use(serve())
  .use(watch({
    livereload: true
  }))
  // .use(watch())
  .build(function(err, files) {
    if (err) { throw err; }
  });
