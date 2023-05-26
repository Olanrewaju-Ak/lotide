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

/*
const without = function (source, itemsToRemove) {
  let result = [];
  for (const item of source) {
    if (itemsToRemove.includes(item)) {
      console.log(item + " is removed");
      return;
    } else {
      result.push(item);
    }
    console.log(result);
    return result;
  }
};
*/

const without = function (source, itemsToRemove) {
  let newArray = source.slice(); //makes a shallow copy of source
  for (let i = 0; i < itemsToRemove.length; i++) {
    const index = newArray.indexOf(itemsToRemove[i]);
    if (index > -1) {
      // if index exists in newArray
      newArray.splice(index, 1); //removes 1 item at index(index)
    }
  }
  console.log(newArray);
  return newArray;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

without([1, 2, 3], [1]);
without(["1", "2", "3"], [1, 2, "3"]);
