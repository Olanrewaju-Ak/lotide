const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion passed : ${actual}  === ${expected}`);
  } else {
    console.log(`❌❌ Assertion failed : ${actual} !== ${expected}`);
  }
};

const countLetters = function (string) {
  let count = {};
  for (const letter of string) {
    if (letter !== " ") {
      if (count[letter]) {
        count[letter] += 1;
      } else {
        count[letter] = 1;
      }
    }
  }
  console.log(count);
  return count;
};

countLetters("I am Home");
countLetters("accommodation");
