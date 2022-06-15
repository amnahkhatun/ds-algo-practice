class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  //call isRightnull before calling
  createRightNode(node, value) {
    node.right = new Node(value);
  }

  //call isLeftnull before calling
  createLeftNode(node, value) {
    node.left = new Node(value);
  }

  isRightNull(node) {
    return node !== null && node.right === null;
  }

  isLefttNull(node) {
    return node !== null && node.left === null;
  }

  createRootIfEmpty(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return true;
    }
    return false;
  }

  createRightIfEmpty(node, value) {
    if (this.isRightNull(node)) {
      this.createRightNode(node, value);
      return true;
    }
    return false;
  }

  createLeftIfempty(node, value) {
    if (this.isLefttNull(node)) {
      this.createLeftNode(node, value);
      return true;
    }
    return false;
  }

  insert(value) {
    if (this.createRootIfEmpty(value)) return;

    let temp = this.root;

    while (temp !== null) {
      if (value > temp.value) {
        if (this.createRightIfEmpty(temp, value)) return;
        temp = temp.right;
      } else {
        if (this.createLeftIfempty(temp, value)) return;
        temp = temp.left;
      }
    }
  }

  remove(value) {
    let parentNode = this.findParent(value);
    let node = null;
    let isRight = false;
    let isLeft = false;

    console.log("parent node : ", parentNode.value);
    if (parentNode.left !== null && parentNode.left.value === value) {
      node = parentNode.left;
      isLeft = true;
    } else if (parentNode.right !== null && parentNode.right.value === value) {
      node = parentNode.right;
      isRight = true;
    }

    console.log("node to delete : ", node.value);
    if (node.left === null && node.right === null) {
      if (isLeft) parentNode.left = null;
      if (isRight) parentNode.right = null;
      return;
    }
    if (node.right === null) {
      parentNode.left = node.left;
      node = null;
      return;
    }
    if (node.left === null) {
      parentNode.right = node.right;
      node = null;
      return;
    }
    let nextGreaterNode = this.findNextGreaterNode(node);
    if (isLeft) {
      // nextGreaterNode.left = node.left;
      // console.log("left : ", node.left);
      parentNode.left = nextGreaterNode;
      nextGreaterNode.right = node.right;
      node = null;
      return;
    } else if (isRight) {
      // nextGreaterNode.right = node.right;
      // console.log("right : ", node.right);
      // console.log("left : ", node.left);
      parentNode.right = nextGreaterNode;
      nextGreaterNode.left = node.left;
      node = null;
      return;
    }
  }

  findParent(value) {
    if (this.root.value === value) {
      return this.root;
    }
    let node = this.root;
    let parentNode = null;
    while (node.value !== value) {
      parentNode = node;
      if (value > this.root.value) {
        node = node.right;
      } else if (value < this.root.value) {
        node = node.left;
      }
    }
    return parentNode;
  }

  findNextGreaterNode(node) {
    node = node.right;

    while (node.left != null) {
      node = node.left;
    }
    console.log("next greater : ", node.value);
    return node;
  }
}

const tree = new BST();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.insert(180);

tree.remove(20);

let r = JSON.stringify(traverse(tree.root));
console.log(r);
//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
