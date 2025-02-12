class Node {
  public value: any;
  public left: Node | null;
  public right: Node | null;

  constructor(value?: any) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinaryTree {
  public root: Node | null;

  constructor() {
    this.root = null;
  }

  public insert(value: any) {
    const newNode = new Node(value);

    if (!this.root) return (this.root = newNode);

    let curr = this.root;

    while (true) {
      if (value < curr.value) {
        if (!curr.left) return (curr.left = newNode);
        curr = curr.left;
      } else {
        if (!curr.right) return (curr.right = newNode);
        curr = curr.right;
      }
    }
  }

  public lookup(value: any) {
    if (!this.root) return console.log(`Empty tree`);

    let curr = this.root;

    while (curr) {
      if (value === curr?.value) return console.log(`Value ${value} found`);

      if (value < curr?.value) curr = curr.left!;
      else curr = curr.right!;
    }

    return console.log(`Value not found`);
  }

  public remove(value: any, root: Node | null = this.root) {
    // Base case
    if (!root) return root;

    // Left Subtree
    if (value < root?.value) root.left = this.remove(value, root.left);
    // Right Subtree
    else if (value > root?.value) root.right = this.remove(value, root.right);
    else if (value === root?.value) {
      if (!root.left) return root.right;

      if (!root.right) return root.left;

      // Check the lowest value of the current right subtree
      let temp = root.right;

      while (temp && temp.left) temp = temp.left;

      root.value = temp.value;

      root.right = this.remove(temp.value, root.right);
    }

    return root;
  }

  public traverse(node = this.root) {
    if (node === null) return null;
    const tree: Node = {value: node.value, left: null, right: null};
    tree.left = node.left === null ? null : node.left;
    this.traverse(node.left);
    tree.right = node.right === null ? null : node.right;
    this.traverse(node.right);
    return tree;
  }
}

//              5
//        4           7
//    2       3   6       8

//              9
//        4           20
//    1       6   15      170
