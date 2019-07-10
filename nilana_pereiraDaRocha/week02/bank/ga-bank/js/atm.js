// * When the balance of the bank account is $0 the background of that bank account
// should be red. It should be gray when there is money in the account.


// creating the account when the page is loading
let account = {
    checkings: 0,
    savings: 0
};

// ****************************
// FUNCTIONS  
// ****************************

// SUM THE VALUE WITH THE CURRENT AMOUNT FOR CHECKINGS OR SAVINGS
let deposit = function (checkings, savings) {
    if (checkings) {
        account.checkings = account.checkings + checkings;
        return account.checkings;
    } else if (savings) {
        account.savings = account.savings + savings;
        return account.savings;
    }
};

// SUBTRACTS THE VALUE WITH THE CURRENT AMOUNT FOR CHECKINGS OR SAVINGS
let withdraw = function (checkings, savings) {
    if (checkings) {
        account.checkings = account.checkings - checkings;
        return account.checkings;
    } else if (savings) {
        account.savings = account.savings - savings;
        return account.savings;
    }
};

// UPDATING PAGE WITH NEW BALANCES FOR CHECKING AND SAVINGS
let updateBalance = function (newCheckings, newSavings) {
    if (newCheckings !== null) {
        $("#checking-balance").text(`$${newCheckings}`);
    }
    if (newSavings !== null) {
        $("#savings-balance").text(`$${newSavings}`);
    }
};

// CHECKS IF THE SUM OF CHECKINGS AND SAVINGS IS LESS THAN
// THE AMOUNT THE USER WANTS TO WITHDRAW AND RETURNS THE RESULT AS A BOOLEAN
let isAValidWithdrawAmount = function (checkingAmount) {
    return (account.checkings + account.savings) > checkingAmount;
}

// ****************************
// JQUERY  
// ****************************

// CHECKING DEPOSIT
$("#checking-deposit").click(function () {
    // READING INPUT VALUE
    let checkingAmount = Number(
        $("#checking-amount").val()
    );
    let newCheckings = deposit(checkingAmount);

    if (newCheckings === 0) {
        $("#checking-balance").css("background-color", "red");
    } else {
        $("#checking-balance").css("background-color", "#E3E3E3");
    }

    // UPDATING PAGE WITH NEW VALUES FOR CHECKING AND SAVINGS
    updateBalance(newCheckings);
});

// CHECKING WITHDRAW
$("#checking-withdraw").click(function () {
    // READING INPUT VALUE
    let checkingAmount = Number(
        $("#checking-amount").val()
    );

    // IF THE SUM OF CHECKINGS AND SAVINGS IS LESS THAN
    // THE AMOUNT I WANT TO WITHDRAW, I SHOULD STOP THE OPERATION
    const userHasEnoughAmount = isAValidWithdrawAmount(checkingAmount);
    if (userHasEnoughAmount === false) {
        alert("you don't have enough amount");
        return;
    }

    let newCheckings = withdraw(checkingAmount);
    let newSavings = null;
    if (newCheckings < 0) {
        newSavings = withdraw(null, Math.abs(newCheckings));
        account.checkings = 0;
        newCheckings = 0;
    }

    if (newCheckings === 0) {
        $("#checking-balance").css("background-color", "red");
    } else {
        $("#checking-balance").css("background-color", "#E3E3E3");
    }

    // UPDATING PAGE WITH NEW VALUES FOR CHECKING AND SAVINGS
    updateBalance(newCheckings, newSavings);

});

// SAVINGS DEPOSIT
$("#savings-deposit").click(function () {
    // READING INPUT VALUE
    let savingsAmount = Number(
        $("#savings-amount").val()
    );
    let newSavings = deposit(null, savingsAmount);
    if (newSavings === 0) {
        $("#savings-balance").css("background-color", "red");
    } else {
        $("#savings-balance").css("background-color", "#E3E3E3");
    }
    // UPDATING PAGE WITH NEW VALUES FOR CHECKING AND SAVINGS
    updateBalance(null, newSavings);
});

// SAVINGS WITHDRAW
$("#savings-withdraw").click(function () {
    // READING INPUT VALUE
    let savingsAmount = Number(
        $("#savings-amount").val()
    );
    // IF THE SUM OF CHECKINGS AND SAVINGS IS LESS THAN
    // THE AMOUNT I WANT TO WITHDRAW, I SHOULD STOP THE OPERATION
    const userHasEnoughAmount = isAValidWithdrawAmount(savingsAmount);
    if (userHasEnoughAmount === false) {
        alert("you don't have enough amount");
        return;
    }

    let newSavings = withdraw(null, savingsAmount);
    let newCheckings = null;
    if (newSavings < 0) {
        newCheckings = withdraw(Math.abs(newSavings));
        account.savings = 0;
        newSavings = 0;
    }

    if (newSavings === 0) {
        $("#savings-balance").css("background-color", "red");
    } else {
        $("#savings-balance").css("background-color", "#E3E3E3");
    }

    // UPDATING PAGE WITH NEW VALUES FOR CHECKING AND SAVINGS
    updateBalance(newCheckings, newSavings);
});




