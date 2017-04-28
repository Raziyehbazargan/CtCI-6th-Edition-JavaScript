var Stack = require('./helper.js');

function MinStack() {
  this.stack = [];
}

MinStack.prototype.push = function(value) {
  this.stack.push(value);
};

MinStack.prototype.pop = function() {
  return this.stack.pop();
};

MinStack.prototype.isEmpty = function() {
  return this.stack.length === 0;
};

MinStack.prototype.peek = function() {
  return this.stack[this.stack.length-1];
};

var stack2 = new MinStack();

MinStack.prototype.min = function() {
  if (this.isEmpty()) {
    return false;
  }
  console.log('MinStack', stack2.stack);
  return this.peek();
};

Stack.prototype.push = function(value) {
  if (value <= stack2.min()) {
    stack2.push(value);
  }
  this.stack.push(value);
};

Stack.prototype.pop = function() {
  var value = this.stack.pop();
  if (value == stack2.min()) {
    stack2.pop();
  }
  console.log('MinStack', stack2.stack);
  return value;
};
