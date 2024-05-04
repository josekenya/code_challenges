/**
 * Remove duplicate values from a string
 */

function removeDuplicate(str = "") {
  const unq = Array.from(new Set(str.split(" "))).join(" ");
  return unq;
}

let word = "A quick brown brown fox jumps over over the fence";

console.log(removeDuplicate(word));
