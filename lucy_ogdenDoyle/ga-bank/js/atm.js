
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

function zero (account) {
  if (account.balance === 0) {
    account.obj.addClass("zero");
  }

  else {
    account.obj.removeClass("zero");
  }
}
zero(checkingBal);
zero(savingBal);


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

    if ((parseFloat(checkingBal.balance) +      parseFloat(savingBal.balance)) >= amount) {
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
      $("#error").text("Sorry, insufficient funds").show();
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

function addClick (idButton, idAmount, obj, type) {
  $(idButton).on("click", function () {
    const val = $(idAmount).val();
    if (val != "" && val > 0) {
      if (type === "deposit") {
        deposit(val, obj);
      }
      else if (type === "withdraw") {
        withdraw(val, obj);
      }

    }
    if (val < 0) {
      $("#error").text("Sorry, cannot withdraw negative funds").show();
    }
    else if (isNaN(val)) {
      $("#error").text("Sorry, invalid data").show();
    }

  });
}


addClick("#checking-deposit", "#checking-amount", checkingBal, "deposit");
addClick("#checking-withdraw", "#checking-amount", checkingBal, "withdraw");
addClick("#savings-deposit", "#savings-amount", savingBal, "deposit");
addClick("#savings-withdraw", "#savings-amount", savingBal, "withdraw");
