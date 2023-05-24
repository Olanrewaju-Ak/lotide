const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const Count = function (array) {
  let result = {};
  for (const item of array) {
    if (result[item]) {
      result[item] += 1; // result[item] checks if the key exists in the result object, if it does
      //the value will be increased by +1
    } else {
      result[item] = 1;
    }
  }
  console.log(result);
};

Count(firstNames);
