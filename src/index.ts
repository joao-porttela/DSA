/**
 * Index.ts
 */

import {LinkedList} from "./DS/LinkedLists/LinkedList";
import {LinkedListStack} from "./DS/Stacks/LinkedListStack";

const linkedList = new LinkedList();

linkedList.push(1);
linkedList.push(2);

linkedList.insert(4);
linkedList.insert(0, 0);
linkedList.insert(3, 3);

linkedList.pop();

linkedList.deleteFirst();

linkedList.deleteMiddle(2);

linkedList.traversal();

const linkedListStack = new LinkedListStack();

// Push elements onto the stack
// linkedListStack.push(1);
// linkedListStack.push(2);
// linkedListStack.push(3);
// linkedListStack.push(4);

// // Print top element of the stack
// console.log(linkedListStack.peek());

// // removing two elemements from the top
// console.log("Removing two elements...");
// linkedListStack.pop();
// linkedListStack.pop();

// console.log(linkedListStack.peek());
