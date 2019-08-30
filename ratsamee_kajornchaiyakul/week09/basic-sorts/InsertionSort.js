function insertionSort (items) {
  // Loop through each element
  for (let i = 1; i < items.length; i++) {
    // store the current item value so it can be placed correctly
    // in the sorted portion of the array
    const element = items[i];
    // Loop backward through the sorted portion of the array
    for (let j = i-1; j > -1; j--) {
      if (j === -1){
        break;
      }
      // and scoot everything over until you find the right place to
      // insert the value you're working with
      // Copy each item to the next slot over, as long as the value is smaller
      const tempElement = items[j];
      if (items[j] > element) {
        // than the item in the sorted array we're looking at (items[j] > value)
        items[j] = element;
        // We can now insert the item in its sorted location
        items[j+1] = tempElement;
        console.log(`round i: ${i}, j:${j}: ${items}`);
      }else{
        console.log(`round i: ${i}, j:${j}: ${items}`);
        break;
      }
      
    }
  }

  // Remember to return the list!
  return items;
}

module.exports = insertionSort;
