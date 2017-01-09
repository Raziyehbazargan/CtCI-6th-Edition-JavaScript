var Stack = require('./helper.js');
var MinStack = new Stack();

Stack.prototype.push = function(value) {
  if (value <= min()) {
    MinStack.stack.push(value);
  }
  this.stack.push(value);
};

Stack.prototype.pop = function() {
  var value = this.stack.pop();
  if (value == min()) {
    MinStack.stack.pop();
  }
  return value;
};

stack.prototype.min = function() {
  if (MinStack.isEmpty()) {
    return false;
  }
  return MinStack.peek();
};
