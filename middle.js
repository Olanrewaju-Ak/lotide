// check the array length
// if array.length = 0,1 or 2 return an empty array
// if array.lenth is more than 2 and array.length % 2 = 0,
// middleItem = Math.round((array.length)/2)
//secondItem = middleItem +1

//ACTUAL FUNCTION
const middle = function (array) {
  let middleArr = [];
  let length = array.length;
  const middleItemIndex = Math.round(length / 2) - 1;
  const middleItemIndex2 = middleItemIndex + 1;
  if (!length || length < 3) {
  } else if (length % 2 === 1) {
    middleArr.push(array[middleItemIndex]);
  } else {
    middleArr.push(array[middleItemIndex], array[middleItemIndex2]);
  }

  return middleArr;
};

module.exports = middle;
