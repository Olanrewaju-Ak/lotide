const findKeyByValue = require("../findKeyByValue");
const assertEqual = require("../assertEqual");

//TEST
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  life: "This is us"
};

console.log(bestTVShowsByGenre.drama);
console.log(bestTVShowsByGenre["drama"]);

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "This is us"), "life");
