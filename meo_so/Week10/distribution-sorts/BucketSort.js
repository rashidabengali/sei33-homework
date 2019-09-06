function bucketSort(items, bucketCount = 10) {
  const min = Math.min.apply(Math, items);
  let buckets = [];
  // build buckets
  for (let i = 0; i < items.length; i++) {
    const newIndex = Math.floor((items[i] - min) / bucketCount);
    buckets[newIndex] = buckets[newIndex] || [];
    buckets[newIndex].push(items[i]);
  }

  let count = 0;
  for (let i = 0; i < buckets.length; i++) {
    if (typeof buckets[i] !== "undefined") {
      insertionSort(buckets[i]);
      for (let j = 0; j < buckets[i].length; j++) {
        items[count++] = buckets[i][j];
      }
    }
  }
  return items;
}

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

module.exports = bucketSort;
