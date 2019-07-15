console.log('This is the answer of Objects');

// Part 1 Rectangle
console.log("Rectangle");

const rectangeA = {
    length: 4,
    width: 4,
};

const isSquare = function (rectangleDetail) {
    return (rectangleDetail.length === rectangleDetail.width); //return true when its square.
};

const area = function (rectangleDetail) {
    return rectangleDetail.length * rectangleDetail.width;
};

const perimeter = function (rectangleDetail) {
    return (rectangleDetail.length + rectangleDetail.width) * 2;
};

console.log(isSquare(rectangeA));   //true
console.log(area(rectangeA)); //16
console.log(perimeter(rectangeA)); //16

// Part2 Triangle
console.log('Triangle');

const triangleA = {
    sideA: 3,
    sideB: 4,
    sideC: 4
}
const isTriangle = function (tri) {
    if ((tri.sideA + tri.sideB) > tri.sideC || (tri.sideA + tri.sideC) > tri.sideB || (tri.sideB + tri.sideC) > tri.sideA ) {
        return true;
    } else {
        return false;
    };
};

const isEquilateral = function (tri) {
    return (tri.sideA === tri.sideB && tri.sideB === tri.sideC);
};

const isIsosceles = function (tri) {
    return (tri.sideA === tri.sideB || tri.sideA === tri.sideC || tri.sideB === tri.sideC);
};

const areaTriangle = function (tri) {
    const heronP = (tri.sideA + tri.sideB + tri.sideC) / 2;
    return ((heronP - tri.sideA) * (heronP - tri.sideB) * (heronP - tri.sideC) * heronP ) ** 0.5;
};

const isObtuse = function (tri) {
    const a = tri.sideA;
    const b = tri.sideB;
    const c = tri.sideC;
    const angleA = Math.acos((a ** 2 + b ** 2 - c ** 2) / (2 * a * b));
    const angleB = Math.acos((b ** 2 + c ** 2 - a ** 2) / (2 * b * c));
    const angleC = Math.acos((c ** 2 + a ** 2 - b ** 2) / (2 * c * a));
    const radian = 90 * Math.PI / 180;
    return (angleA > radian || angleB > radian || angleC > radian);
}

console.log(isTriangle(triangleA));  //true
console.log(isEquilateral(triangleA)); //false
console.log(isIsosceles(triangleA)); //true
console.log(areaTriangle(triangleA)); // 5.5621
console.log(isObtuse(triangleA)); // false

// The cashier
console.log('The Cashier');

const cartForParty = {  
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
};

const cashRegister = function (cart) {
    const priceList = Object.values(cart);
    let total = 0;
    for (i = 0; i < priceList.length; i++) {
        total += parseFloat(priceList[i]);
    };
    return total;
    
}

console.log(cashRegister(cartForParty));

// Credit Card Validation
console.log('Credit Card');

const cleanDidgit = function (cardNumber) {
    let card = cardNumber.split('-');
    card = card.join('');
    return card;
}

const check16Digit = function (cardNumber) {
    return (cardNumber.length >= 16);
}

const checkDiffDigit = function (cardNumber) {
    let twoDigit = false;
    for (i = 0; i < cardNumber.length-1 ; i++) {
        if (cardNumber[i+1] !==  cardNumber[i]) {
            twoDigit = true;
        };
    };
    return twoDigit;
}

const finalDigit = function (cardNumber) {
    return (cardNumber[cardNumber.length-1] % 2 ===0);
};

const digitSum = function (cardNumber) {
    let sum = 0;
    for (i = 0; i < cardNumber.length; i++) {
        sum += parseInt(cardNumber[i]);
    };
    return (sum > 16);
};

const creditCard = function(cardNumber) {
    const card = cleanDidgit(cardNumber);
    const history = {
        valid: null,
        number: cardNumber,
    };
    if (check16Digit(card) === false) {
        history.valid = false;
        history.error = 'wrong_length'; 
    } else if (checkDiffDigit(card) === false) {
        history.valid = false;
        history.error = 'digits_same';
    } else if (finalDigit(card) === false) {
        history.valid = false;
        history.error = 'odd_number';
    } else if (digitSum(card) === false) {
        history.valid = false;
        history.error = 'low_digit_sum';
    } else {
        history.valid = true;
    };
    return history;
};
let cardTest = '9999-9999-8888-00';
let cardTest2 = '4444-4444-4444-4444';
let cardTest3 = '9999-9999-8888-0001';
let cardTest4 = '1000-1000-1111-4000';
let cardTest5 = '9999-9999-8888-0000';

console.log(creditCard(cardTest));
console.log(creditCard(cardTest2));
console.log(creditCard(cardTest3));
console.log(creditCard(cardTest4));
console.log(creditCard(cardTest5));

// BANK
const bank = {
    openAccount: function (accNumber, name, amount) {
        bankAccount.push( { accNumber: accNumber, name: name, balance: amount });
        console.log(`New account created. Thank you.`);
    },
    deposite: function (accNumber, amount) {
        const account = bankAccount.find(bankAccount => bankAccount.accNumber === accNumber); 
        account.balance += amount;
        console.log(`Deposite Done. New balance of account: $${ account.accNumber } is ${ account.balance }.`);
    },
    withdraw: function (accNumber, amount) {
        const account = bankAccount.find(bankAccount => bankAccount.accNumber === accNumber); 
        if (account.balance < amount) {
            console.log(`Not enough fund in account. Balance is $${ account.balance }.`);
        } else {
            account.balance -= amount;
            console.log(`New balance of account: ${ account.accNumber } is $${ account.balance }.`);
        }
    },
    transfer: function (amount) {}
};

const bankAccount = [{
    accNumber: 'a1001',
    name: 'Jason Chan',
    balance: 1000
}, {
    accNumber: 'a1002',
    name: 'Mary Jane',
    balance: 10000
}, {
    accNumber: 'a1003',
    name: 'Osbourne Oops',
    balance: 10
}, {
    accNumber: 'a1004',
    name: 'Pool Bubble',
    balance: 555
}];

console.log(bank.openAccount('a1005', 'Jet Lee', 60000)); // create a new account with $ 60000, to be stored in array.
console.log(bank.deposite('a1001', 500)); //deposite $500, show new balance.
console.log(bank.withdraw('a1002', 99)); //withdraw $99, show new balance.
console.log(bank.withdraw('a1002', 99999)); //attempt withdraw, avoid negative balance. 
