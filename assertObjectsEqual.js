const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion passed : ${actual}  === ${expected}`);
  } else {
    console.log(`❌❌ Assertion failed : ${actual} !== ${expected}`);
  }
};

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

const eqObjects = function (object1, object2) {
  let keysObj1 = Object.keys(object1);
  let keysObj2 = Object.keys(object2);

  if (keysObj1.length !== keysObj2.length) {
    return false;
  } else {
    for (const key of keysObj1) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      } else {
        return true;
      }
    }
  }
};

const assertObjectsEqual = function (obj1, obj2) {
  const inspect = require("util").inspect;
  if (eqObjects(obj1, obj2)) {
    console.log(`✅✅ Assertion passed : ${inspect(obj1)}  === ${inspect(obj2)}`);
  } else {
    console.log(`❌❌ Assertion failed : ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long"
};

assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject);