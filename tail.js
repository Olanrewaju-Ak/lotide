const tail = function (array) {
  let headless = [...array].splice(1);
  return array && array.length ? headless : undefined;
};

module.exports = tail;
