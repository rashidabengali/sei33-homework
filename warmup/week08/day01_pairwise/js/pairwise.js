console.log('run');

// Version 1
/*
const pairwise = function (array, sum) {

  let result = 0;

  for (let i = 0; i < array.length; i++) {

    for (let j = i+1; j < array.length; j++) {

      if (array[i] + array[j] === sum) {
        result += i + j;
        array[i] = "";
        array[j] = "";
      }
    }
  }
  console.log(result);
}

// pairwise([7, 9, 11, 13, 15], 20);
pairwise([0, 0, 0, 0, 1, 1], 1);
*/

// Version 2
const pairwise = function (list, sum) {

  const result = list.reduce(function (total, element, index) {

    let searchElement = sum - element;

      if (list.indexOf(searchElement) !== -1 && list.indexOf(searchElement) !== index) {
        total += index + list.indexOf(searchElement);
        list.splice(index, 1, NaN);
        list.splice(list.indexOf(searchElement), 1, NaN);
      }
      return total;
  }, 0);

  // console.log(result);
  return result;
}

// pairwise([7, 9, 11, 13, 15], 20);
console.log(pairwise([0, 0, 0, 0, 1, 1], 1));
