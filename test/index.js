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

    it('should have a .attr method', function() {
        assert.equal('function', typeof scope().attr);
    });

    it('should have an empty child list by default.', function() {
        assert.equal(scope().children.length, 0);
    });

    it('should have a null parent by default', function() {
        assert.equal(scope()._parent, null);
    });



});
