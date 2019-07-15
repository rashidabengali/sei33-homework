
// # JavaScript Bank
//
// In this homework, you'll create a basic `bank` in Javascript. The bank has many `accounts` and the following capabilities that you need to write.
//

// #### Bank
//
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an `addAccount` method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
let bankAccounts = []; // has an array of accounts
// let accountLine = {};
let accountId = 0;



bankAccounts = [
  { accountId: '0001',
    ownerName: 'Victor Zhang',
    currentBalance: 30000
  }
]


bank = {
  addAccount: function( idNumber, accName, openBalance ) {
    bankAccounts.push({
      accountId: idNumber,
      ownerName: accName,
      balance: openBalance
    });
  },
  returnTotalMoneySum: function() {

  },
  showTotalBalance: function(idNumber) {
    let result = bankAccounts.find(account => account.accountId === idNumber);
    console.log(result);
    result.currentBalance;
    return console.log(result.currentBalance);
  },
  withdraw: function( idNumber, withdrawAmount ) {
    let result = bankAccounts.find(account => account.accountId === idNumber);
    result.currentBalance = result.currentBalance - withdrawAmount;
    console.log(result.currentBalance);
    return console.log(withdrawAmount);
  },
  deposit: function( idNumber, depositAmount ) {
    let result = bankAccounts.find(account => account.accountId === idNumber);
    result.currentBalance = result.currentBalance + depositAmount;
    console.log(result.currentBalance);
    return console.log(depositAmount);
  },
  wireTransfer: function() {

  }
}

// const showBalance = function(thing) {
//   return thing.accountId === '0002';
// }
// const showBalance = function(thing) {
//   return thing.accountId === '0002';
// }


bank.addAccount( '0002', 'Toby Flenderson', 6000 );

// debugger;


const test = bankAccounts.find(balance => balance.accountId === '0001');
let test2 = test.currentBalance;

console.log(test);
console.log(test2);
console.log(test.currentBalance);

console.log(bank.showTotalBalance('0001'));

console.log(bank.withdraw('0001',2500));




// console.log(bankAccounts.find(showBalance).balance);

// let currentBalance = 0
// // let enterName = window.prompt('Enter Full Name'); OR
// let enterName = '';
//
// //method return totalSum of money into bankAccounts
// const returnMoney = function ( accountName, depositOrWithdraw, amount ) {
//   // use accountName to select accessedAccount and save into the variable locally.
//   console.log('access owner account first');
//   console.log(bankAccounts);
//   console.log(bankAccounts[0]);
//   console.log(accountLine);
//   console.log(accountLine.accountName);
//   console.log(bankAccounts[0].ownerName);
//   console.log(bankAccounts.ownerName);
//   console.log('money is added into specific account object');
//   console.log('need to return value');
// }
//
// //method addAccount, enroll a new account at bank and add to array of accounts.
//
// const addAccount = function( details ) {
//   console.log('making new account, adding details into object')
//   accountLine = {}; // refresh accountLine so can add newer values
//   accountLine.ownerName = details;
//   accountLine.currentBalance = 50;
//   console.log('information\n - Current Balance \n - Owner\' name\n - maybe deposit,withdraw, ending balance')
//   console.log('also add this immediately into array of accounts (bankAccounts)');
//   console.log('need to return value');
//   bankAccounts.push(accountLine);
// }
//
// addAccount( 'dsa' );
// addAccount( 'Victor Zhang' );
// returnMoney( 'Victor Zhang', 'Deposit' ,125416 );
//
// console.log(accountLine);
// console.log(bankAccounts);
//
// const depositOrWithdraw = function() {
//
// }
//



// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// #### Accounts
//
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions `console.log()` values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// ### Tips
//
// Don't overthink this. Shorter code is probably the answer.
//
// ## Bonus
//
// - Ensure that the accounts cannot have negative values.
// - Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
//
// ## Additional
//
// Begin exploring the [JavaScript Koans](https://github.com/liammclennan/JavaScript-Koans). Fork, clone and start trying them.
