// Given the following a `rectangle` object like the one below, write the following functions:

// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle

const rectangle = {
    length: 4,
    width: 3,
    isSquare: function(){
        return rectangle.length === rectangle.width
    },
    area: function(){
        return rectangle.length * rectangle.width;
    },
    perimeter: function(){
        if (rectangle.isSquare()){
            return rectangle.length * 4;
        }
        return 2 * (rectangle.length + rectangle.width);
    }
}

console.log(`This object is ${ rectangle.isSquare()? "Square": "Rectangle"}`);
console.log(`The area is ${ rectangle.area()}`);
console.log(`The perimeter is ${ rectangle.perimeter()}`);

rectangle.length = 5;
rectangle.width = 5;
console.log(`After change the length and width to 5, result below: `);
console.log(`This object is ${ rectangle.isSquare()? "Square": "Rectangle"}`);
console.log(`The area is ${ rectangle.area()}`);
console.log(`The perimeter is ${ rectangle.perimeter()}`);

// Given the following a `triangle` object like the one below, write the following functions:

// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not
const triangle = {
    sideA: 3,
    sideB: 4,
    sideC: 4, 
    isEquilateral: function(){
        return triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC;
    },
    isIsosceles: function(){
        return triangle.sideA === triangle.sideB || triangle.sideA === triangle.sideC || triangle.sideB === triangle.sideC;
    },
    area: function(){
        const s = (triangle.sideA + triangle.sideB + triangle.sideC)/2;
        const area = Math.sqrt(s*((s-triangle.sideA)*(s-triangle.sideB)*(s-triangle.sideC)));
        return area;
    },
    isObtuse: function(){
        return Math.pow(triangle.sideA, 2) > Math.pow(triangle.sideB, 2) + Math.pow(triangle.sideC, 2);
    }
};
console.log(`The triangle is ${ triangle.isEquilateral()? "equilateral": "not equilateral" }`);
console.log(`The triangle is ${ triangle.isIsosceles()? "isosceles": "not isosceles" }`);
console.log(`The area is ${ triangle.area()}`);
console.log(`The triangle is ${triangle.isObtuse? "obtuse": "not obtuse" }`)

//   Write a function called cashRegister that takes a shopping cart object. 
//   The object contains item names and prices (itemName: itemPrice). 
//   The function should return the total price of the shopping cart.
const shoppingCart = {
    banana: 1.25,
    handkerchief: .99,
    Tshirt: 25.01,
    apple: 0.60,
    nalgene: 10.34,
    proteinShake: 22.36
}

const cashRegister = function(cart){
    let total = 0;
    for (const key in shoppingCart) {
        if (shoppingCart.hasOwnProperty(key)) {
            total += shoppingCart[key];
        }
    }
    // const cartPrice = Object.values(cart);
    // let total = 0;
    // if (cartPrice){
    //     cartPrice.forEach(x => {
    //         total += x;
    //     });
    // }
    return total;
}
console.log(`Total price is ${ cashRegister(shoppingCart) }`);

// Credit card
// Number must be 16 digits, all of them must be numbers
const checkDigitsLimit = function(creditNumber){
    // const arrDigits = ['0', '1', '2','3','4','5','6','7','8','9'];
    // const arrCreditNumber = creditNumber.split("");
  
    // credit card number is not
    if (creditNumber.length !== 16){
      return false;
    }
  
    // let checkAllDigit = true;
    // for (let index = 0; index < arrCreditNumber.length; index++) {
    //   const digit = arrCreditNumber[index];
    //   const indexOfDigit = arrDigits.findIndex((x) => {
    //     return x === digit ;
    //   });
    //   if (indexOfDigit === -1){
    //     checkAllDigit = false;
    //     break;
    //   }
    // }
    
    // return checkAllDigit;
    const regex = /[^0-9]/;
    return !regex.test(creditNumber);
}
  
// You must have at least two different digits represented (all of the digits cannot be the same)
const checkTwoDifferent = function(creditNumber){
    const arrDigits = creditNumber.split("");
    const digit = arrDigits[0];
    const countDifferentDigit = arrDigits.filter(x=> x === digit).length;
    return countDifferentDigit !== 16;
}

