/**
You have a singly - linked list ↴ and want to check if it contains a cycle.

//!

	Worst Case:
  space	  O(n)O(n)
  prepend	O(1)O(1)
  append	O(1)O(1)
  lookup	O(n)O(n)
  insert	O(n)O(n)
  delete	O(n)O(n)

  A linked list organizes items sequentially, with each item storing a pointer to the next one.

Picture a linked list like a chain of paperclips linked together. It's quick to add another paperclip to the top or bottom. It's even quick to insert one in the middle—just disconnect the chain at the middle link, add the new paperclip, then reconnect the other half.

An item in a linked list is called a node. The first node is called the head. The last node is called the tail.

Confusingly, sometimes people use the word tail to refer to "the whole rest of the list after the head."

  Value     Value     Value
    5         1         9
  Next ->   Next ->    Next ->     None

  Head                 Tail

A linked list with 3 nodes. The first node is labelled "head" and the last node is labelled "tail."

Unlike an array, consecutive items in a linked list are not necessarily next to each other in memory.

Strengths:
    Fast operations on the ends.
      Adding elements at either end of a linked list is O(1)O(1). Removing the first element is also O(1)O(1).
    Flexible size.
      There's no need to specify how many elements you're going to store ahead of time. You can keep adding elements as long as there's enough space on the machine.

Weaknesses:
    Costly lookups.
      To access or edit an item in a linked list, you have to take O(i)O(i) time to walk from the head of the list to the iith item.

Uses:
    Stacks and queues only need fast operations on the ends, so linked lists are ideal.


//!
In JavaScript
    Most languages (including JavaScript) don't provide a linked list implementation. Assuming we've already implemented our own, here's how we'd construct the linked list above:

    const a = new LinkedListNode(5);
    const b = new LinkedListNode(1);
    const c = new LinkedListNode(9);

    a.next = b;
    b.next = c;


//!
Doubly Linked Lists
In a basic linked list, each item stores a single pointer to the next element.

In a doubly linked list, items have pointers to the next and the previous nodes.

          Value         Value             Value
            5             1                 9
          Next ->       Next ->           Next ->     None
  None <- Previous   <- Previous       <- Previous



A doubly-linked list with 3 nodes. The first node has value 5 with a "next" arrow pointing ahead to the second node and a "previous" arrow pointing back to "None." The second node has value 1 with a "next" arrow pointing ahead to the third node and a "previous" arrow pointing back to the first node. The third node has value 9 with a "next" arrow pointing ahead to "None" and a "previous" arrow pointing back to the second node.


Doubly linked lists allow us to traverse our list backwards. In a singly linked list, if you just had a pointer to a node in the middle of a list, there would be no way to know what nodes came before it. Not a problem in a doubly linked list.

//!
Not cache-friendly
Most computers have caching systems that make reading from sequential addresses in memory faster than reading from scattered addresses.

Array items are always located right next to each other in computer memory, but linked list nodes can be scattered all over.

So iterating through a linked list is usually quite a bit slower than iterating through the items in an array, even though they're both theoretically O(n)O(n) time.
//!

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


//TODO Write a function containsCycle() that takes the first node in a singly - linked list and returns a boolean indicating whether the list contains a cycle.

Link: https://www.interviewcake.com/question/javascript/linked-list-cycles?utm_source=weekly_email&utm_source=drip&utm_campaign=weekly_email&utm_campaign=Interview%20Cake%20Weekly%20Problem%20%23291:%20Largest%20Stack&utm_medium=email&utm_medium=email&__s=s08ck7tg01uzcnt0mz7q


Breakdown
Because a cycle could result from the last node linking to the first node, we might need to look at every node before we even see the start of our cycle again. So it seems like we can’t do better than O(n)O(n) runtime.

//! How can we track the nodes we’ve already seen?

By using a set, we could store all the nodes we've seen so far. The algorithm is simple:

  1.
    // If the current node is already in our set, we have a cycle.
      // Return true
  2.
    // If the current node is null we've hit the end of the list.
      // Return false
  3.
    // Else throw the current node in our set and keep going.

    //?
    O: boolean whether the list contains a cycle
    I: First node in a singly linked list
    C: uses only the first node
      // it is a singly linked list
    E: Time and space costs of this approach
      // the best runtime is O(n)
      // the best space cost is also O(n)

      ////////

  Solution
    We keep two pointers to nodes (we'll call these “runners”both starting at the first node. Every time slowRunner movone node ahead, fastRunner moves two nodes ahead.

    If the linked list has a cycle, fastRunner will "lap" (catup with) slowRunner, and they will momentarily equal each other.

    If the list does not have a cycle, fastRunner will reach tend.


*/

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


/**  //! FIRST Attempt
function containsCycle() {
  // if current nodes is already in our set, we have a cycle.
  if (currentNode === true) {
    // return true
    return true;

  }


  // if the current node is null, we've hit the end of the list.
  if (currentNode === null) {
    // return false
  } else {

    // else throw the current node in our set and keep going.
  }



}

*/

//! SECOND Attempt

function containsCycle(firstNode) {


}