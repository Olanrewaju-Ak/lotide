const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");
//TEST
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);