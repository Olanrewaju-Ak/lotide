const eqArrays = require("./eqArrays");

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

module.exports = eqObjects;
