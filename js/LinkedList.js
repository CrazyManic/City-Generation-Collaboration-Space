// Courtesy of https://medium.com/swlh/how-to-create-a-linked-list-in-javascript-1bfef32c7722
// Accessed 18/04/22
const Node = function(value, next = null) {
    this.value = value;
    this.next = next;
  }
const LinkedList = function() {
    this.head = null;
    this.size = 0;
}
LinkedList.prototype.addNodeAtHead = function(value) {
    this.head = new Node(value, this.head);
    this.size++;
    return;
}
LinkedList.prototype.addNodeAtTail = function(value){
    let node = new Node(value); 
    if(!this.head) return this.addNodeAtHead(value);
    let current = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = node;
    this.size++;
    return;
}
LinkedList.prototype.addNodeAt = function(value, index) {
    if(index > 0 && index > this.size) return console.log('Index does not exist');
    if(index === 0) return this.addNodeAtHead(value);
    const node = new Node(value);
    let current = this.head;
    let count = 0;
    let previous;
    while(count < index) {
      count++;
      previous = current;
      current = current.next
    }
    previous.next = node;
    node.next = current;
    this.size++;
    return;
}

LinkedList.prototype.FindNodeIndex = function(findNode) {
    var lookNode = this.head;
    var pos = 0;
    while (lookNode.next != null){
        if (lookNode == findNode) return pos;
        pos++;
    }
    return null;
}
   
LinkedList.prototype.getNodeAtIndex = function(index) {
    if(index > 0 && index >= this.size || !this.head) return console.log('Index does not exist');
    let current = this.head;
    let count = 0;
    while(current) {
      //if(count === index) return console.log(current.value); // why tf would it just print it???
      if(count === index) return current.value;
      count++;
      current = current.next;
    }
    return null;
}
LinkedList.prototype.removeHeadNode = function() {
    if(!this.head) return console.log('There is no head');
    this.head = this.head.next;
    this.size--;
    return;
}
LinkedList.prototype.removeTailNode = function() {
    if(!this.head) return console.log('There is no head');
    if(!this.head.next) return this.removeHeadNode();
    let current = this.head;
    let previous;
    while(current.next){
      previous = current;
      current = current.next;
    }
    previous.next = null;
    this.size--;
    return;
}
LinkedList.prototype.removeNodeAt = function(index) {
    if(index > 0 && index >= this.size || !this.head) return console.log('Index not found');
    if(index === 0) return this.removeHeadNode();
    let current = this.head;
    let count = 0;
    let previous;
    while(count < index) {
      count++;
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
    this.size--;
    return;
}
LinkedList.prototype.clearList = function() {
    this.head = null;
    this.size = 0;
    return;
}
LinkedList.prototype.printValue = function() {
    let current = this.head;
    while(current) {
      console.log(current.value);
      current = current.next;
    }
}
