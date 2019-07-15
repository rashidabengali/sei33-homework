let checkingBalance = 0;
let savingsBalance = 0;

// Deposit Function

const depositMoney = function(num) {
  checkingBalance += num;
  console.log(checkingBalance);
  $("#checking-balance").text("$" + checkingBalance);
  $("#checking-balance").removeClass("zero");

}

// Deposit Money in checking Bank Account

$(document).ready(function() {
  $("#checking-deposit").click(function() {
    const amount = parseInt($("#checking-amount").val());
    depositMoney(amount);
  });
});

// Withdrawal Functions

const withdrawMoney = function(num) {
  if (checkingBalance < num) {

    if((checkingBalance + savingsBalance) >= num) {
      const bal = checkingBalance;
      withdrawMoney(bal);
      withdrawMoneyInSavings(num - bal);
    } else {
      alert("Sorry! You dont have enough balance");
    }
    return;
  }
  checkingBalance -= num;
  console.log(checkingBalance);
  $("#checking-balance").text("$" + checkingBalance);
  if (checkingBalance === 0) {
    $("#checking-balance").addClass("zero");
  }
}

// Withdraw Money from checking bank account

$(document).ready(function() {
  $("#checking-withdraw").click(function() {
    const amount = parseInt($("#checking-amount").val());
    withdrawMoney(amount);
  });
});

//Deposit Money in saving account

const depositMoneyInSavings = function(num) {
  savingsBalance += num;
  console.log(savingsBalance);
  $("#savings-balance").text("$" + savingsBalance);
  $("#savings-balance").removeClass("zero");
}

// Deposit Money in savings Bank Account

$(document).ready(function() {
  $("#savings-deposit").click(function() {
    const amount = parseInt($("#savings-amount").val());
    depositMoneyInSavings(amount);
  });
});

//withdraw Money from saving account

const withdrawMoneyInSavings = function(num) {
  if (savingsBalance < num) {

    if((checkingBalance + savingsBalance) >= num) {
      const bal = savingsBalance;
      withdrawMoneyInSavings(bal);
      withdrawMoney(num - bal);
    } else {
      alert("Sorry! You dont have enough balance");
    }

    return;
  }
  savingsBalance -= num;
  console.log(savingsBalance);
  $("#savings-balance").text("$" + savingsBalance);
  if (savingsBalance === 0) {
    $("#savings-balance").addClass("zero");
  }
}

// Withdraw Money from savings bank account

$(document).ready(function() {
  $("#savings-withdraw").click(function() {
    const amount = parseInt($("#savings-amount").val());
    withdrawMoneyInSavings(amount);
  });
});
