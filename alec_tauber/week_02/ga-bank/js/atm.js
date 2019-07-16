console.log("JS Works");
// 1. Keep track of the checking and savings balances somewhere

// 2. Add functionality so that a user can deposit money into one of the bank accounts.

// 3. Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.

// 4.  Add functionality so that a user can withdraw money from one of the bank accounts

// 5. Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.

// 6. Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.

// 7. When the balance of the bank account is $0 the background of that bank account should be red. It should be gray when there is money in the account.

// 8. What happens when the user wants to withdraw more money from the checking account than is in the account? These accounts have overdraft protection, so if a withdrawal can be covered by the balances in both accounts, take the checking balance down to $0 and take the rest of the withdrawal from the savings account. If the withdrawal amount is more than the combined account balance, ignore it.

// 9. Make sure there is overdraft protection going both ways.

// 10. Are there ways to refactor your code to make it DRYer?
const checkForZero = function () {
  $('.zero').removeClass('zero');

  const checkingBalance = + $('#checking-balance').text().slice(1);
  if (checkingBalance <= 0) {
    $('#checking-balance').addClass('zero');
  }

  const savingsBalance = + $('#savings-balance').text().slice(1);
  if (savingsBalance <= 0) {
    $('#savings-balance').addClass('zero');
  }

};

$(document).ready(function () {
  checkForZero();

  $('#checking-deposit').on('click', function () {
    const deposit = + $('#checking-amount').val();
    const currentBalance = + $('#checking-balance').text().slice(1);
    const newBalance = currentBalance + deposit;
    $('#checking-balance').text('$' + newBalance);

    checkForZero();
  });

  $('#checking-withdraw').on('click', function () {
    const deposit = + $('#checking-amount').val();
    const currentBalance = + $('#checking-balance').text().slice(1);

    const otherBalance = + $('#savings-balance').text().slice(1);
    const totalBalance = currentBalance + otherBalance;

    const newBalance = currentBalance - deposit;

    if (newBalance >= 0) {
      $('#checking-balance').text('$' + newBalance);
    } else if (deposit <= totalBalance) {
      $('#checking-balance').text('$0');
      $('#savings-balance').text('$' + (otherBalance + newBalance));
    }

    checkForZero();
  });

  $('#savings-deposit').on('click', function () {
    const deposit = + $('#savings-amount').val();
    const currentBalance = + $('#savings-balance').text().slice(1);
    const newBalance = currentBalance + deposit;
    $('#savings-balance').text('$' + newBalance);

    checkForZero();
  });

  $('#savings-withdraw').on('click', function () {
    const deposit = + $('#savings-amount').val();
    const currentBalance = + $('#savings-balance').text().slice(1);

    const otherBalance = + $('#checking-balance').text().slice(1);
    const totalBalance = currentBalance + otherBalance;

    const newBalance = currentBalance - deposit;

    if (newBalance >= 0) {
      $('#savings-balance').text('$' + newBalance);
    } else if (deposit <= totalBalance) {
      $('#savings-balance').text('$0');
      $('#checking-balance').text('$' + (otherBalance + newBalance));
    }

    checkForZero();
  });

});
