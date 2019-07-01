// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
// Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.

// Pre: the Account's unique identifier is the accountName (A Person cannot have more than a single account) I suggest to add an Account ID to the object.

const bank = [
    {
      accountName: 'Alex TurnBull',
      accountBalance: 500000
    },

    {
      accountName: 'Alex Ferguson',
      accountBalance: 300000
    },

    {
      accountName: 'John Ferguson',
      accountBalance: 200000
    },

    {
      accountName: 'Homer Simpson',
      accountBalance: 500000
    },
];

// print


// calculate the total amount in the bank
const totalBalance = function ( bank ) {

  let total = 0;

  for (let i = 0; i < bank.length; i++) {
    const account = bank[i];
    total += account.accountBalance;
  }

  return total;
};

// Add New Account
const addAccount = function ( name, amount ) {

  const account = {
    accountName: name,
    accountBalance: amount
  };
  bank.push(account);
};

// Account Name information (Pre: the account name exist!)

const getAccountName = function ( name ) {
  const account_index = bank.findIndex( bank => bank.accountName === name );
  return bank[account_index].accountName;
};

// Account Balance information (Pre: the account name exist!)

const getAccountBalance = function ( name ) {
  const account_index = bank.findIndex( bank => bank.accountName === name );
  return bank[account_index].accountBalance;
};

const accountInfo = function ( name ) {
  return `name: ${getAccountName(name)} \t \t balance: ${getAccountBalance(name)}`;
};

// Bank accounts information

const bankAccounts = function ( bank ) {

  let accountInfos = "";

  for (let i = 0; i < bank.length; i++) {
      const name = bank[i].accountName;
      accountInfos += accountInfo(name);
      accountInfos += `\n`;
  }

  return accountInfos;
}

const printBankAccounts = function ( bank ) {
  console.log(bankAccounts(bank));
};

const printTotalBalance = function ( bank ) {
  console.log(`\t \t \t \t \t  Total Balance: ${totalBalance(bank)}`);
};

//printBankAccounts(bank);

// Withdraw money from a single account
// return string
//  - Transaction  executed, current balance: ..
//  - Transaction not executed, insufficient funds
// Pre: the account name is unique (the account name exist!)
// Account Balance must be positive

const withdrawAccount = function ( name, amount ) {

  const account_index = bank.findIndex( bank => bank.accountName === name );
  const customer_balance = bank[account_index].accountBalance;
  if ( amount > customer_balance ) {
    return "Transaction not executed: insufficient funds" ;
  } else {
    bank[account_index].accountBalance -= amount;
    return `Transaction executed`;
  }

};

// `Transaction executed: Your new balance is ${bank[account_index].accountBalance}`;
// Deposit money (Pre: the account name exists!)

const depositAccount = function ( name, amount ) {

  const account_index = bank.findIndex( bank => bank.accountName === name );
  bank[account_index].accountBalance += amount;
  return `Transaction executed`;

};

// Transfer money
// transfer money from the first account (name1) to the second account (name2)
const transferAccount = function ( name1, name2, amount) {

  const transaction_message = withdrawAccount( name1, amount );
  if (transaction_message !== "Transaction not executed: insufficient funds") {
    return depositAccount( name2, amount);
  } else {
    return transaction_message;
  }
};


// A new bank opened in the city. They have the following Customer Accounts and Total Balance:
printBankAccounts(bank);
printTotalBalance(bank);
console.log("----------------------------------------------");
// The bank manager opened two new accounts for his sons:
console.log(`addAccount("Barto Simpson", 300000)`);
console.log(`addAccount("Elisa Simpson", 200000)`);
addAccount("Barto Simpson", 300000);
addAccount("Elisa Simpson", 200000);

console.log("Two new accounts have been added:");
printBankAccounts(bank);
printTotalBalance(bank);
console.log("----------------------------------------------");

// Barto Simpson Spent all the money in gambling and videogames :)
console.log(`withdrawAccount("Barto Simpson", 300000)`);
console.log(`${withdrawAccount("Barto Simpson", 300000)}`);

console.log("Barto Simpson spent all his money");
printBankAccounts(bank);
printTotalBalance(bank);
console.log("----------------------------------------------");

// Barto wanted to withdraw more money from his account without success :(

console.log(`withdrawAccount("Barto Simpson", 300000)`);
console.log(`${withdrawAccount("Barto Simpson", 300000)}`);
console.log(`${accountInfo("Barto Simpson")}`);
console.log("----------------------------------------------");
// Homer Simpson then decided to deposit more money in Barto's account

console.log(`depositAccount("Barto Simpson", 300000)`);
console.log(`${depositAccount("Barto Simpson", 300000)}`);
console.log(`${accountInfo("Barto Simpson")}`);
console.log("----------------------------------------------");
// Barto knows the password of his father's account and decided to
// transfer all the money in his bank account.

console.log(`transferAccount("Homer Simpson","Barto Simpson",getAccountBalance("Homer Simpson"))`);
console.log(transferAccount("Homer Simpson","Barto Simpson",getAccountBalance("Homer Simpson")));
printBankAccounts(bank);
printTotalBalance(bank);
