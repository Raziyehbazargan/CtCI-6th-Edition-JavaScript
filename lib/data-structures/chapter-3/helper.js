module.exports = MyStack = (function(){

  function MyStack() {
     this.stack = [];
  }

  MyStack.prototype.isEmpty = function() {
    return this.stack.length === 0;
  };

  MyStack.prototype.peek = function() {
    return this.stack[length];
  };

  return MyStack;
})();
