// let withdraw = false;
// let selectedAcc = 0;
// let allowOverdraft = false;
// // let totalBalance = 0;
//
// const enterAccount = function( acc, amount ) {
//   if (acc === 'savings') {
//     selectedAcc = bank.savingsBalance;
//     otherAcc = bank.checkingBalance;
//     checkBalance( acc, amount );
//     if (withdraw || allowOverdraft) {
//       selectAcc = withdraw();
//       otherAcc = overdraft();
//       // withdraw
//     }
//     else if (deposit) {
//
//     }
//     else { // cant withdraw, or allowOverdraft
//
//     }
//   }
//   else if (acc === 'checking') {
//     selectedAcc = bank.checkingBalance;
//     otherAcc = bank.savingsBalance;
//     checkBalance( acc, amount );
//   }
//   else {
//     console.log(`${ acc } does not exist`);
//   }
// }
//
// // test withdraw function for overall
// const checkBalance = function() {
//   let endBalance = 0;
//   if (selectedAcc >= amount) {
//     withdraw = true;
//     endBalance = selectedAcc - amount;
//     this.savingsBalance = endBalance;
//     return endBalance // to change this.savingsBalance in the parent function
//   }
//   else if (totalBalance >= amount && selectedAcc <= amount) {
//     allowOverdraft();
//     endBalance = selectedAcc - amount;
//     this.savingsBalance = endBalance;
//     endBalance = otherAcc - Math.abs(endBalance);
//     overdraft = true;
//   }
//   else {
//     console.log(`Insufficient funds on ${ account } account. Cannot withdraw $${ amount }`)
//   }
// }
//
//
// const checkBalance = function( acc, amount ) {
//   // check if balance has enough to make withdrawal
//   let totalBalance = bank.savingsBalance + bank.checkingBalance;
//   totalBalance = totalBalance - amount;
//   selectedAcc = totalBalance;
//   otherAcc = totalBalance;
//
//   acc = acc + 'Balance';
//   if ( selectedAcc >= amount ) { // need to use [] since inside is a string
//     withdraw = true;
//     allowOverdraft = false;
//   }
//   else if ( selectedAcc <= amount && totalBalance >= amount ) {
//     withdraw = true;
//     allowOverdraft = true;
//   }
//   else {
//     withdraw = false;
//     allowOverdraft = false;
//     console.log(`Insufficient funds on ${ acc } account. Cannot withdraw $${ amount }`)
//   }
// }
//
// const allowOverdraft = function () {
//   overDraft = selectedAcc - amount;
//   otherAcc = otherAcc - Math.abs(overDraft);
// }


// const checkAccount = function ( acc ) {
//   account = acc.toLowerCase();
//   if ( account === 'savings' || account === 'checking' ) {
//     //account is valid
//     account = account + 'Balance';
//     account = bank[account];
//   }
//   else {
//     return console.log(`No existing record of ${ acc } account.`)
//   }
// }




$(document).ready( function() {
  // object to store balance amount for savings account and checking account





  const updateBalance = function() {
    $('#checking-balance').html(`$${ bank.checkingBalance }`);
    $('#savings-balance').html(`$${ bank.savingsBalance }`);
    // remove zero class and reapply if following is true;
    $('.zero').removeClass('zero');

    // checking for zero
    if (bank.checkingBalance <= 0) {
      $('#checking-balance').addClass('zero');
    }

    if (bank.savingsBalance <= 0) {
      $('#savings-balance').addClass('zero');
    }
    // else if (bank.checkingBalance > 0) {
    //   $('#checking-balance').removeClass('zero');
    // }
    // else if (bank.savingsBalance > 0) {
    //   $('#savings-balance').removeClass('zero');
    // };
  }

  const bank = {
    // balance: { savings: 100, checking: 50 },

    savingsBalance: 0,

    checkingBalance: 0,

    withdraw: function () {
      /* parent div of either savings/checking account button that was clicked */
      const $acc = $(this).parent().attr('id') // variable for parent div of clicked button

      const accBalance = $acc + 'Balance'; // variable to access balance from bank object
      // const accBalance = +$('#checking-balance').text().slice(1);

      const $amount = '#' + $acc + '-amount' // $variable for input amount returned as string
      const amount = parseFloat($($amount).val()); // parse float string to numbers
      // acc = acc.toLowerCase() + 'Balance';
      if (bank[accBalance] >= amount) { // if current account has enough money, withdraw
        bank[accBalance] = bank[accBalance] - amount;
      }
      else if (bank[accBalance] < amount) { // if current account NOT enough money
        if (accBalance === 'savingsBalance') {
          if ((bank.checkingBalance + bank[accBalance]) >= amount){ // check other account
            bank.checkingBalance = bank.checkingBalance - amount + bank[accBalance];
            bank[accBalance] = bank[accBalance] - bank[accBalance];
            console.log(bank[accBalance],bank.checkingBalance);
          }
        }
        else if (accBalance === 'checkingBalance') {
          if ((bank.savingsBalance + bank[accBalance]) >= amount) {
            bank.savingsBalance = bank.savingsBalance - amount + bank[accBalance];
            bank[accBalance] = bank[accBalance] - bank[accBalance];
            console.log(bank[accBalance],bank.savingsBalance);
          }
        }
      }
      updateBalance();
      $($amount).val('');
    },

    deposit: function () {
      const $acc = $(this).parent().attr('id')
      const accBalance = $acc + 'Balance';
      const $amount = '#' + $acc + '-amount'
      const amount = parseFloat($($amount).val());
      if (amount > 0) {
        if (accBalance === 'checkingBalance' || accBalance === 'savingsBalance') {
          bank[accBalance] = bank[accBalance] + amount;
        }
      }
      updateBalance();
      $($amount).val('');
    },

  }



  // starting balance
  bank.savingsBalance = 70
  bank.checkingBalance = 50
  updateBalance();

  $('#checking-deposit').on('click',bank.deposit);
  $('#checking-withdraw').on('click',bank.withdraw);
  $('#savings-deposit').on('click',bank.deposit);
  $('#savings-withdraw').on('click',bank.withdraw);
  // $('#checking-amount').on('focus',
  // bank.withdraw('checking', 50);
  // bank.withdraw('checking', 20);
  // bank.deposit('checking', 200);
  // bank.withdraw('fksah',200);



})


// deposit money into account, savings or checking -- done

// withdraw money from account, savings or checking -- done

// balance can't go negative -- done

// overdraft protection
  // withdraw possible if both accounts have more than withdraw amount
  // withdraw from chosen account to $0, rest from other account



// styles red background for $0


//pseudo code
// if focus on checking
