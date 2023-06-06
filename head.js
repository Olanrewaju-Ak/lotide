const head = function (array) {
  let firstItem = array[0];
  return array && array.length ? firstItem : undefined;
};

module.exports = head;
