const letterPositions = require("../letterPositions");
const assertArraysEqual = require("../assertArraysEqual");

letterPositions("hello");
letterPositions("hello how are you");
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello how are you").e, [1, 12]);
