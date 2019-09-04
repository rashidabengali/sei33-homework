console.log('run');

const dashatize = (input) => {

  number = Math.abs(input) // return the absolute value of the number

  if (Number.isNaN(number)) {
    console.log(input);
    return;
  }

// let array = number.toString().split("");
let array = (""+number).split("");
let string = "";

for (let i = 0; i < array.length; i++) {

  if (Number(array[i] % 2 !== 0)) {
    string += '-' + array[i] + '-'
  } else {
    string += array[i];
  }
}

let dashed = string.replace(/--/gi, '-')

if (dashed[0] === '-') {
  dashed = dashed.substr(1, dashed.length)
}

if (dashed[dashed.length-1] === '-') {
  dashed = dashed.substr(0, dashed.length-1)
}

console.log(dashed);

}


// Meo's solution
/*
const dashatize = number => {
  if (isNaN(number)) {
    return number;
  }
  const newArray = ("" + number).replace("-", "").split("");
  numStr = "";
  numStr += newArray[0];

  for (let i = 1; i < newArray.length; i++) {
    if (
      (newArray[i] % 2 !== 0 || newArray[i - 1] % 2 !== 0) &&
      numStr[numStr.length - 1] !== "-"
    ) {
      numStr = numStr + "-" + newArray[i];
    } else {
      numStr += newArray[i];
    }
  }
  return numStr;
};
*/
console.log(dashatize(86320));
console.log(dashatize(5311));
console.log(dashatize(NaN));
