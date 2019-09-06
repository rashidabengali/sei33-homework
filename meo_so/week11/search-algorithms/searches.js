function binarySearch(arr, element) {
  //  search through the array non-recursively for the element
  //  if the element is not found, return -1
  //  if the element is found, return the index at which it was found
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let midPoint = Math.floor((start + end) / 2);
    if (arr[midPoint] === element) {
      return midPoint;
    } else if (arr[midPoint] < element) {
      start = midPoint + 1;
    } else {
      end = midPoint - 1;
    }
  }
  return -1;
}

function recursiveBinarySearch(arr, element, start, end) {
  //  search through the array recursively for the element
  //  you may need to add more parameters to this function!
  //  if the element is not found, return -1
  //  if the element is found, return the index at which it was found
  let startPoint = start || 0;
  let endPoint = end || arr.length - 1;
  let midPoint = Math.floor((startPoint + endPoint) / 2);

  if (startPoint > endPoint) return -1;
  if (arr[midPoint] === element) return midPoint;

  if (arr[midPoint] > element) {
    return recursiveBinarySearch(arr, element, start, midPoint - 1);
  } else {
    return recursiveBinarySearch(arr, element, midPoint + 1, end);
  }
}

module.exports = {
  binarySearch,
  recursiveBinarySearch
};
