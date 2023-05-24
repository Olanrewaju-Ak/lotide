const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion passed : ${actual}  === ${expected}`);
  } else {
    console.log(`❌❌ Assertion failed : ${actual} !== ${expected}`);
  }
};

const countOnly = (allItems, itemsToCount) => {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      console.log(itemsToCount[item]);
      if (results[item]) {
        results[item] += 1; //if it sees that the item already exist in the object result, it will increase the number by 1
      } else {
        results[item] = 1; //this will initially set the value of the key to 1
      }
    }
  }
  console.log(results);
  return results;
};

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

const result1 = countOnly(firstNames, { Jason: true, Karima: true, Fang: true, Agouhanna: false });
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