// The final digit must be even
const checkFinalDigit = function(creditNumber){
    const lastDigit = parseInt(creditNumber.substring(creditNumber.length-1));
    return lastDigit%2 === 0;
}
  
// The sum of all the digits must be greater than 16
const checkSumDigits = function(creditNumber){
    const sumDigits = creditNumber.split("").reduce((x, y) => {
        return parseInt(x) + parseInt(y);
    });
    return sumDigits >= 16;
}
  
const validCreditCard = function(creditNumber){
    // clear blank and remove dash
    let creditNum = creditNumber.trim().split("-").join("");
    let result = {
        valid: false,
        number: creditNumber.trim()
    };

    // check digit number is not equal 16 didits
    if (!checkDigitsLimit(creditNum)){
        result.error = "wrong_length";
    } else if (!checkTwoDifferent(creditNum)){
        // check two different number
        result.error = "wrong_number";
    } else if (!checkFinalDigit(creditNum)){
        // check final digit is even number
        result.error = "wrong_final_digit"
    } else if (!checkSumDigits(creditNum)){
        // check sum of digits greater than 16
        result.error = "wrong_total_digit"
    } else {
        result.valid = true;
    }
    
    return result;
}

console.log(validCreditCard("9999777788880000"));
console.log(validCreditCard("a9999777788880000"));
console.log(validCreditCard("999977778888000r"));
console.log(validCreditCard("9999777788880003"));
console.log(validCreditCard("1111111111111110"));
console.log(validCreditCard("9999-7777-8888-0000"));  
console.log(validCreditCard("2222-2222-2222-2222"));
console.log(validCreditCard("a923-3211-9c01-1112"));

// account
const account = {
    ownerName: "",
    balance: 0,
    deposit: function(currentAccount, depositMoney){
        currentAccount.balance += depositMoney;
    },
    withdraw: function(currentAccount, withdrawMoney){
        if (currentAccount.balance - withdrawMoney < 0){
            return "Insufficient balance"
        }
        currentAccount.balance -= withdrawMoney;
        return "";
    }
}

// bank
const bank = {
    accounts: [],
    total: function(){
        let sum = 0;
        if (bank.accounts){
            sum = bank.accounts.reduce((x,y)=>{
                return x.balance + y.balance;
            });
        }
        return sum;
    },
    addAccount: function(account){
        bank.accounts.push(account);
    },
    transfer: function(fromAccount, toAccount, transferMoney){
        const result = fromAccount.withdraw(fromAccount, transferMoney);
        if (!result){
            toAccount.deposit(toAccount, transferMoney);
        }
        return result;
    }
}

const accountA = Object.create(account);
accountA.ownerName = "John";
accountA.deposit(accountA, 23);
console.log(`accountA: deposit $23, balance should be $23: ${ accountA.balance }`);
accountA.deposit(accountA, 35);
console.log(`accountA: deposit $35, balance should be $58: ${ accountA.balance }`);
let resultWithdraw = accountA.withdraw(accountA, 60);
if (resultWithdraw){
    console.log(`accountA: withdraw over balance ($60), expect "Insufficient balance": ${ resultWithdraw }`);
}
accountA.withdraw(accountA, 8);
console.log(`accountA: withdraw $8, balance should be $50: ${ accountA.balance }`);


bank.addAccount(accountA);

const accountB = Object.create(account);
accountB.ownerName = "Loki";
accountB.deposit(accountB, 100);
console.log(`accountB: deposit $100, balance should be $100: ${ accountB.balance }`);
accountB.withdraw(accountB, 22.5);
console.log(`accountB: withdraw $22.5, balance should be $77.5: ${ accountB.balance }`);
bank.addAccount(accountB);

console.log(`Sum: ${bank.total()}`)

//bonus
resultWithdraw = bank.transfer(accountA, accountB, 60);
if (resultWithdraw){
    console.log(`accountA transfer: withdraw over balance ($70), expect "Insufficient balance": ${ resultWithdraw }`)
}
bank.transfer(accountA, accountB, 20);
console.log(`accountA transfer money to accountB $50, balance A ($30): ${ accountA.balance }`);
console.log(`accountB balance should be $97.5: ${accountB.balance}`);