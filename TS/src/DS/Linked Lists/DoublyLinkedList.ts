class Node {
  data: any;
  next: Node | null;
  prev: Node | null;

  public constructor(data?: any) {
    this.data = data != null || data != undefined ? data : null;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList {
  public head: Node | null = null;
  public tail: Node | null = null;
  public length: number = 0;

  constructor(data?: any) {
    if (data !== undefined) {
      this.head = new Node(data);
      this.tail = this.head;
      data ? this.length++ : null;
    }
  }

  public insertInTheBeginning(data: any) {
    if (!this.head) return this.push(data);

    const newNode = new Node(data);

    newNode.next = this.head;

    if (this.head !== null) {
      this.head = newNode;
    }

    this.length++;
  }

  public insert(data: any, index: number) {
    if ((index && index > this.length) || index === undefined) return this.push(data);

    if (index === 1) return this.insertInTheBeginning(data);

    const newNode = new Node(data);

    let current = this.head;

    for (let i = 1; i < index - 1; i++) {
      current = current!.next!;
    }

    newNode.prev = current;

    newNode.next = current!.next;

    current!.next = newNode;

    if (newNode.next !== null) {
      newNode.next.prev = newNode;
    }

    this.length++;
  }

  public push(data: any) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      let curr = this.head;

      while (curr!.next !== null) {
        curr = curr!.next;
      }

      curr!.next = newNode;

      newNode.prev = curr;
      this.tail = newNode;
    }

    this.length++;
  }

  public deleteFirst() {
    if (this.isEmpty()) {
      console.log("Empty linked list");
      return;
    }

    this.head = this.head!.next;
    this.head!.prev = null;

    this.length--;
  }

  public deleteOne(data: any) {
    if (this.isEmpty()) {
      console.log("Empty linked list");
      return;
    }

    let curr = this.head;

    for (let i = 0; i < this.length; i++) {
      if (curr!.data === data) {
        curr!.prev!.next = curr!.next;
        curr = curr!.next;
        break;
      }
      curr = curr!.next;
    }

    this.length--;
  }

  public deleteLast() {
    if (this.isEmpty()) {
      console.log("Empty linked list");
      return;
    }

    this.tail = this.tail!.prev;

    this.length--;
  }

  public isEmpty() {
    return this.length === 0;
  }

  public forwardTraversal(index: number = this.length) {
    if (index > this.length) return console.log("Index exceeds the length of the list");

    const arr = [];
    let current = this.head!;

    for (let i = 0; i < index; i++) {
      arr.push(current.data);
      current = current.next!;
    }

    console.log(arr);
  }

  public backwardTRvaersal(index: number = this.length) {
    if (index > this.length) return console.log("Index exceeds the length of the list");

    const arr = [];
    let current = this.tail!;

    for (let i = 0; i < index; i++) {
      arr.push(current.data);
      current = current.prev!;
    }

    console.log(arr);
  }
}
