console.log('run');

const array1 = ["one", "two", "three", "four"];

const reverseArray = function (array) {

  let reverse = [];

  // for (let i = array.length -1; i >= 0; i--) {
  //   reverse.push(array[i])
  // }

  // for (let i = 0; i < array.length; i++) {
  //   reverse.unshift(array[i])
  // }
  //
  // console.log('reverse', reverse);

  console.log('reverse', array.reverse());
};

reverseArray(array1);

const array2 = ["one", "two", ["three", "four"]];

const flattenArray = function (array) {

  let flatten = [];

  // for (let i = 0; i < array.length; i++) {

    // if (array[i] instanceof Array) {
    //   for (let j = 0; j < array[i].length; j++) {
    //     flatten.push(array[i][j])
    //   }
    // } else {
    //   flatten.push(array[i]);
    // }

    // if (Array.isArray(array[i])) {
    //   flatten = flatten.concat(array[i])
    // } else {
    //   flatten.push(array[i])
    // }

  // }
  // console.log('flatten', flatten);
  console.log('flatten', array.flat());
};

flattenArray(array2)
