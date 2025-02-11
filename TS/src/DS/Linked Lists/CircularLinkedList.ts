import {Node} from "../Node";

export class CircularLinkedList {
  public first: Node | null = null;
  public last: Node | null = null;
  public length: number = 0;

  constructor(data?: any) {
    if (data !== undefined) {
      this.first = new Node(data);
      this.last = this.first;
      data ? this.length++ : null;
    }
  }

  public insertInEmptyList(data: any) {
    const newNode = new Node(data);
    newNode.next = newNode;

    this.first = newNode;
    this.last = newNode;
    this.length++;

    return this.last;
  }

  public insertBeginning(data: any) {
    if (this.length === 0) return this.insertInEmptyList(data);

    const newNode = new Node(data);

    newNode.next = this.first;
    this.first = newNode;
    this.last!.next = newNode;

    this.length++;
  }

  public insertMiddle(data: any, index: number) {
    if (this.length === 0) return this.insertInEmptyList(data);

    const newNode = new Node(data);

    let curr = this.first;

    for (let i = 1; i < index; i++) {
      if (i === index - 1) {
        newNode.next = curr!.next;
        curr!.next = newNode;
        break;
      }

      curr = curr!.next;
    }

    this.length++;
  }

  public insertEnd(data: any) {
    if (this.length === 0) return this.insertInEmptyList(data);

    const newNode = new Node(data);

    newNode.next = this.first;

    this.last!.next = newNode;
    this.last = this.last!.next;

    this.length++;
  }

  public deleteFirst() {
    if (this.length === 0) return console.log("Empty list");

    this.first = this.first!.next;
    this.last!.next = this.first;

    this.length--;
  }

  public deleteMiddle(index: number) {
    if (this.length === 0) return console.log("Empty list");

    if (index === this.length) return this.deleteEnd();

    let curr = this.first;

    for (let i = 1; i < index; i++) {
      if (i === index - 1) {
        curr!.next = curr!.next!.next;
        break;
      }

      curr = curr!.next;
    }

    this.length--;
  }

  public deleteEnd() {
    if (this.length === 0) return console.log("Empty list");

    let curr = this.first;

    for (let i = 1; i < this.length; i++) {
      if (i === this.length - 1) {
        curr!.next = this.first;
        break;
      }

      curr = curr!.next;
    }

    this.last = curr;

    this.length--;
  }

  public search(data: any) {
    if (this.length === 0) return console.log("Empty list");

    let curr = this.first;

    for (let i = 0; i < this.length; i++) {
      if (curr!.data === data) return console.log(`Item ${data} found`);

      curr = curr!.next;
    }

    console.log(`Item not found`);
  }

  public print() {
    if (this.length === 0) return console.log("Empty list");

    let curr = this.first;

    for (let i = 0; i < this.length; i++) {
      console.log(curr?.data);
      curr = curr!.next;
    }
  }
}
