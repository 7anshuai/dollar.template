# $.template()

Use $.template() like _.template(), compiles JavaScript templates into functions that can be evaluated for rendering. .

Code copied from [Underscore.js](http://underscorejs.org), just renamed `_.template` to `$.template`. 

Also exports some dependency methods to $.

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

```
var template = require('dollar.template').template;

var compiled = template("hello: <%= name %>");
compiled({name: 'moe'}); // "hello: moe"

var tmpl = template("<b><%- value %></b>");
tmpl({value: '<script>'}); // "<b>&lt;script&gt;</b>"
```

### Browser

```
<script src="/js/jquery.latest.js"></script>
<script src="/js/dollar.template.js"></script>
```

```
var compiled = $.template("hello: <%= name %>");
compiled({name: 'moe'}); // "hello: moe"
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