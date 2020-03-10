function mergeArrays(myArray, alicesArray) {

  const resultArr = [];

  // Combine the sorted arrays into one large sorted array

  // traverse through myArray
  for (var i = 0; i < myArray.length; i++) {
    // check the largest digit in the array (this is my max)

    // check to see if result array has the number
      // if not, push it into resultArr
    if (resultArr[i] !== myArray[i]) {
      resultArr.push(myArray[i])
    }
  }

  // tarverse through alicesArray
  for (var i = 0; i < alicesArray.length; i++) {
    if (resultArr[i] !== alicesArray[i]) {
      resultArr.push(alicesArray[i])
      // check the largest digit in the array (this is my max)
      // check to see if result array has the number
        // if not, push it into resultArr
    }

  }

      resultArr.sort((a, b) => a - b);


  return resultArr;
  // return [];
}


/** Example:
 * In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.

Each order is represented by an "order id" (an integer).

We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.

For example:
 */

const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]















// Tests

let desc = 'both arrays are empty';
let actual = mergeArrays([], []);
let expected = [];
assertDeepEqual(actual, expected, desc);

desc = 'first array is empty';
actual = mergeArrays([], [1, 2, 3]);
expected = [1, 2, 3];
assertDeepEqual(actual, expected, desc);

desc = 'second array is empty';
actual = mergeArrays([5, 6, 7], []);
expected = [5, 6, 7];
assertDeepEqual(actual, expected, desc);

desc = 'both arrays have some numbers';
actual = mergeArrays([2, 4, 6], [1, 3, 7]);
expected = [1, 2, 3, 4, 6, 7];
assertDeepEqual(actual, expected, desc);

desc = 'arrays are different lengths';
actual = mergeArrays([2, 4, 6, 8], [1, 7]);
expected = [1, 2, 4, 6, 7, 8];
assertDeepEqual(actual, expected, desc);

function assertDeepEqual(a, b, desc) {
  const aStr = JSON.stringify(a);
  const bStr = JSON.stringify(b);
  if (aStr !== bStr) {
    console.log(`${desc} ... FAIL: ${aStr} != ${bStr}`);
  } else {
    console.log(`${desc} ... PASS`);
  }
}