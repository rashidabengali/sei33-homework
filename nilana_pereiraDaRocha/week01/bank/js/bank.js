let bank = [];

//abrir uma conta no banco 
function addAccount(balance, name) {
    let account = {
        balance: balance,
        name: name
    }
    bank.push(account);
};

// show the total balance 
let sumAccounts = function () {
    let sumBalance = 0;
    for (let index = 0; index < bank.length; index++) {
        const element = bank[index];
        sumBalance = sumBalance + element.balance;
    }
    return sumBalance;
}

//make some deposits and withdrawals, show the new total balance.
let deposit = function (name, balance) {
    // achar a posicao da conta no array(bank)
    for (let index = 0; index < bank.length; index++) {
        let itemAccount = bank[index];
        if (name === itemAccount.name) {
            itemAccount.balance = itemAccount.balance + balance;
            bank[index] = itemAccount;
        }
    }
}

let withdrawals = function (name, balance) {
    for (let index = 0; index < bank.length; index++) {
        let itemAccount = bank[index];
        if (name === itemAccount.name) {
            itemAccount.balance = itemAccount.balance - balance;
            bank[index] = itemAccount;
        }
    }
}

//add accounts 
addAccount(13, 'Wilson');
addAccount(1, 'Lucia');
addAccount(28, 'Nilana');
deposit('Nilana', 12);
console.log(sumAccounts());
withdrawals('Nilana', 12);
console.log(sumAccounts());

console.log(bank);



