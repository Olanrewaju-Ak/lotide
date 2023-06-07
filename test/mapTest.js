const map = require("../map");
const assertArraysEqual = require("../assertArraysEqual");

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word[0]);
console.log(results1);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplyThree = map(numbers, (number) => {
  if (number % 2 !== 0) {
    return number * 3;
  } else {
    return number;
  }
});

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(multiplyThree, [3, 2, 9, 4, 15, 6, 21, 8, 27, 10]);
