require('../../test_helper');
describe('3.2 #MyStack', function () {
  describe('return min item in stack', function () {
    beforeEach(function() {
      stack = new MyStack();
      stack.push(5);
      console.log(stack);
      stack.push(1);
      console.log(stack);
      stack.push(50);
      console.log(stack);
      stack.push(3);
      console.log(stack);
    });

    it('#push()', function () {
      //expect(stack.isEmpty()).to.be.false;
    });

    it('#pop()', function () {
      var value = stack.pop();
      expect(value).not.be.null;
    });

    it('#min()', function () {
      //var min = stack.min();
      //console.log(min);
    });
  });
});
