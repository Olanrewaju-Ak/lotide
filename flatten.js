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

// loop through the outer array,
//check each item to determine with one is an array using .isArray
// flatten it somehow??

const flatten = function (array) {
  let flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (const item of array[i]) {
        flattenedArray.push(item);
      }
    } else {
      flattenedArray.push(array[i]);
    }
  }
  console.log(flattenedArray);
  return flattenedArray;
};

//TEST
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten(["a", "b", [3, "f"], "c", []]), ["a", "b", 3, "f", "c"]);
