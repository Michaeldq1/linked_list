import { createNode } from "./node.js";

const createLinkedList = () => {
  let headNode = null;
  let tailNode = null;

  const append = (value) => {
    const newNode = createNode(value);

    if (!headNode) {
      headNode = newNode;
      tailNode = newNode;
      return;
    }

    tailNode.nextNode = newNode;
    tailNode = newNode;
  };

  const prepend = (value) => {
    const newNode = createNode(value, headNode);
    headNode = newNode;
  };

  const size = () => {
    let count = 0;
    let currentNode = headNode;

    while (currentNode) {
      count++;
      currentNode = currentNode.nextNode;
    }

    return count;
  };

  const head = () => headNode;

  const tail = () => tailNode;

  const at = (index) => {
    let count = 0;
    let currentNode = headNode;

    while (currentNode) {
      if (count === index) {
        return currentNode.value;
      }
      currentNode = currentNode.nextNode;
      count++;
    }

    return null;
  };

  const pop = () => {
    if (!headNode) {
      return null;
    }

    if (!headNode.nextNode) {
      const poppedNode = headNode;
      headNode = null;
      tailNode = null;
      return poppedNode;
    }

    let currentNode = headNode;
    let previousNode = null;

    while (currentNode.nextNode) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    previousNode.nextNode = null;
    tailNode = previousNode;
    return currentNode;
  };

  const contains = (value) => {
    let currentNode = headNode;

    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }

    return false;
  };

  const findValue = (value) => {
    let currentNode = headNode;
    let index = 0;

    while (currentNode) {
      if (currentNode.value === value) {
        return index;
      }
      currentNode = currentNode.nextNode;
      index++;
    }

    return null;
  };

  const toString = () => {
    let result = "";
    let currentNode = headNode;

    while (currentNode) {
      result += `(${currentNode.value}) -> `;
      currentNode = currentNode.nextNode;
    }

    result += null;
    return result;
  };

  const insertAt = (value, index) => {
    if (index === 0) {
      prepend(value);
      return;
    }

    const newNode = createNode(value);
    let count = 0;
    let currentNode = headNode;
    let previousNode = null;

    while (count < index && currentNode) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
      count++;
    }

    newNode.nextNode = currentNode;
    previousNode.nextNode = newNode;
  };

  const removeAt = (index) => {
    if (!headNode) {
      return;
    }

    if (index === 0) {
      headNode = headNode.nextNode;
      return;
    }

    let count = 0;
    let currentNode = headNode;
    let previousNode = null;

    while (count < index && currentNode) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
      count++;
    }

    if (!currentNode) {
      return;
    }

    previousNode.nextNode = currentNode.nextNode;
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    findValue,
    toString,
    insertAt,
    removeAt,
  };
};

export { createLinkedList };
