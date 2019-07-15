// * Keep track of the checking and savings balances somewhere


$(document).ready(function() {

// CHECKING
    // DEPOSIT

    let checking = [];

    $("#checking-deposit").click(function() {

      let inputValue = $("#checking-amount").val();

      checking.push(inputValue);

    console.log(checking);
    });

  // WITHDRAW

  $("#checking-withdraw").click(function() {

    let inputValue = ($("#checking-amount").val() * -1);

    checking.push(inputValue);

  console.log(checking);
});

  //ADDING DEPOSIT AND WITHDRAW TO FIND BALANCE

sampleArray = [1,2,3,4,5];

// const getBalance = function () {
  for(var i = 0; i < sampleArray.length; i++){
console.log('test');

  // let balance = 0;
  // sum += checking[i];}
}
// console.log(getBalance);

});

  // }
// }



// // SAVINGS
//
//   let savingsTransaction = [];
//
//   $("#savings-deposit").click(function() {
//
//     let inputValue = $("#savings-amount").val();
//
//     savingsTransaction.push(inputValue);
//
//     console.log(savingsTransaction);
//   });
//

// });







  //
  //   <div class="account" id="checking">
  //     <h1>Checking</h1>
  //     <div class="balance" id="checking-balance">$0</div>
  //     <input id="checking-amount" type="text" placeholder="enter an amount" />
  //     <input id="checking-deposit" type="button" value="Deposit" />
  //     <input id="checking-withdraw" type="button" value="Withdraw" />
  //   </div>
  //
  //   <div class="account" id="savings">
  //     <h1>Savings</h1>
  //     <div class="balance" id="savings-balance">$0</div>
  //     <input id="savings-amount" type="text" placeholder="enter an amount" />
  //     <input id="savings-deposit" type="button" value="Deposit" />
  //     <input id="savings-withdraw" type="button" value="Withdraw" />
  //   </div>
  //
  //   <div class="clear"></div>



// * Add functionality so that a user can deposit money into one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
// * Add functionality so that a user can withdraw money from one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
// * Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
// * When the balance of the bank account is $0 the background of that bank account should be red. It should be gray when there is money in the account.
// * What happens when the user wants to withdraw more money from the checking account than is in the account? These accounts have overdraft protection, so if a withdrawal can be covered by the balances in both accounts, take the checking balance down to $0 and take the rest of the withdrawal from the savings account.
// If the withdrawal amount is more than the combined account balance, ignore it.
// * Make sure there is overdraft protection going both ways.
// * Are there ways to refactor your code to make it DRYer?
