const CHECKING_ACCOUNT = 'checking_account';
const SAVING_ACCOUNT = 'saving_account';

const account = function(accType){
    return {
        accountType: accType,
        balance: 0,
        deposit: function(depositMoney){
            this.balance += depositMoney;
        },
        withdraw: function(withdrawMoney, accountLink){
            const balanceAfterWithdraw = this.balance - withdrawMoney;
            if (balanceAfterWithdraw > -1){
                this.balance = balanceAfterWithdraw;
                return true;
            }else if(accountLink) {
                const resultWithdraw = accountLink.withdraw(balanceAfterWithdraw * -1);
                if (resultWithdraw){
                    this.balance = 0;
                    return true;
                }
            }
            return false;
        }
    }
}

let checkingAccount;
let savingAccount;
let $inputCheckingAmount;
let $divCheckingAccountBalance;
let $inputSavingAmount;
let $divSavingAccountBalance;

const setBackground = function(bankAccount, $divShowBalance) {
    if (bankAccount.balance === 0){
        $divShowBalance.addClass("zero");
    }else{
        if ($divShowBalance.hasClass("zero")){
            $divShowBalance.removeClass("zero");
        } 
        $divShowBalance.addClass("balance");
    }
    $divShowBalance[0].textContent = "$" + bankAccount.balance;
}

const deposit = function($txtNumber, bankAccount, $divShowBalance){
    const strDeposit = $txtNumber.val(); 
    if (!checkNumber(strDeposit)){
        alert("Please insert number only");
        return false;
    }
   
    const depositAmount = parseFloat(strDeposit.split(",").join(""));
    bankAccount.deposit(depositAmount);
    setBackground(bankAccount, $divShowBalance);
    $txtNumber.val("");
}

const withdraw = function($txtNumber, bankAccount, linkAccount, $divShowAccountBalance, $divShowLinkAccountBalance){
    const strDeposit = $txtNumber.val(); 
    if (!checkNumber(strDeposit)){
        alert("Please insert number only");
        return false;
    }
    const withdrawAmount = parseFloat(strDeposit.split(",").join(""));
    const oldBalanceLink = linkAccount.balance;
    const result = bankAccount.withdraw(withdrawAmount, linkAccount);
    if (result){
        setBackground(bankAccount, $divShowAccountBalance);
        if (oldBalanceLink !== linkAccount.balance){
            setBackground(linkAccount, $divShowLinkAccountBalance);
        }
        $txtNumber.val("");
    }else{
        alert('Your balance does not enough to withdraw');
    }
}

const checkNumber = function(txtNumber){
    const regex = /^[0-9.,]+$/;
    return regex.test(txtNumber);
}

$(document).ready(function(){
    checkingAccount = account(CHECKING_ACCOUNT);
    savingAccount = account(SAVING_ACCOUNT);
    $inputCheckingAmount = $('#checking-amount');
    $divCheckingAccountBalance = $('#checking-balance');
    $inputSavingAmount = $('#savings-amount');
    $divSavingAccountBalance = $('#savings-balance');

    // deposit function
    $('#checking-deposit').on('click', function(){
        deposit($inputCheckingAmount, checkingAccount, $divCheckingAccountBalance);
    });
    $('#savings-deposit').on('click', function(){
        deposit($inputSavingAmount, savingAccount, $divSavingAccountBalance);
    });
    $('#checking-withdraw').on('click', function(){
        withdraw($inputCheckingAmount, checkingAccount, savingAccount, $divCheckingAccountBalance, $divSavingAccountBalance);
    });
    $('#savings-withdraw').on('click', function(){
        withdraw($inputSavingAmount, savingAccount, checkingAccount, $divSavingAccountBalance, $divCheckingAccountBalance);
    })
});