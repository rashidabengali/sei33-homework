console.log('bank atm');

const bank = {
    acc001: {
        name: 'Alex Wong',
        checking: 0,
        savings: 0
    },
    acc002: {
        name: 'Alex Wong',
        checking: 0,
        savings: 0
    },
    
}

//update account balance, return new balance
const deposit = function (accName ='acc001', accType, amount) {
    bank[accName][accType] += parseFloat(amount);
    return console.log(`${ accType }, ${bank[accName][accType]}`);
;}

const withdraw = function (accName = 'acc001', accType, amount) {
    const savBal = bank[accName]['savings'];
    console.log(savBal);
    const checkBal = bank[accName]['checking'];
    console.log(checkBal);
    // if amount is less than whole account
    if (amount > (savBal + checkBal) ) {
        return console.log('not enough funding, ignore');
        // when withdraw from savings with not enough money in savings
    } else if (accType === 'savings' && amount > savBal) {
        deposit(accName, accType, savBal*-1);
        const remain = amount - savBal;
        deposit(accName, 'checking', remain*-1);
        // when withdraw from check with not enough money in check
    } else if (accType === 'checking' && amount > checkBal ) {
        deposit(accName, accType, checkBal*-1);
        const remain2 = amount - checkBal;
        deposit(accName, 'savings', remain2*-1);
    } else {
        deposit(accName, accType, amount*-1);
    };
};
//Object to hold functions connecting DOM
const jQueryDom = {

}

const changeColor = function () {
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
};

const updateBal = function () {
    const accType = $(this).closest('div').attr('id');
    const amount = $(this).siblings('[type="text"]').val();
    if ($(this).attr('value') === "Deposit") {
        const accBal = deposit('acc001', accType, amount);
    } else {
        withdraw('acc001', accType, amount);       
    };    
}

const showBal = function () {
    checkingBal = bank['acc001']['checking'];
    savingsBal = bank['acc001']['savings'];
    $('#checking-balance').text(`$${ checkingBal }`);
    $('#savings-balance').text(`$${ savingsBal }`);
};


$('[type="button"]').on('click', updateBal)
                    .on('click', showBal)
                    .on('click', changeColor);
