import {DoublyLinkedList} from "./DS/Linked Lists/DoublyLinkedList";

const dLinkedList = new DoublyLinkedList();

dLinkedList.push(1);
dLinkedList.push(2);
dLinkedList.insertInTheBeginning(0);
dLinkedList.push(5);
dLinkedList.insert(4, 4);
dLinkedList.insert(3, 3);
dLinkedList.push(10);
dLinkedList.insert(6, 7);

// dLinkedList.insert(7, 8);
// dLinkedList.insert(8, 9);
// dLinkedList.insert(9, 10);
// dLinkedList.push(11);

// dLinkedList.deleteFirst();

// dLinkedList.deleteOne(3);

dLinkedList.deleteLast();

dLinkedList.forwardTraversal();
