function insertionSort(items) {
  // Loop through each element
  for (let i = 1; i < items.length; i++) {
    let currentValue = items[i];
    for (let j = i; j >= 0; j--) {
      if (items[j - 1] > currentValue) {
        items[j] = items[j - 1];
      } else if (items[j - 1] < currentValue || items[j - 1] === undefined) {
        items[j] = currentValue;
        break;
      }
    }
  }

  return items;
}

module.exports = insertionSort;
