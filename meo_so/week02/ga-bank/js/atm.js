console.log('bank atm');
//object holding accounts and bank calculation functions
const bank = {
    acc001: {
        name: 'Alex Wong',
        checking: 0,
        savings: 0
    },
    acc002: {
        name: 'Lopen Hong',
        checking: 0,
        savings: 0
    },
    //function handling deposit when deposit button is clicked
    deposit: function (accName ='acc001', accType, amount) {
        bank[accName][accType] += parseFloat(amount);
        return console.log(`${ accType }, ${bank[accName][accType]}`);
    },
    //function handling withdraw
    withdraw: function (accName = 'acc001', accType, amount) {
        const savBal = bank[accName]['savings'];
        console.log(savBal);
        const checkBal = bank[accName]['checking'];
        console.log(checkBal);
        // if amount is less than whole account
        if (amount > (savBal + checkBal) ) {
            return console.log('not enough funding, ignore');
        // when withdraw from savings with not enough money in savings
        } else if (accType === 'savings' && amount > savBal) {
            bank.deposit(accName, accType, savBal*-1);
            const remain = amount - savBal;
            bank.deposit(accName, 'checking', remain*-1);
        // when withdraw from check with not enough money in check
        } else if (accType === 'checking' && amount > checkBal ) {
            bank.deposit(accName, accType, checkBal*-1);
            const remain2 = amount - checkBal;
            bank.deposit(accName, 'savings', remain2*-1);
        } else {
            bank.deposit(accName, accType, amount*-1);
        };
    },
}
// object holding DOM changing functions
const jQueryDom = {
    //check acc bal and turn red when bal is $0
    changeColor: function () {
        if ($('#savings-balance').html() === '$0') {
            $('#savings-balance').addClass('zero');
        } else {
            $('#savings-balance').removeClass('zero');
        };
        if ($('#checking-balance').html() === '$0') {
            $('#checking-balance').addClass('zero');
        } else {
            $('#checking-balance').removeClass('zero');
        };
    },
    //trigger functions to update bank balance 
    updateBal: function () {
        const accType = $(this).closest('div').attr('id');
        const amount = $(this).siblings('[type="text"]').val();
        if (amount <= 0 || isNaN(amount)) {
            return;
        };
        if ($(this).attr('value') === "Deposit") {
            bank.deposit('acc001', accType, amount);
        } else {
            bank.withdraw('acc001', accType, amount);       
        };    
    },
    //update display of balance on page
    showBal: function () {
        checkingBal = bank['acc001']['checking'];
        savingsBal = bank['acc001']['savings'];
        $('#checking-balance').text(`$${ checkingBal }`);
        $('#savings-balance').text(`$${ savingsBal }`);
    },
};
//event listener 
$('[type="button"]').on('click', jQueryDom.inputCheck)
                    .on('click', jQueryDom.updateBal)
                    .on('click', jQueryDom.showBal)
                    .on('click', jQueryDom.changeColor);
