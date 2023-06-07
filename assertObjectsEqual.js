const eqObjects = require("./eqObjects");

const assertObjectsEqual = function (obj1, obj2) {
  const inspect = require("util").inspect;
  if (eqObjects(obj1, obj2)) {
    console.log(`✅✅ Assertion passed : ${inspect(obj1)}  === ${inspect(obj2)}`);
  } else {
    console.log(`❌❌ Assertion failed : ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};

module.exports = assertObjectsEqual;
