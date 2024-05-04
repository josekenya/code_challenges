/**
 * Given an array of number of range n. Find the missing number.
 */

//Solution 1
function missingNumber(numbers = []) {
  const sortedNumbers = new Set(numbers);

  const expectedLength = numbers.length + 1;

  for (let number = 0; number < expectedLength; number++) {
    if (!sortedNumbers.has(number)) {
      return number;
    }
  }

  return -1;
}

//Solution 2

function missingNumber2(numbers = []) {
  let expectedSum = (numbers.length * (numbers.length + 1)) / 2;
  let actualSum = numbers.reduce((a, b) => a + b, 0);
  let missing = expectedSum - actualSum;

  return missing;
}

const numbers = [3, 0, 1];

console.log(missingNumber(numbers));
console.log(missingNumber2(numbers));
