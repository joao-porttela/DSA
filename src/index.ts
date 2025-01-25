import {ArrayQueue} from "./DS/Queue/ArrayQueue";

const queue = new ArrayQueue();

queue.enqueue(1);
queue.enqueue(2);

queue.dequeue();

console.log(queue.queue);
