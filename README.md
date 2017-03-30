# $.template() [![Build Status](https://travis-ci.org/7anshuai/dollar.template.svg?branch=master)](https://travis-ci.org/7anshuai/dollar.template)

[![NPM](https://nodei.co/npm/dollar.template.png?downloads=true)](https://nodei.co/npm/dollar.template/)

Use $.template() like _.template(), compiles JavaScript templates into functions that can be evaluated for rendering.

Code copied from [Underscore.js](http://underscorejs.org), just renamed `_.template` to `$.template`, and exports some dependency methods to $. You can use it as a jQuery or Zepto plugin, or use directly in Node.js. 


## Installation

### NPM

```
npm install dollar.template
```

### Bower

```
bower install dollar.template
```

## Usage

### Node.js

```javascript
var template = require('dollar.template').template;

var compiled = template("hello: <%= name %>");
compiled({name: 'moe'}); // "hello: moe"

var tmpl = template("<b><%- value %></b>");
tmpl({value: '<script>'}); // "<b>&lt;script&gt;</b>"
```

### Browser

```html
<script src="/js/jquery.js"></script> <!-- also works with zepto -->
<script src="/js/dollar.template.js"></script>
```

```javascript
var compiled = $.template("hello: <%= name %>");
compiled({name: 'moe'}); // "hello: moe"
```

### Require.js

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>$.template()</title>
</head>
<body>
  <div></div>
  <script src="bower_components/requirejs/require.js"></script>
  <script>
    requirejs.config({
      baseUrl: "./",
      paths: {
        jquery: "bower_components/jquery/dist/jquery", // set jquery path to zepto if we want to use zepto
      }
    });
  </script>
  <script>
    require(["jquery", "bower_components/dollar.template/dollar.template"], function ($, template){
      var compiled = template("hello: <%= name %>"); // you can use $.template directly
      $("div").text(compiled({name: "moe"})); // "hello: moe"
    });
  </script>
</body>
</html>
```

## Testing

```
npm test
```

## API

- $.isObject - `$.isObject({});` => `true`
- $.keys - `$.keys({one: 1, two: 2, three: 3});` => `["one", "two", "three"]`
- $.allkeys - See [_.allkeys](http://underscorejs.org/#allKeys)
- $.invert - `$.invert({Moe: "Moses", Larry: "Louis", Curly: "Jerome"});` => `{Moses: "Moe", Louis: "Larry", Jerome: "Curly"};`
- $.has - `$.has({a: 1, b: 2, c: 3}, "b");` => `true`
- $.escape - `$.escape('Curly, Larry & Moe');` => `"Curly, Larry &amp; Moe"`
- $.unescape - `$.unescape('Curly, Larry &amp; Moe');` => `"Curly, Larry & Moe"`
- $.defaults - See [_.defaults](http://underscorejs.org/#defaults)
- $.template - See [_.template](http://underscorejs.org/#template)

## License

[MIT](/LICENSE)