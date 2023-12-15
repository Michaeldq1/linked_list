import { createLinkedList } from "./linkedList.js";

const newList = createLinkedList();

newList.append(13);
newList.append(15);
newList.append(99);

newList.prepend(44);

newList.insertAt(23, 1);
newList.insertAt(76, 0);
newList.insertAt(3, 3);

newList.removeAt(3);

console.log(newList.size());

console.log(newList.head());

console.log(newList.tail());

console.log(newList.contains(13));
console.log(newList.contains(55));

console.log(newList.findValue(15));
console.log(newList.findValue(66));

console.log(newList.toString());

console.log(newList.at(0));
console.log(newList.at(1));
console.log(newList.at(2));
console.log(newList.at(3));

console.log(newList.pop());
console.log(newList.pop());
console.log(newList.pop());
console.log(newList.pop());
