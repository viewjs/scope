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

## Getter

The `.get()` method on any scope will, if the key is not found on the immediate scope, bubble up to the parents until it finds it, otherwise it'll return `undefined`.

```js
var parentA = scope().attr('foo', 55);
var parentB = scope()
  .parent(parentA)
  .attr('world', 'hello');
var child   = scope()
  .parent(parentB)
  .attr('five', 5);
```

Now we can grab any one of those attributes by only touching the child scope:

```js
scope.get('five'); // 5
scope.get('world'); // 'hello'
scope.get('foo'); // 55
```

Note that `.attr(key, value)` is an alias to `.set(key, value)`.

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

The MIT License (MIT)

Copyright (c) 2014 Daniel Fagnan <dnfagnan@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.