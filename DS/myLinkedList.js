// 10-->5-->2

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 2,
//         next: null
//       }
//     }
//   }
// };

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
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
      next: null
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null
    };
    newNode.next = this.head;
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
      next: null
    };

    let leader = this.traverseIndex(index - 1);
    let holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }

  //1-->10-->99-->5-->16
  remove(index) {
    let leader = this.traverseIndex(index - 1);
    let unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
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
  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
  }
}



// const myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.prepend(1);
// myLinkedList.insert(2, 99);
// myLinkedList.remove(2);
// myLinkedList.reverse();

// console.log(myLinkedList.printList());

const head = [1,2,3,4,5,6]
let middleNode = function(head) {
    // let hi = head, count = 1;
    // while (hi.next) {
    //     hi = hi.next;
    //     count++;
    // }
    // console.log(count,'count');
    // count = parseInt(count / 2);

    // while(count){
    //     head=head.next;
    //     count--;
    // }
    // return head;
    let slow = head, fast = head
    while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
    }
    return slow
};
console.log(middleNode(head))