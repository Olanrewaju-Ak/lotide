const without = function (source, itemsToRemove) {
  let newArray = source.slice(); //makes a shallow copy of source
  for (let i = 0; i < itemsToRemove.length; i++) {
    const index = newArray.indexOf(itemsToRemove[i]);
    if (index > -1) {
      // if index exists in newArray
      newArray.splice(index, 1); //removes 1 item at index(index)
    }
  }

  return newArray;
};

module.exports = without;
