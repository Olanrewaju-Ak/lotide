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

const letterPositions = function (string) {
  const results = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      if (Array.isArray(results[string[i]])) {
        results[string[i]].push(i);
      } else {
        results[string[i]] = [i];
      }
    }
  }
  console.log(results);
  return results;
};

letterPositions("hello");
letterPositions("hello how are you");
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello how are you").e, [1, 12]);
