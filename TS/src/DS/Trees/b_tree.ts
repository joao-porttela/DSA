class Node {
  public parent: Node | null;
  public value: any;
  public left: Node | null = null;
  public right: Node | null = null;

  constructor(parent: Node | null, value?: any) {
    this.parent = parent;
    this.value = value;
  }
}

export class BinaryTree {
  public root: Node | null = null;
  public size: number = 0;

  public insert(value: any, root = this.root): Node {
    const newNode = new Node(root, value);

    if (!this.root) {
      this.size++;
      return (this.root = newNode);
    }

    if (value < root?.value) {
      if (!root?.left) {
        this.size++;
        return (root!.left = newNode);
      }
      root = this.insert(value, root.left);
    } else {
      if (!root?.right) {
        this.size++;
        return (root!.right = newNode);
      }
      root = this.insert(value, root.right);
    }

    return root;
  }

  public lookup(value: any) {
    if (!this.root) {
      console.log(`Empty tree`);
      return null;
    }

    let curr = this.root;

    while (curr) {
      if (value === curr?.value) return curr;
      if (value < curr?.value) curr = curr.left;
      else curr = curr.right;
    }

    console.log(`Valeu not found`);
    return null;
  }

  public remove(value: any, root: Node | null = this.root) {
    if (!root) return root;

    if (value < root?.value) root.left = this.remove(value, root.left);
    else if (value > root?.value) root.right = this.remove(value, root.right);
    else {
      if (!root.left) {
        root.right!.parent = root.parent;
        this.size--;
        return root.right;
      }
      if (!root.right) {
        root.left.parent = root.parent;
        this.size--;
        return root.left;
      }

      let temp = root.right;

      while (temp && temp.left) temp = temp.left;

      root.value = temp.value;

      root.right = this.remove(temp.value, root.right);
    }

    return root;
  }

  public parent(value: any) {
    if (!this.root) {
      console.log(`Empty tree`);
      return null;
    }

    if (this.root.value === value) {
      console.log(`Root node - No parent`);
      return null;
    }

    const node = this.lookup(value);

    if (!node) return;

    console.log(`Node's parent: ${node.parent!.value}`);

    return node.parent;
  }

  public children(value: any) {
    if (!this.root) {
      console.log(`Empty tree`);
      return null;
    }

    const node = this.lookup(value);

    if (!node) return;

    console.log(`Node's children`);
    node.left && console.log(node.left);
    node.right && console.log(node.right);
    !node.right && !node.left && console.log("No children");

    return [node.left, node.right];
  }

  public isInternal(value: any) {
    if (!this.root) {
      console.log(`Empty tree`);
      return null;
    }

    const node = this.lookup(value);

    if (!node) return;

    if (node.left || node.right) {
      return true;
    } else {
      return false;
    }
  }

  public isExternal(value: any) {
    if (!this.root) {
      console.log(`Empty tree`);
      return null;
    }

    const node = this.lookup(value);

    if (!node) return;

    if (!node.left || !node.right) {
      return true;
    } else {
      return false;
    }
  }

  public traverse(node = this.root) {
    if (node === null) return null;

    node.left = this.traverse(node.left);

    node.right = this.traverse(node.right);

    return node;
  }
}
