// Solution 1
// const countOnly = (allItems, itemsToCount) => {
//   const results = {};
//   for (const item of allItems) {
//     if (itemsToCount[item]) {
//       console.log(itemsToCount[item]);
//       if (results[item]) {
//         results[item] += 1; //if it sees that the item already exist in the object result, it will increase the number by 1
//       } else {
//         results[item] = 1; //this will initially set the value of the key to 1
//       }
//     }
//   }
//   console.log(results);
//   return results;
// };

const countOnly = (allItems, itemsToCount) => {
  const results = {};
  for (const item of allItems) {
    itemsToCount[item] ? (results[item] ? (results[item] += 1) : (results[item] = 1)) : undefined;
  }
  console.log(results);
  return results;
};

module.exports = countOnly;
