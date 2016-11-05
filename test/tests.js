var should = require('should');
var $ = require('../dollar.template');

describe('dollar.template', function() {
  it('interpolate', function() {
    var compiled = $.template('hello <%= name %>!');

    var result = compiled({name: 'moe'});
    result.should.equal('hello moe!');
  });

  it('escape', function() {
    var template = $.template('<b><%- value %></b>');

    var result = template({value: '<script>'});
    result.should.equal('<b>&lt;script&gt;</b>');
  });

  it('use print', function() {
    var compiled = $.template("<% print('Hello ' + epithet); %>");
    var result = compiled({epithet: 'stooge'});
    result.should.equal('Hello stooge');
  });

  it('with settings', function() {
    var template = $.template('Hello {{ name }}!', {
      interpolate: /\{\{(.+?)\}\}/g
    });
    var result = template({name: 'Mustache'});
    result.should.equal('Hello Mustache!');
  });

  it('with the variable setting', function() {
    var result = $.template("Using 'with': <%= data.answer %>", {variable: 'data'})({answer: 'no'});
    result.should.equal("Using 'with': no");
  });

  it('template settings', function() {
    $.templateSettings = {
      interpolate: /\{\{(.+?)\}\}/g
    }
    var result = $.template('Hello {{ name }}!')({name: 'Mustache'});
    result.should.equal('Hello Mustache!');
  });
  
});