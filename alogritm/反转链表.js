// 定义链表节点
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// 反转链表的函数
function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next; // 暂存下一个节点
    current.next = prev; // 反转当前节点的指针
    prev = current; // 将prev移动到当前节点
    current = next; // 将current移动到下一个节点
  }

  return prev; // 返回新的头节点
}

// 示例用法
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log("原始链表:");
printList(head);

let reversedHead = reverseLinkedList(head);

console.log("反转后的链表:");
printList(reversedHead);

// 打印链表的函数
function printList(head) {
  let current = head;
  let str = "";
  while (current !== null) {
    str += current.value + " -> ";
    current = current.next;
  }
  str += "null";
  console.log(str);
}
