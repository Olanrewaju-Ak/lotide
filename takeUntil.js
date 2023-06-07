const takeUntil = function (array, callback) {
  // ... loop through the array
  // for each item of the array, pass the item into the callback;
  //when the callback returns true;
  // return the result
  const result = [];
  for (const item of array) {
    if (callback(item)) {
      break;
    } else {
      result.push(item);
    }
  }
  return result;
};

module.exports = takeUntil;
