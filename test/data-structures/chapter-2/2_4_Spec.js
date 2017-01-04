require('../../test_helper');

describe('2.3 #partition', function () {
  describe('partition a linked list around a value x', function () {
    var sll;
    beforeEach(function() {
      sll = new MyLinkedList();
      sll.addNode( 1 , null);
      sll.addNode( 4 , null);
      sll.addNode( 9 , null);
      sll.addNode( 10 , null);
      sll.addNode( 12 , null);
      sll.addNode( 2 , null);

    });

    afterEach(function() {
      sll = null;
    });

    it('should partion a Linked List', function () {
      var result = sll.partition(sll.head.next, 5);
      console.log('sll.head.next', sll.head.next);
      console.log('result', result);
      console.log('sll1', sll);

      expect(result).not.equal(4);
    });
  });
});
