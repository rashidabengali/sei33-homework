function insertionSort (items) {
  // Loop through each element
  for (let i = 0; i < items.length; i += 1) {
    // store the current item value so it can be placed correctly
    // in the sorted portion of the array
    let currentItem = items[i];

    // Loop backward through the sorted portion of the array
    // and scoot everything over until you find the right place to
    // insert the value you're working with
    let j;

    for (j = i - 1; j >= 0 && items[j] > currentItem; j--) {
    // Copy each item to the next slot over, as long as the value is smaller
    // than the item in the sorted array we're looking at (items[j] > value)
    items[j + 1] = items[j];
    }

  // We can now insert the item in its sorted location
  items[j + 1] = currentItem;
  }

  // Remember to return the list!
  return items;
}

module.exports = insertionSort;
