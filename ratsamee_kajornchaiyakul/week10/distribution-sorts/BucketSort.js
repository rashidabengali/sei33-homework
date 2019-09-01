function mergeSort(arr) {
  if (arr.length === 1){
    return arr;
  }
  const halfIndex = arr.length /2;
  const arr1 = arr.slice(0, halfIndex);
  const arr2 = arr.slice(halfIndex, arr.length);
  return merge(mergeSort(arr1), mergeSort(arr2));
}

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

function findMax(items){
  let max = 0;
  items.forEach(item => {
    if (item > max){
      max = item;
    }
  });
  return max;
}

function bucketSort(items) {
  const maxItem = findMax(items);
  const maxLength = Math.round((maxItem * items.length) / (maxItem+1))+1;
  const allBuckets = new Array(maxLength);
  for (let i = 0; i < allBuckets.length; i++) {
    allBuckets[i] = [];
  }
  items.forEach(item => {
    const index = Math.round((item * items.length) / (maxItem+1));
    bucket = allBuckets[index];
    bucket.push(item);
  });

  // sort in each bucket
  const result = [];
  allBuckets.filter((x)=>{
    return x.length > 0;
  }).forEach(bucket => {
    bucket.forEach((item)=>{
      result.push(item);
    });
  });
  return mergeSort(result);
}

module.exports = bucketSort;
