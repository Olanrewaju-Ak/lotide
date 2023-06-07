// loop through the outer array,
//check each item to determine with one is an array using .isArray
// flatten it somehow??

const flatten = function (array) {
  let flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (const item of array[i]) {
        flattenedArray.push(item);
      }
    } else {
      flattenedArray.push(array[i]);
    }
  }
  console.log(flattenedArray);
  return flattenedArray;
};

module.exports = flatten;
