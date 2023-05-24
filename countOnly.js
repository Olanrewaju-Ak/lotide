const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion passed : ${actual}  === ${expected}`);
  } else {
    console.log(`❌❌ Assertion failed : ${actual} !== ${expected}`);
  }
};

/*
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  //check the object first to know if it is true or false
  for (const key in itemsToCount) {
    if (itemsToCount[key] === true) {
      console.log(itemsToCount[key]);
    } else {
      console.log(key);
    }
  }
  // check to see the count of each item in the array;
  for (let i = 0; i < allItems.length; i++) {
    // console.log(allItems[i]);
    let count = 0;
    allItems.forEach((item) => {
      //trying to check how many times each item occurs in the array allItems
      if (item === allItems[i]) {
        count++;
      }
      // console.log(i + "is " + count);
    });
  }
};

*/

const countOnly = (allItems, itemsToCount) => {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
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
