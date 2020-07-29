class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const temp = this.top;
      this.top = newNode;
      newNode.next = temp;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.length === 0) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
    return this;
  }
}
// const myStack = new Stack();
// console.log(myStack.push("google"));

// console.log(myStack.push("udemy"));

// console.log(myStack.push("discord"));
// console.log(myStack.pop());

//implementing Stack using array

class Stack1 {
  constructor(value) {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
    return this;
  }
  pop() {
    this.array.pop();
    return this;
  }
}

const myStack = new Stack1();
console.log(myStack.push("google"));

console.log(myStack.push("udemy"));

console.log(myStack.push("discord"));
console.log(myStack.pop());
// console.log(myStack.peek());
