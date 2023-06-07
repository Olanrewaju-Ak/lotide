const findKey = function (object, callBack) {
  for (const key in object) {
    if (callBack(object[key])) {
      console.log(key);
      return key;
    }
  }
};

module.exports = findKey;
