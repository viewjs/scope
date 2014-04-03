exports = module.exports = scope;
exports.Scope = Scope;

/**
 * `scope` is simply a function that creates a new Scope instance. This allows it to
 * work nicely within chaining contexts.
 *
 * ```js
 * scope()
 *   .parent(scope())
 *   .children(scope())
 *   .attr('hello', 'foo');
 * ```
 */

function scope() {
    return new Scope();
}

/**
 * A scope represents a container of values. The idea of scoping
 * is similar to programming languages, where you have multiple scopes.
 *
 * Thus, within a single template, you may have multiple scopes to
 * limit certain properties from other scopes.
 *
 * Scopes may also have parents and children.
 *
 * The preferred naming convension is typically lowercased, single
 * words. Keys that start with an underscore are reserved.
 */

function Scope() {
    this._parent = null;
    this.children = [];
    this.props = {};
}

Scope.prototype.parent = function(scope) {
    this._parent = scope;
    return this;
};

Scope.prototype.child = function(scope) {
    this.children.push(scope);
    return this;
};

Scope.prototype.attr = function(key, value) {
    this.props[key] = value;
};
