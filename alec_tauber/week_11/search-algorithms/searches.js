function binarySearch(arr, element){
    //  search through the array non-recursively for the element
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found
    let start = 0;
    let end = arr.length-1;
    let midPoint = Math.floor((start + end) / 2);
    // Iterate while start not meets end
    while (arr[midPoint] !== element && start < end) {
      if (element < arr[midPoint]){
        end = mid - 1;
      } else {
        start = mid  + 1;
      }

      midPoint = Math.floor( (start + end) / 2 );
    }
    return (arr[midPoint] === element) ? midPoint : -1;
}

function recursiveBinarySearch(arr, element, midPoint=Math.floor((arr.length -1) /2), start=0, end=arr.length-1){
  // console.log(arr, element, midPoint, start, end);
  if(arr[midPoint] === element){
    return midPoint; // base case
  }

  if (start >= end) {
    start = midPoint + 1;
    // base case
  } else {
    midPoint = end - 1;
  }


}

module.exports = {
    binarySearch,
    recursiveBinarySearch
}
