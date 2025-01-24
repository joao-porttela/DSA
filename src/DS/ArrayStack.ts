export class ArrayStack {
  public capacity: number | null = null;
  public elements: any[];
  public length: number = 0;

  constructor(capacity?: number) {
    this.capacity = capacity ? capacity : null;
    this.elements = this.capacity ? new Array(this.capacity) : [];
  }

  public push(element: any) {
    this.elements.push(element);
    this.length++;
  }

  public pop() {
    if (this.isEmpty()) {
      console.log("Stack underflow");
      return;
    }

    this.elements.pop();
    this.length--;
  }

  public peek() {
    if (this.isEmpty()) {
      console.log("Stack underflow");
      return;
    }

    let x = this.elements[this.length - 1];
    console.log(x);

    return x;
  }

  public isEmpty() {
    if (this.length === 0) {
      console.log("Stack is empty.");
      return true;
    }
  }

  public isFull() {
    if (!this.capacity) {
      console.log("Dynamic Stack. No max capacity");
      return false;
    }

    if (this.length === this.capacity) {
      console.log("Stack is Full");
      return true;
    } else if (this.length > this.capacity) {
      console.log("Stack Overflow");
      return true;
    }

    console.log("Stack is not full");
    return false;
  }
}
