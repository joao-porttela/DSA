import {Node} from "../Node";

export class LinkedListStack {
  private head: Node | null;

  constructor() {
    this.head = null;
  }

  public push(element: any) {
    const newNode = new Node(element);

    if (!newNode) {
      console.log("Stack Overflow");
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
  }

  public pop() {
    if (this.isEmpty()) {
      console.log("Stack Underflow");
      return;
    }

    let temp = this.head;

    this.head = this.head!.next;

    temp = null;
  }

  peek() {
    if (!this.isEmpty()) return this.head!.data;
    else {
      console.log("\nStack is empty");
      return;
    }
  }

  public isEmpty() {
    if (this.head === null) return true;

    return false;
  }
}
