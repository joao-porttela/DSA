import {CircularLinkedList} from "./DS/Linked Lists/CircularLinkedList";

const circularLinkedList = new CircularLinkedList();

circularLinkedList.insertInEmptyList(3);
circularLinkedList.insertBeginning(2);
circularLinkedList.insertBeginning(1);

circularLinkedList.insertEnd(5);

circularLinkedList.insertMiddle(4, 4);

circularLinkedList.deleteFirst();

circularLinkedList.deleteMiddle(4);

console.log(circularLinkedList);

circularLinkedList.search(5);

circularLinkedList.print();
