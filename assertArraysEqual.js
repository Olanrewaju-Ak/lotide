const eqArrays = function (array1, array2) {
  let notInBoth = [];
  for (const item of array1) {
    if (array2.includes(item) && array1.indexOf(item) === array2.indexOf(item)) {
    } else {
      notInBoth.push(item);
    }
  }
  if (notInBoth.length) {
    return false;
  } else {
    return true;
  }
};

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅ Assertion passed : ${array1}  === ${array2}`);
  } else {
    console.log(`❌❌ Assertion failed : ${array1} !== ${array2}`);
  }
};

// TEST CODE
assertArraysEqual(["1", "2", "3"], ["3", "2", 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["a", "s", "e"], []);
