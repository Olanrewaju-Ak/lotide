const without = require("../without");
const assertArraysEqual = require("../assertArraysEqual");

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

without([1, 2, 3], [1]);
without(["1", "2", "3"], [1, 2, "3"]);
