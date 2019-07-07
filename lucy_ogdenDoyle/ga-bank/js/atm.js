
const checkingBal = account("checking", "#checking-balance");
const savingBal = account("saving", "#savings-balance");
$("#error").hide();

//make an account with name n
function account (n, id) {
  return acc = {
    name: n,
    balance: 0,
    obj: $(id)
  }
}

function deposit (amount, to) {
  $("#error").hide();
  to.balance += parseFloat(amount);
  console.log(`Deposited ${amount}`);
  updateUI(to.balance, to);
  console.log(`amount ${to.balance}`);

  if (to.balance === 0) {
    from.obj.addClass("zero");
  }
  else {
    to.obj.removeClass("zero");
  }
}

function withdraw (amount, from) {
  //check has balance
  if (from.balance >= amount) {
    $("#error").hide();
    from.balance -= parseFloat(amount);
    //update UI
    updateUI(from.balance, from);
  }
  else {
    //if there is not enough money
    //check the other account, and withdraw the remaining
    //from that one

    if ((parseFloat(checkingBal.balance) +      parseFloat(savingBal.balance)) >= amount &&
    from.balance != 0) {
      const withdrawn = from.balance;
      const overdraft = amount - withdrawn;
      from.balance = 0;
      updateUI(from.balance, from);


      if (from.name === "checking") {
        withdraw(overdraft, savingBal);
      }
      else if (from.name === "saving"){
        withdraw(overdraft, checkingBal);
      }

    }
    else {
      console.log("else");
      $("#error").show();
    }
  }

  if (from.balance === 0) {
    from.obj.addClass("zero");
  }

  else {
    from.obj.removeClass("zero");
  }
}

function updateUI (amount, account) {
  account.obj.text(`$${amount}`);
}


//add listener to checking input

$("#checking-deposit").on("click", function () {
  const val = $("#checking-amount").val();
  if (val != "") {
    deposit(val, checkingBal);
  }

});

$("#checking-withdraw").on("click", function () {
  const val = $("#checking-amount").val();
  if (val != "") {
    withdraw(val, checkingBal);
  }
});

$("#savings-deposit").on("click", function () {
  const val = $("#savings-amount").val();
  if (val != "") {
    deposit(val, savingBal);
  }
});

$("#savings-withdraw").on("click", function () {
  const val = $("#savings-amount").val();
  if (val != "") {
    withdraw(val, savingBal);
  }
});

//if deposit clicked, run deposit functions
//if withdraw is clicked, run withdraw function



//TODO add an error message
