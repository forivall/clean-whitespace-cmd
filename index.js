#!/usr/bin/env node

/* TODO: take command line arguments to set the replacements */
var clean_whitespace, clean_whitespace_stream, through;

through = require('through');
clean_whitespace = require('clean-whitespace');

clean_whitespace_stream = through(function(data) {
  this.queue(clean_whitespace(data));
});
process.stdin.setEncoding('utf8');
process.stdin.pipe(clean_whitespace_stream).pipe(process.stdout);
