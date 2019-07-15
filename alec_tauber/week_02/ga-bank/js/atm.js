// 1. Keep track of the checking and savings balances somewhere
var amount = {
  balance: 0
}

// 2. Add functionality so that a user can deposit money into one of the bank accounts.
const checkAmount = function(amount){
  if (typeof amount === "number"){
    return true;
  } else {
    return false;
  }
}


const getCheckedValues = function(name){
  var result = [];
  var elements = document.getElementsByName(name);
  for(let i = 0; i < elements.length; i++) {
    if(elements[i].checked) {
      result.push(elements[i].value);
    }
  }
  return result;
}

// 3. Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.

// Deposits amount to account
const deposit = function (accountName, amount) {
    var valid = checkAmount(amount);
    if (valid) {
        var deposited = accountName.balance += amount;
        console.log("You have deposited $" + amount + ". Your account balance is $" + deposited +".");
        return
    } else {
        console.log("Please enter a number to deposit");
    }
}

// Withdraws amount from account
function withdraw(accountName, amount) {
    var valid = checkAmount(amount);
    if (valid) {
        if (amount > accountName.balance){
            console.log("I am sorry, you do not have enough funds");
        } else {
            return accountName.balance -= amount;
        }
    } else {
        console.log("Please enter a number to deposit");
    }
}

// Gets account balance
function getBalance(accountName) {
    console.log("Your account currently has $" + account.balance + " balance.");
}

deposit(account, 35);
deposit(account, "Fred");
withdraw(account, "fred");
withdraw(account, 21);

getBalance(account);





// 4.  Add functionality so that a user can withdraw money from one of the bank accounts.






// 5. Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.









// 6. Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
const ignore = function(){
  let ignore = 0;
    if(mumberA < numberB) {
      return ignore;
    }
}









// 7. When the balance of the bank account is $0 the background of that bank account should be red. It should be gray when there is money in the account.








// 8. What happens when the user wants to withdraw more money from the checking account than is in the account? These accounts have overdraft protection, so if a withdrawal can be covered by the balances in both accounts, take the checking balance down to $0 and take the rest of the withdrawal from the savings account. If the withdrawal amount is more than the combined account balance, ignore it.









// 9. Make sure there is overdraft protection going both ways.








// 10. Are there ways to refactor your code to make it DRYer?
