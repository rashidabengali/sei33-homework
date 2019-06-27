function sumArray(numbers) {
    let first = 0;

    for (let index = 0; index < numbers.length; index++) {
        first = first + Number(numbers[index]);
    }

    return first;

}
function validateCreditCard(digits) {
    // Number must be 16 digits, all of them must be numbers

    if (digits.length !== 19) {
        return false;
    }
    const batata = digits.split('-');

    let isNumber = true;
    for (let index = 0; index < batata.length; index++) {
        const element = batata[index];
        if (isNaN(element) === true && isNumber === true) {
            isNumber = false;
        }
    }
    if (isNumber === false) {
        return false;
    }

    // You must have at least two different digits represented 
    // (all of the digits cannot be the same)

    if (batata[0] === batata[1] && batata[0] === batata[2] && batata[0] === batata[3]) {
        return false;
    }
    // The final digit must be even
    if (batata[3] % 2 !== 0) {
        return false;
    }
    // The sum of all the digits must be greater than 16
    const numbers = batata.join('').split('');

    if (sumArray(numbers) < 16) {
        return false;
    }
    return true;
}


console.log(validateCreditCard('a923-3211-9c01-1112'));
console.log(validateCreditCard('4444-4444-4444-4444'));
console.log(validateCreditCard('1111-1111-1111-1110'));
console.log(validateCreditCard('6666-6666-6666-6661'));

console.log(validateCreditCard('9999-9999-8888-0000'));
console.log(validateCreditCard('6666-6666-6666-1666'));


