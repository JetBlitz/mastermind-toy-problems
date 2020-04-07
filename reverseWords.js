/** Prompt
 *
You're working on a secret team solving coded transmissions.

Your team is scrambling to decipher a recent message, worried it's a plot to break into a major European National Cake Vault. The message has been mostly deciphered, but all the words are backward! Your colleagues have handed off the last step to you.

Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place. ↴

An in-place function modifies data structures or objects outside of its own stack frame ↴ (i.e.: stored on the process heap or in the stack frame of a calling function). Because of this, the changes made by the function remain after the call completes.

In-place algorithms are sometimes called destructive, since the original input is "destroyed" (or modified) during the function call.

Careful: "In-place" does not mean "without creating any additional variables!" Rather, it means "without creating a new copy of the input." In general, an in-place function will only create additional variables that are O(1)O(1) space.

An out-of-place function doesn't make any changes that are visible to other functions. Usually, those functions copy any data structures or objects before manipulating and changing them.

In many languages, primitive values (integers, floating point numbers, or characters) are copied when passed as arguments, and more complex data structures (arrays, heaps, or hash tables) are passed by reference. This is what Javascript does.

Here are two functions that do the same operation on an array, except one is in-place and the other is out-of-place:
//!
  function squareArrayInPlace(intArray) {

  intArray.forEach((int, index) => {
    intArray[index] *= int;
  });

  // NOTE: no need to return anything - we modified
  // intArray in place
}

//!
function squareArrayOutOfPlace(intArray) {

  // We allocate a new array that we'll fill in with the new values
  const squaredArray = [];

  intArray.forEach((int, index) => {
    squaredArray[index] = Math.pow(int, 2);
  });

  return squaredArray;
}


Working in-place is a good way to save time and space. An in-place algorithm avoids the cost of initializing or copying data structures, and it usually has an O(1)O(1) space cost.

But be careful: an in-place algorithm can cause side effects. Your input is "destroyed" or "altered," which can affect code outside of your function. For example:

//!
  const originalArray = [2, 3, 4, 5];
squareArrayInPlace(originalArray);

console.log('original array: ' + originalArray);
// Logs: original array: 4,9,16,25 - confusingly!


Generally, out-of-place algorithms are considered safer because they avoid side effects. You should only use an in-place algorithm if you're space constrained or you're positive you don't need the original input anymore, even for debugging.


Why an array of characters instead of a string?

The goal of this question is to practice manipulating strings in place. Since we're modifying the message, we need a mutable ↴ //?

//?
A mutable object can be changed after it's created, and an immutable object can't.

In Javascript, everything (except for strings) is mutable by default:

  const array  = [4, 9];

  array[0] = 1;
  // array is now [1, 9]

JavaScript

///
Freezing an object makes it immutable, though:

  const array  = [4, 9];

  // Make it immutable
  Object.freeze(array);

  array[0] = 1;
  // array is still [4, 9]
JavaScript

///
Strings can be mutable or immutable depending on the language.

Strings are immutable in Javascript:

  const testString = 'mutable?';

  testString[7] = '!';
  // String is still 'mutable?'
  // (but no error is raised!)
JavaScript

///
But in some other languages, like Swift, strings can be mutable:

  var testString = "mutable?"

  if let range = testString.range(of: "?") {
    testString.replaceSubrange(range, with: "!")
    // testString is now "mutable!"
}
Swift


Mutable objects are nice because you can make changes in-place, without allocating a new object. But be careful—whenever you make an in-place change to an object, all references to that object will now reflect the change.
//?

//? (continued)
Since we're modifying the message, we need a mutable
type like an array, instead of JavaScript's immutable strings.

For example:

  const message = [ 'c', 'a', 'k', 'e', ' ',
                'p', 'o', 'u', 'n', 'd', ' ',
                's', 't', 'e', 'a', 'l' ];

reverseWords(message);

console.log(message.join(''));
// Prints: 'steal pound cake'

When writing your function, assume the message contains only letters and spaces, and all words are separated by one space.

*/

//TODO

