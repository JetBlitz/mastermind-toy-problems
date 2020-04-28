// Implement the push, pop, and getMax methods

//Use your Stack class to implement a new class MaxStack with a method getMax() that returns the largest element in the stack. getMax() should not remove the item.

//Your stacks will contain only integers.

//! Solution
/**
We define two new stacks within our MaxStack class—stack holds all of our integers, and maxesStack holds our "maxima." We use maxesStack to keep our max up to date in constant time as we push() and pop():

  1. Whenever we push() a new item, we check to see if it's greater than or equal to the current max, which is at the top of maxesStack. If it is, we also push() it onto maxesStack.

  2. Whenever we pop(), we also pop() from the top of maxesStack if the item equals the top item in maxesStack.

*/

class MaxStack {
  constructor() {
    this.items = new Stack();
  }

  push(item) {
    this.items.push(item);
  }

  //remove the last item
  pop() {
    if (!this.items.peek()) {
      return null;
    }
    return this.items.pop();
  }

  getMax() {
    let newMax = [];
    let maxNumber = 0;

    if (!this.items.peek()) {
      return null;
    } else {
      // [10, 6, 7]
      while (this.items.peek()) {
        if (this.items.peek() > maxNumber) {
          maxNumber = this.items.peek();
        }
        newMax.push(this.items.pop());
      }
      // [9, 10]
      while (newMax.length > 0) {
        if (newMax[newMax.length - 1] < newMax.length - 2) {
          newMax.push(this.items.pop());
        }
        this.items.push(newMax.pop());
      }
      // console.log("this.items array: ", this.items);
      // console.log(`this is newMax: ${newMax}`);
      // console.log(newMax);
    }
    return maxNumber;
  }
}

class Stack {
  constructor() {
    // Initialize an empty stack
    this.items = [];
  }

  // Push a new item onto the stack
  push(item) {
    this.items.push(item);
  }

  // Remove and return the last item
  pop() {
    // If the stack is empty, return null
    // (It would also be reasonable to throw an exception)
    if (!this.items.length) {
      return null;
    }
    return this.items.pop();
  }

  // Return the last item without removing it
  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}

// Tests

const s = new MaxStack();
s.push(5);

assertEquals(5, s.getMax(), "check max after 1st push");

s.push(4);
s.push(7);
s.push(7);
s.push(8);

assertEquals(8, s.getMax(), "check before 1st pop");
assertEquals(8, s.pop(), "check pop #1");
assertEquals(7, s.getMax(), "check max after 1st pop");
assertEquals(7, s.pop(), "check pop #2");
assertEquals(7, s.getMax(), "check max after 2nd pop");
assertEquals(7, s.pop(), "check pop #3");
assertEquals(5, s.getMax(), "check max after 3rd pop");
assertEquals(4, s.pop(), "check pop #4");
assertEquals(5, s.getMax(), "check max after 4th pop");

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
