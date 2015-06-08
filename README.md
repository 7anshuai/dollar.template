# $.template()

Use $.template() like _.template(), compiles JavaScript templates into functions that can be evaluated for rendering. .

Code copied from [Underscore.js](http://underscorejs.org), just renamed `_.template` to `$.template`.

## Usage

```
var compiled = $.template("hello: <%= name %>");
compiled({name: 'moe'}); // "hello: moe"

var template = $.template("<b><%- value %></b>");
template({value: '<script>'}); // "<b>&lt;script&gt;</b>"
```
