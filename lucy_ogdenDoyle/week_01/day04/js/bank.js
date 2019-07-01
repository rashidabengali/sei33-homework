console.log("bankieboo testaroo");
//
// Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

const bank = [];
let total = 0;

function addAccount (n, b) {
  if (b > 0) {
    bank.push({
      name: n,
      balance: b
    });
    console.log(`account added! Owner: ${n}, Amount: ${b}`);
  }
  else {
    console.log(`Sorry ${n}, you can't enter the negative amount of: ${b}`);
  }

}

function totalSum () {
  for (var i = 0; i < bank.length; i++) {
    total += bank[i].balance;
  }
  console.log(`the banks total sum is currently ${total}`);
  //return balance;
}

function transfer (from, to, amount) {
  let fromAccount;
  let toAccount;
  //assign index to match the objects in the array
  for (var i = 0; i < bank.length; i++) {
    if (bank[i].name === from) {
      fromAccount = i;
    }
    if (bank[i].name === to) {
      toAccount = i;
    }
  }

  if(fromAccount && toAccount) {
    //check that from has the funds
    if (bank[fromAccount].balance > amount) {
      console.log(`${from}'s balance is ${bank[fromAccount].balance}`);
      console.log(`${to}'s balance is ${bank[toAccount].balance}`);
      //if so, then subtract from their account
      bank[fromAccount].balance -= amount;
      //and add to the to account
      bank[toAccount].balance += amount;


      console.log(`Successful transfer from ${from}, to ${to} of ${amount}!`);

      console.log(`${from}'s balance is now ${bank[fromAccount].balance}`);
      console.log(`${to}'s balance is now ${bank[toAccount].balance}`);
    }
    else {
      console.log("Sorry, not enough funds to transfer");
    }
  }


}

console.log(`The bank's current accounts and values: ${bank}`);
addAccount("Lucy", 9928343);
totalSum();
console.log(`The bank's current accounts: ${bank.length}`);
addAccount("Jacob", 85748);
addAccount("Talia", 3546);
addAccount("Amy", 2849);
addAccount("Holly", -7096);
totalSum();
console.log(`The bank's current accounts: ${bank.length}`);

transfer("Amy", "Talia", 400);

transfer("Amy", "Amy", 8490);

//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
