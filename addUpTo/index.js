// Write a function that calculates the sum of all numbers from 1 up to (and including) some number n.

// Which is better (faster)? 
// addUpto or addUpto2?
// count number of operations

function addUpto(n) {
  // sum is an accumulator (accumulator is a variable that stores the sum of all the numbers)
  let sum = 0;
  // loop through all numbers from 1 to n
  for (let i = 1; i <= n; i++) {
    // add each number to the sum
    sum += i;
  }
  return sum;
}
// The number of operations is not constant
// number of operations: n operations
// 2 operations per loop iteration
// # of operations is (eventually) bounded by a multiple of n (say, 10n)
// Big O Notation: O(n)

function addUpto2(n) {
  // example: if n = 5
  return n * (n + 1) / 2;
  // 5 * (5 + 1) / 2 = 15
}
// The number of operations is constant.
// # of operations: 3
// Big O: O(1)
// As n grows, it has no change in the runtime.
