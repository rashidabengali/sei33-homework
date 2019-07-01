
function validateCreditCard (number) {
  let n = number.split("-");
  n = n.join("");
  let nInt = parseInt(n);
  let last = n.substring(n.length -1, n.length);
  nArr = n.split("");
  let valuesSoFar = [];

  let sum = 0;
//all numbers added together > 16
for (var i = 0; i < n.length; i++) {
  sum += parseInt(nArr[i]);
}

//if not all the same number
  for (let i = 0; i < nArr.length; i++) {
    //check if each letter is a match to the whole string
    const value = nArr[i];
    if (valuesSoFar.indexOf(value) > -1) {
      //then its a repeat
    }
    else {
      valuesSoFar.push(value);
    }
  }
//if length > 16
  if (n.length != 16 ) {
    console.log("not 16 characters");
    return false;
  }
  // if not all numbers
  else if (isNaN(n)) {
    console.log("characters are not all numbers");
    return false;
  }
  // if last number even
  else if ((last % 2) != 0) {
    console.log("last number is odd");
    return false;
  }
  else if (sum < 16) {
    console.log("Sum of digits != 16");
    return false;
  }
  else if (valuesSoFar.length <= 1) {
    //more than one value
    console.log("Number can't be all the same number");
    return false;
  }
  console.log(`${number} is valid!`);
  return true;
}

validateCreditCard("6666-6666-6666-1666");
validateCreditCard("9999-9999-8888-0000");
validateCreditCard("a923-3211-9c01-1112");
validateCreditCard("4444-4444-4444-4444");
validateCreditCard("1111-1111-1111-1110");
