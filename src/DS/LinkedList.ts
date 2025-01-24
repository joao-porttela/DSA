import {Node} from "./Node";

export class LinkedList {
  public head: Node;
  public tail: Node;
  public length: number = 0;

  public constructor(data?: any) {
    this.head = new Node(data);
    this.tail = this.head;
    data ? this.length++ : null;
  }

  public insert(data: any, index?: number) {
    if (index === 0) {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;

      return;
    }

    if (this.isEmpty() || (index && index > this.length - 1) || !index) {
      this.push(data);
      return;
    }

    const newNode = new Node(data);

    let temp = this.head;

    for (let i = 1; i <= index; i++) {
      if (i === index) {
        newNode.next = temp!.next;
        temp!.next = newNode;
        break;
      }

      temp = temp.next!;
    }

    this.length++;
  }

  public push(data: any) {
    if (this.isEmpty()) {
      this.head = new Node(data);
      this.tail = this.head;
    } else {
      this.tail!.next = new Node(data);
      this.tail = this.tail!.next;
    }

    this.length++;
  }

  public search(target: any) {
    if (this.isEmpty()) {
      console.log("Empty Linked List");
      return;
    }

    let current = this.head;

    for (let i = 1; i <= this.length; i++) {
      if (current.data === target) {
        console.log(`Target found ${current.data}`);
        return current;
      }

      current = current.next!;
    }

    console.log("Target not found");
  }

  public deleteFirst() {
    if (this.isEmpty()) {
      console.log("Empty Linked List");
      return;
    }

    this.head = this.head.next!;

    this.length--;
  }

  public deleteMiddle(target: any) {
    if (this.isEmpty()) {
      console.log("Empty Linked List");
      return;
    }

    if (this.length === 1) {
      return this.deleteFirst();
    }

    let current = this.head;
    let previous: Node | null = null;

    while (current !== null) {
      if (current.data === target) {
        console.log(`Target found: ${current.data}`);

        if (previous !== null) {
          previous.next = current.next;
        } else {
          this.head = current.next!;
        }

        this.length--;
        return;
      }

      previous = current;
      current = current.next!;
    }

    console.log(`Target ${target} not found in the list.`);
  }

  public pop() {
    if (this.isEmpty()) {
      console.log("Empty Linked List");
      return;
    }

    if (this.length === 1) {
      this.head = null!;
    }

    let current = this.head;

    while (current.next!.next !== null) current = current.next!;

    // Remove the last node
    current.next = null;

    this.length--;
  }

  public isEmpty() {
    if (this.length === 0) return true;
    return false;
  }

  public traversal(index: number = this.length) {
    const arr = [];
    let current = this.head;

    for (let i = 0; i < index; i++) {
      arr.push(current.data);
      console.log(current);

      current = current.next!;
    }

    console.log(arr);
  }
}
