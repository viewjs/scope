# Scope [![Build Status](https://travis-ci.org/viewjs/scope.svg)](https://travis-ci.org/viewjs/scope) [![GitHub version](https://badge.fury.io/gh/viewjs%2Fscope.svg)](http://badge.fury.io/gh/viewjs%2Fscope)

A view scope represents an isolation within templates. Often times, you have many different areas that have either completely different scoping then others.

## Getting Started

Get started by installing it through components:

```
component install viewjs-scope --save
```

Require it:

```js
var scope = require('scope');
```

## Usage

Create a new scope through the exported function:

```js
scope(); // new scope.Scope();
```

Attach a parent to it:

```js
scope()
  .parent(scope());
```

Childrens:

```js
scope()
  .child(scope());
```

Finally, add attributes:

```js
scope()
  .set('foo', 123)
  .set('name', 'John')
```

## Testing

Run with mocha

```
component build --dev
```

Then:

```
open test/index.html
```

## License

MIT
