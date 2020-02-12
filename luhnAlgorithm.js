/**
Given a sequence of digits:
Double every second digit, starting from the right.
If doubling the digit results in a number greater than 9, subtract 9 from the product
Find the sum all of the digits
If the sum is evenly divisible by 10, then the sequence / card number is valid.

Wiki:
https://en.wikipedia.org/wiki/Luhn_algorithm

Walkthrough:
https://medium.com/cyberdoggo/luhn-algorithm-in-javascript-python-clojure-part-1-c4ea3079d0f7

Ex:

isValid("4539148803436467") // true

isValid("8273123273520569") // false
*/

const isValid = card => {
  const arr = []
  for (let i = 0; i < card.length; i++) {
    // do stuff to the digits and add them to arr
    // check if evenl
    if (i % 2 == 0) {
      // double digit accordig to formula and add to arr
      if (card[i] * 2 < 10) {
        arr.push(card[i]*2)
      } else {
      // add digit to arr
      arr.push(card[i]*2-9)
    }
  } else {
    arr.push(parseInt(card[i], 10))
  }
  // return sum of arr
  }
  return arr.reduce( (prv, curr) => prv + curr) % 10 === 0;
}


// const isValid = card => {
//   const arr = []
//   for (let i = 0; i < card.length; i++) {
//     if (i % 2 == 0) {
//       if (card[i]*2 < 10) {
//         arr.push(card[i]*2);
//       } else {
//         arr.push(card[i]*2-9);
//       }
//     } else {
//       arr.push(parseInt(card[i],10))
//     }
//   }
//   return arr.reduce( (prv, cur) => prv + cur) % 10 === 0;
// }

// // console.log(isValid("4539148803436467")) // true

console.log(isValid("4539148803436467")) // true

console.log(isValid("8273123273520569")) // false