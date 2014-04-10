var scope = require('scope');
var assert = require('assert');

describe('scope', function() {

  it('should return a function', function() {
    assert.equal('function', typeof scope);
  });

  it('should expose the `Scope` constructor', function() {
    assert.equal('function', typeof scope.Scope);
  });

  it('should create a new scope instance through the helper function.', function() {
    assert(scope() instanceof scope.Scope);
  });

  it('should have a .parent method', function() {
    assert.equal('function', typeof scope().parent);
  });

  it('should have a .child method', function() {
    assert.equal('function', typeof scope().child);
  });

  it('should have a .get method', function() {
    assert.equal('function', typeof scope().get);
  });

  it('should have a .set method', function() {
    assert.equal('function', typeof scope().set);
  });

  it('should have an empty child list by default.', function() {
    assert.equal(scope().children.length, 0);
  });

  it('should have a null parent by default', function() {
    assert.equal(scope()._parent, null);
  });

  it('should add a parent scope', function() {
    var e = scope();
    var s = scope().parent(e);
    assert.equal(s._parent, e);
  });

  it('should add a child scope', function() {
    var child = scope();
    var s = scope().child(child);
    assert.equal(s.children.length, 1);
    assert.equal(s.children[0], child);
  });

  it('should add a new attribute', function() {
    var s = scope().set('foo', 123);
    assert.equal(s.props.foo, 123);
  });

  it('should get a an existing attribute after setting one.', function() {
    var s = scope().set('foo')
  });

});
