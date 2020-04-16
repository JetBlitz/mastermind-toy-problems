/**
You have a singly - linked list ↴ and want to check if it contains a cycle.

A singly - linked list is built with nodes, where each node has:

node.next—the next node in the list.
  node.value—the data held in the node.For example, if our linked list stores people in line at the movies, node.value might be the person's name.

For example:

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

A cycle occurs when a node’s next points back to a previous node in the list.The linked list is no longer linear with a beginning and end—instead, it cycles through a loop of nodes.

Write a function containsCycle() that takes the first node in a singly - linked list and returns a boolean indicating whether the list contains a cycle.

Link: https://www.interviewcake.com/question/javascript/linked-list-cycles?utm_source=weekly_email&utm_source=drip&utm_campaign=weekly_email&utm_campaign=Interview%20Cake%20Weekly%20Problem%20%23291:%20Largest%20Stack&utm_medium=email&utm_medium=email&__s=s08ck7tg01uzcnt0mz7q
*/

