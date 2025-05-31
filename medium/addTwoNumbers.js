/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class LinkList {
  constructor() {
    this.head = null;
  }
  printList() {
    return this;
  }
  append(val) {
    let current = this.head;
    if (current === null) {
      const newNode = new Node(val);
      this.head = newNode;
      return this;
    }
    while (current.next !== null) {
      current = current.next;
    }
    const newNode = new Node(val);
    current.next = newNode;
    return this;
  }
}
let list = new LinkList();

var addTwoNumbers = function (l1, l2) {
  const result = new LinkList();

  let l1Current = l1;
  let l2Current = l2;
  let carry = 0;
  while (l1Current !== null || l2Current !== null || carry > 0) {
    let sum = carry;
    if (l1Current !== null) {
      sum += l1Current.val;
      l1Current = l1Current.next;
    }
    if (l2Current !== null) {
      sum += l2Current.val;
      l2Current = l2Current.next;
    }

    carry = Math.floor(sum / 10);
    result.append(sum % 10);
  }
  return result.head;
};