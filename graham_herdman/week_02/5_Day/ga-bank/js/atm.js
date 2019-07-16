
$(document).ready(function () {

  // flash helper function
  const flash = function (account) {
    account.css('opacity', 0).animate({opacity: 1}, 200);
  }

  // check if account balance is zero helper function
  const checkIfAccountIsZero = function (account, $accountBalance) {

    if (account === 0) {
      $accountBalance.css('background-color', '#ff0000');
    } else {
      $accountBalance.css('background-color', '#E3E3E3');
    }

  }

  // #1 deposit functions
  // #1.1 function: check account deposit function
  const checkDeposit = function (event) {

    const deposit = $checkingAmount.val();

    checkingAccount += Number(deposit);
    $checkingBalance.text(`$${checkingAccount}`);

    checkIfAccountIsZero(checkingAccount, $checkingBalance);

  }

  // #1.2 function: savings account deposit function
  const savingsDeposit = function (event) {

    const deposit = $savingsAmount.val()

    savingsAccount += Number(deposit);
    $savingsBalance.text(`$${savingsAccount}`);

    checkIfAccountIsZero(savingsAccount, $savingsBalance);

  }

  // #2 withdrawal functions
  // #2.1 function: check account withdrawal function
  const withdrawCheck = function (event) {

    let checkWithdrawal = Number($checkingAmount.val());

    // checking account non-negative validation
    if (checkingAccount - checkWithdrawal < 0) {

      if ((savingsAccount + checkingAccount) - checkWithdrawal > 0) {

        // backend
        checkWithdrawal -= checkingAccount; // take away checking account balance
        checkingAccount = 0; // set checking account to zero
        savingsAccount -= checkWithdrawal;

        // show with HTML
        $checkingBalance.text(`$${checkingAccount}`);
        $savingsBalance.text(`$${savingsAccount}`);

      } else {
        flash($checkingAmount);
      }

    } else {
      checkingAccount -= checkWithdrawal;
      $checkingBalance.text(`$${checkingAccount}`);
    }

    checkIfAccountIsZero(checkingAccount, $checkingBalance);

  }

  // #2.2 function: savings account withdrawal function
  const withdrawSavings = function (event) {

    let savingsWithdrawal = $savingsAmount.val();

    // savings account non-negative validation
    if (savingsAccount - savingsWithdrawal < 0) {

      if ((savingsAccount + checkingAccount) - savingsWithdrawal) {

        // backend
        savingsWithdrawal -= savingsAccount;
        savingsAccount = 0;
        checkingAccount -= savingsWithdrawal;

        // show with HTML
        $checkingBalance.text(`$${checkingAccount}`);
        $savingsBalance.text(`$${savingsAccount}`);

      } else {
        flash($savingsAmount);
      }

    } else {
      savingsAccount -= Number(savingsWithdrawal);
      totalAccount -= Number(savingsWithdrawal);
      $savingsBalance.text(`$${savingsAccount}`);
    }

    checkIfAccountIsZero(savingsAccount, $savingsBalance);

  }

  // 1) Keep track of the checking and savings balances somewhere
  let checkingAccount = 0;
  let savingsAccount = 0;
  let totalAccount = 0;

  // checking account variables
  const $checkingAmount = $('#checking-amount');
  const $checkingDeposit = $('#checking-deposit');
  const $checkingBalance = $("#checking-balance");
  const $checkingWithdraw = $('#checking-withdraw');

  // savings account variables
  const $savingsAmount = $('#savings-amount');
  const $savingsDeposit = $('#savings-deposit');
  const $savingsBalance = $('#savings-balance');
  const $savingsWithdraw = $('#savings-withdraw');

  // main function /////////////////////////////////////////////////////////////
  // 2) Add functionality so that a user can deposit money into one of the bank accounts.
  // deposit into checking account
  $checkingDeposit.on("click", checkDeposit);
  // deposit into savings account
  $savingsDeposit.on("click", savingsDeposit);

  // 3) Add functionality so that a user can withdraw money from one of the bank accounts.
  // withdraw from checking account
  $checkingWithdraw.on("click", withdrawCheck);
  // withdraw from savings account
  $savingsWithdraw.on("click", withdrawSavings);

});

// Joel solution -> there are two problems there
//
