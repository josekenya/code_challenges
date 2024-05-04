/**
 * Turing's Baseball Game Code Challenge
 */

function calculatePoints(ops = []) {
  let record = [];

  if (ops.length < 1 || ops.length > 1000) {
    throw new RangeError("Array is out of range");
  }

  for (const op of ops) {
    if (Number.isInteger(parseInt(op))) {
      record.push(parseInt(op));
    }

    if (op === "+") {
      record.push(
        parseInt(record[record.length - 1]) +
          parseInt(record[record.length - 2])
      );
    }

    if (op === "C") {
      record.splice(record.length - 1, 1);
    }

    if (op === "D") {
      record.push(parseInt(record[record.length - 1]) * 2);
    }
  }

  const sum = record.reduce((acc, curr) => acc + curr);

  return sum;
}

let line = "5 -2 4 C D 9 + +";

let ops = line.split(" ");

console.log(calculatePoints(ops));
