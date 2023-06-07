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

module.exports = countLetters;
