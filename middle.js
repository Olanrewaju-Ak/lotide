// TEST/ASSERTIONS FUNCTIONS
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

// check the array length
// if array.length = 0,1 or 2 return an empty array
// if array.lenth is more than 2 and array.length % 2 = 0,
// middleItem = Math.round((array.length)/2)
//secondItem = middleItem +1

//ACTUAL FUNCTION
const middle = function (array) {
  let middleArr = [];
  let length = array.length;
  const middleItemIndex = Math.round(length / 2) - 1;
  const middleItemIndex2 = middleItemIndex + 1;
  if (!length || length < 3) {
  } else if (length % 2 === 1) {
    middleArr.push(array[middleItemIndex]);
  } else {
    middleArr.push(array[middleItemIndex], array[middleItemIndex2]);
  }
  console.log(middleArr);
  return middleArr;
};

// middle([1]); // => []
// middle([1, 2]); // => []
// middle([1, 2, 3]); // => [2]
// middle([1, 2, 3, 4, 5]); // => [3]
// middle([1, 2, 3, 4]); // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

//TEST
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
