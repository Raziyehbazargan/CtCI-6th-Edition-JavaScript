var SLL = require('./helper.js');

  SLL.prototype.partition = function(node , x) {
    var head = node,
        tail = node;

    while (node !== null) {
      var next = node.next;
      if (node.data < x) {
        //insert node at head
        node.next = head;
        head = node;
      } else {
        // insert node at tail
        tail.next = node;
        tail = node;
      }
       node = next;
    }
    tail.next = null;
    //the head has changed, so we need to return it to the user.
    return head;
  };
