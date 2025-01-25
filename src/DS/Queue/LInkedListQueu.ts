import {Node} from "../Node";

export class LinkedListQueue {
  public head: Node | null = null;
  public tail: Node | null = null;
  public length: number = 0;

  public enqueue(data: any) {
    const newNode = new Node(data);

    if (this.tail === null) {
      this.head = this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    this.tail = this.tail.next;
  }

  public dequeue() {
    if (this.length === 0) return;

    this.head = this.head!.next;

    if (this.head === null) this.tail = null;
  }
}
