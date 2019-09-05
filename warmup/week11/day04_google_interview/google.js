const findMatch = (array, sum) => {

// Version 1

// for (let i = 0; i < array.length; i++) {
//   for (let j = i+1; j < array.length; j++) {
//     if (array[i] + array[j] === sum) {
//       console.log(`The digits ${array[i]} and ${array[j]} equals ${sum}`);
//       return true
//     }
//   }
// }
// return false

// version 2

// let search = new Set();
//
// search.add(sum - array[0])
//
// for (let i = 0; i < array.length; i++) {
//   let value = sum - array[i]
//
//   if (search.has(array[i])) {
//     return true
//   } else {
//     search.add(value)
//   }
// }
// return false

// version 3

  for (let i = 0; i < array.length; i++) {
    const difference = sum - array[i]

    const tempArray = array.filter(element => element === difference && difference !== array[i])

    if (tempArray.length !==0) {
      return true
    }
  }
  return false
}

module.exports = findMatch
