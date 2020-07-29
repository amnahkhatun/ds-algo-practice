//Doubly linked list
//10-->5-->2
// let double = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       prev: 10,
//       next: {
//         value: 2,
//         prev: 5,
//         next: null
//       }
//     }
//   }
// };

class DoubleLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      prev: null,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  append(value) {
    const newNode = {
      value: value,
      prev: null,
      next: null
    };
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      prev: null,
      next: null
    };
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;

    this.length++;
    return this;
  }
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      prev: null,
      next: null
    };

    let leader = this.traverseIndex(index - 1);
    let follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this.printList();
  }

  remove(index) {
    let leader = this.traverseIndex(index - 1);
    let unwantedNode = leader.next;
    unwantedNode.prev = leader;
    leader.next = unwantedNode.next;
    this.length--;
    console.log(this);
    return this.printList();
  }
  traverseIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

const myLinkedList = new DoubleLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
// myLinkedList.insert(2, 99);
myLinkedList.remove(2);

console.log(myLinkedList.printList());
