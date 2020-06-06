/**
 * You have a function rand5() that generates a random integer from 1 to 5. Use it to write a function rand7() that generates a random integer from 1 to 7.

rand5() returns each integer with equal probability. rand7() must also return each integer with equal probability.
 */

function rand5() {
  return Math.floor(Math.random() * (5 - 1 + 1)) + 1;
}

function rand7() {
  // Implement rand7() using rand5()

  return 0;
}

for (let i = 0; i < 14; i++) {
  console.log(rand7());
}
