import {Node} from "../Node";

export class LinkedList {
  public head: Node | null = null;
  public tail: Node | null = null;
  public length: number = 0;

  public constructor(data?: any) {
    if (data !== undefined) {
      this.head = new Node(data);
      this.tail = this.head;
      data ? this.length++ : null;
    }
  }

  public insert(data: any, index?: number) {
    if ((index && index > this.length - 1) || index === undefined) {
      this.push(data);
      return;
    }

    if (index === 0) {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;

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

      temp = temp!.next!;
    }

    this.length++;
  }

  public push(data: any) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail!.next = newNode;
      this.tail = this.tail!.next;
    }

    this.length++;
  }

  public search(target: any) {
    if (this.isEmpty()) {
      console.log("Empty Linked List");
      return;
    }

    let current = this.head!;

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

    this.head = this.head!.next!;

    if (this.length === 1) this.tail = null;

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

    for (let i = 1; i < this.length; i++) {
      if (current!.data === target) {
        console.log(`Target ${target} found`);
        previous!.next = current!.next;
        current = null;
        console.log(`Target deleted`);
        break;
      }
      previous = current;
      current = current!.next;
    }

    this.length--;

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

    let current = this.head!;

    while (current.next!.next !== null) current = current.next!;

    current.next = null;
    this.tail = current;

    this.length--;
  }

  public isEmpty() {
    return this.length === 0;
  }

  public traversal(index: number = this.length) {
    if (index > this.length) {
      console.log("Index exceeds the length of the list");
      return;
    }

    const arr = [];
    let current = this.head!;

    for (let i = 0; i < index; i++) {
      arr.push(current.data);
      current = current.next!;
    }

    console.log(arr);
  }

  public clear() {
    this.head = null!;
    this.tail = null!;
    this.length = 0;
  }
}
