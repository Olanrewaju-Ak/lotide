const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅ Assertion passed : ${array1}  === ${array2}`);
  } else {
    console.log(`❌❌ Assertion failed : ${array1} !== ${array2}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }

  return results;
};

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

