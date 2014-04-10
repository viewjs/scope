exports       = module.exports = scope;
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

/**
 * Add a parent scope.
 *
 * @param {Scope} scope
 * @return {Scope}
 * @chainable
 */

Scope.prototype.parent = function(scope) {
  if (!(scope instanceof Scope)) {
    throw new Error("A parent scope must be a scope instance.");
  }

  this._parent = scope;
  return this;
};

/**
 * Add a new child scope.
 *
 * @param {Scope} scope
 * @return {Scope}
 * @chainable
 */

Scope.prototype.child = function(scope) {
  if (!(scope instanceof Scope)) {
    throw new Error("A child scope must be a scope instance.");
  }

  this.children.push(scope);
  return this;
};

/**
 * Set a property on the scope.
 *
 * @param {String} key
 * @param {Any} value
 * @return {Scope}
 * @chainable
 */

Scope.prototype.set = function(key, value) {
  this.props[key] = value;
  return this;
};

/**
 * Return an existing property.
 *
 * @param {String} key
 * @return {Any}
 */

Scope.prototype.get = function(key) {
  return this.props[key];
};
