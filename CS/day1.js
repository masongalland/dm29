/*

Recursion -- doing the same thing over and over again.
             In JS, it is a function that calls itself until it doesn't.
             Adds another item(itself) to the call stack, until it can start resolving.
             When there is an unknown depth, recursion shines over loops.
    Base case: stopping point
    Recursive case: when to call itself

*/

//example 1:

function sum(num){
    if(num === 0) return 0; //Base case
    return num + sum(num - 1) //Recursive case
}

// sum(10) --> 10 + sum(9) + sum(8) + sum(7).... + (sum(0) --> 0) ---> 55


//example 2:

function factorial(num) {
    if(num === 0) return 1 //Base case
    return num * factorial(num - 1) //Recursive Case
}



///Singly Linked List

/*
Example 1:

 Add an "add" method to the LinkedList constructor.
    - This method should be able to add nodes to the LinkedList.
    - This method should add new nodes created through the Node constructor.
    - This method should increment "_length" by one after adding the node.

You can use the find method to search your linked list by index. Feel free to use this method to debug your add code.
*/

function Node( data ) {
    this.data = data;
    this.next = null;
  }

  function LinkedList() {
    this._length = 0;
    this.head = null;

    this.find = n => {
      let currentNode = this.head;
      let count = 0;

      while( count < n && n < this._length ) {
        currentNode = currentNode.next;
        count++;
      }

      return currentNode;
    }
    this.add = (data) =>{
      let newNode = new Node(data)
      if(!this.head) {
        this.head = newNode
      } else {
        let currentNode = this.head;
        while(currentNode.next){
          currentNode = currentNode.next
        }
        currentNode.next = newNode;
      }
      this._length++;
    }
  }

  let linkedList = new LinkedList();
  linkedList.add(46)
  linkedList.add(3)
  console.log(JSON.stringify(linkedList.head, null, 2))





/*
Example 2:

Add a remove method to the LinkedList constructor.
    - This method should be able to remove nodes from the LinkedList by index.
       -  Examples:
          - remove( 0 ) removes the first node in the list.
          - remove( 1 ) removes the second node in the list.
    - This method should decrement "_length" by one after removing the node.
*/


  function Node( data ) {
    this.data = data;
    this.next = null;
  }

  function LinkedList() {
    this._length = 0;
    this.head = null;

    this.find = n => {
      let currentNode = this.head;
      let count = 0;

      while( count < n && n < this._length ) {
        currentNode = currentNode.next;
        count++;
      }

      return currentNode;
    };

    this.add = data => {
      let node = new Node( data );

      if ( this.head === null ) {
        this.head = node;
      } else {
        let currentNode = this.head;

        while( currentNode.next !== null ) {
          currentNode = currentNode.next;
        }

        currentNode.next = node;
      }

      this._length++;
    };

    this.remove = index => {
      if(index + 1 > this.length) throw new Error("nope");
      if(index === 0) {
        this.head = this.head.next;
      } else {
        let currentNode = this.head;
        let previousNode = null;
        let nextNode = null;
        let count = 0;
        while(count < index) {
          previousNode = currentNode;
          currentNode = currentNode.next;
          nextNode = currentNode.next;
          count++;
        }
        previousNode.next = nextNode;
      }
      this._length--;
    }

  }

