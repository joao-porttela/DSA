export class ArrayQueue {
  public queue: any[] = [];
  public front: any;
  public length: number = 0;

  public enqueue(data: any) {
    if (this.length === 0) {
      this.front = data;
    }

    this.queue.push(data);

    this.length++;
  }

  public dequeue() {
    for (let i = 1; i < this.length; i++) {
      this.queue[i - 1] = this.queue[i];
    }

    this.queue.pop();

    this.length--;
  }
}
