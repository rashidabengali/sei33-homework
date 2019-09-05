function quickSort(arr) {
  // YOUR CODE HERE
  if (arr.length <= 1) {
    return arr;
  } else {
    const leftSide = [];
    const rightSide = [];
    const newArray = [];
    const pivot = arr.pop();
    console.log(pivot);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= pivot) {
        leftSide.push(arr[i]);
      } else {
        rightSide.push(arr[i]);
      }
    }
    console.log("left", leftSide, "right", rightSide);
    return newArray.concat(quickSort(leftSide), pivot, quickSort(rightSide));
  }
}

module.exports = quickSort;
