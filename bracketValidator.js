/** Prompt
 *
 * You're working with an intern that keeps coming to you with JavaScript code that won't run because the braces, brackets, and parentheses are off. To save you both some time, you decide to write a braces/brackets/parentheses validator.

Let's say:

  '(', '{', '[' are called "openers."
  ')', '}', ']' are called "closers."

Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.

Examples:

  "{ [ ] ( ) }" should return True
  "{ [ ( ] ) }" should return False
  "{ [ }" should return False
 *
O: boolean; true or false
I: braces, brackets, paranetheses
C: none
E: should it take into account the code in between

 */

function isValid(code) {

  //TODO
  // Determine if the input code is valid

  const openers = ['(', '{', '['];
  // array of openers

  const closers = [')', '}', ']'];
  // array of closers

  if (code) {
    // check if argument (code) matches nany of the openers
    // initialize argument
    // select index 0
    // check if in openers

    // select last index
    // check if in closers

    // if both are true, select true
  }



  return false;
}

console.log(isValid("{ [ ] ( ) }")) // should return True
















// Tests

let desc = 'valid short code';
assertEqual(isValid('()'), true, desc);

desc = 'valid longer code';
assertEqual(isValid('([]{[]})[]{{}()}'), true, desc);

desc = 'mismatched opener and closer';
assertEqual(isValid('([][]}'), false, desc);

desc = 'missing closer';
assertEqual(isValid('[[]()'), false, desc);

desc = 'extra closer';
assertEqual(isValid('[[]]())'), false, desc);

desc = 'empty string';
assertEqual(isValid(''), true, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}