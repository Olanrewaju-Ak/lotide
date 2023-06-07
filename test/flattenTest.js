const assertArraysEqual = require("../assertArraysEqual");
const flatten = require("../flatten");

//TEST
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten(["a", "b", [3, "f"], "c", []]), ["a", "b", 3, "f", "c"]);
