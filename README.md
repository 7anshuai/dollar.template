# $.template()

Use $.template() like _.template().

Code copied from [Underscore.js](http://underscorejs.com), just renamed `_.template` to `$.template`.

## Usage

```
var compiled = $.template("hello: <%= name %>");
compiled({name: 'moe'}); // "hello: moe"

var template = $.template("<b><%- value %></b>");
template({value: '<script>'}); // "<b>&lt;script&gt;</b>"
```
