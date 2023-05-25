const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion passed : ${actual}  === ${expected}`);
  } else {
    console.log(`❌❌ Assertion failed : ${actual} !== ${expected}`);
  }
};

// the function should take in 2 arrays
//loop through the first array and check if each item is included in aray 2;
//also compare the indices if they are equal.
//if the two conditions checkout, then assertqual should return true.

const eqArrays = function (array1, array2) {
  let notInBoth = [];
  for (const item of array1) {
    if (array2.includes(item) && array1.indexOf(item) === array2.indexOf(item)) {
    } else {
      notInBoth.push(item);
    }
  }
  if (notInBoth.length) {
    // console.log(false);
    return false;
  } else {
    // console.log(true);
    return true;
  }
};

assertEqual(eqArrays(["1", "2", "3"], ["3", "2", 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["a", "s", "e"], ["s", "a", "e"]), false);
assertEqual(eqArrays(["a", "s", "e"], []), false);
