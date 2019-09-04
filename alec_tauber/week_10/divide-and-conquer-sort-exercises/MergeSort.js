function mergeSort(arr) {
  var len = arr.length;
  if (len < 2) {
    return arr;
  }
  var mid = Math.Floor(len/2),
      left = arr.slice(0,mid),
      right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var result = [],
      lLen = left.length,
      rLen = right.length,
      l = 0,
      r = 0;
  while (l < lLen && r < rLen) {
      if (left[l] < right[l]) {
        result.push(left[l++]);
      }
      else {
        result.push(right[r++]);
      }
  }
  return result.concat(left.slice(l)).concat(right.slice(r));

}


// HELPER FUNCTION: merge two sorted arrays
function merge(arr1, arr2) {
  var result = [];

  while (arr1.length && arr2.length) {
    if(arr1[0] <= arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }

  return result.concat(arr1, arr2);
}

module.exports = mergeSort;
