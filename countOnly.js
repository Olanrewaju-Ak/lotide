const countOnly = (allItems, itemsToCount) => {
  const results = {};
  for (const item of allItems) {
    itemsToCount[item] ? (results[item] ? (results[item] += 1) : (results[item] = 1)) : undefined;
  }

  return results;
};

module.exports = countOnly;
