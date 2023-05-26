const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion passed : ${actual}  === ${expected}`);
  } else {
    console.log(`❌❌ Assertion failed : ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (obj, value) {
  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
};

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
