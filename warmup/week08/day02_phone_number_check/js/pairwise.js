console.log('run');

/*
// Version 1
const phoneNumberCheck = {

  cleanNumber: function (input) {
    let number = [];
    let numerals = "0123456789"

    for (let i = 0; i < input.length; i++) {
      if (numerals.indexOf(input[i]) !== -1) {
        number.push(input[i])
      }
    }
    return number.join("")
  },

  checkValidation: function (input) {
    const number = this.cleanNumber(input)
    if (number.length === 11 && number[0] === "1") {
      return number.substr(1);
    } else if (number.length === 10) {
      return number
    } else {
      return "000000000"
    }
  },

  getFormattedNumber: function (input) {
    const validNumber = this.checkValidation(input);
    const areaCode = validNumber.substr(0,3);
    const exchangeCode = validNumber.substr(3,3);
    const remaining = validNumber.substr(6);
    return `(${areaCode}) ${exchangeCode}-${remaining}`
  }
}

console.log(pairwise.getFormattedNumber('11234567890'));
*/

//Version 2

const phoneNumberCheck = {

  cleanNumber (input) {
    let number = input.match(/\d/g);
    number = number.join("");

    return (number.length === 11 && number[0] === "1") ? number.substr(1) : number
  },

  checkValidation (input) {
    const number = this.cleanNumber(input)

    return (number.length !== 10) ? "0000000000" : number
  },

  getFormattedNumber (input) {
    const validNumber = this.checkValidation(input);
    const areaCode = validNumber.substr(0,3);
    const exchangeCode = validNumber.substr(3,3);
    const remaining = validNumber.substr(6);
    return `(${areaCode}) ${exchangeCode}-${remaining}`
  }
}

console.log(pairwise.getFormattedNumber('11234567890'));
