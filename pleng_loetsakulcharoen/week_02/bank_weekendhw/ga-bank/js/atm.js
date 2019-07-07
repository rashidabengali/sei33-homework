

let checkingBalance = 0;
let savingsBalance = 0;


$(document).ready(function (){
    $('#savings-deposit').click(depositSaving);
	$('#checking-deposit').click(depositChecking);
	$('#checking-withdraw').click(withdrawChecking);	
	$('#savings-withdraw').click(withdrawSaving);
});


//saving deposit function 
let depositSaving = function () {
    //store the saving amount in variable and make it integer
    let savingsAmount = parseInt($('#savings-amount').val()); 
    // add up to the saving balance
    savingsBalance += savingsAmount; 

	$('#savings-balance').text('$' + savingsBalance);	
	clearInputs();
}

///////////////////////////////////////////////////////////////
// clear input after the deposit button is clicked //
const clearInputs = function() {
	$('#savings-amount').val("");
	$('#checking-amount').val("");
}
//////////////////////////////////////////////////////////////


// now the depositChecking, also as same as depositSaving//
let depositChecking = function() {
	let checkingAmount = parseInt($('#checking-amount').val());
	checkingBalance += checkingAmount;

	$('#checking-balance').text('$' + checkingBalance);	
	clearInputs(); 
}

// withdrawSaving //
const withdrawSaving = function(){
    let savingsAmount = parseInt($('#savings-amount').val());
	savingsAmount = parseInt(savingsAmount);	

    let totalBalance = withdrawingProcess (savingsAmount, savingsBalance, checkingBalance); 
   //savB
	savingsBalance = totalBalance[0];
	checkingBalance = totalBalance[1];

	$('#checking-balance').text('$' +checkingBalance);
	$('#savings-balance').text('$' +savingsBalance);

	warningDisplay();
	clearInputs(); 
};

const withdrawChecking = function() {

	let checkingAmount = $('#checking-amount').val();
	checkingAmount = parseInt(checkingAmount);

    let totalBalance = withdrawingProcess(checkingAmount, checkingBalance, savingsBalance); 
    //checkB//
	checkingBalance = totalBalance[0];
	savingsBalance = totalBalance[1];

	$('#checking-balance').text('$' +checkingBalance);
	$('#savings-balance').text('$' +savingsBalance);

	warningDisplay();
	clearInputs(); 
}

const withdrawingProcess = function(amount, savB, checkB) {

	//Process 1: Check saving/checking amount > 0 and do normal withdrawing
	if (savB >= amount) {
		savB -= amount;
	} else {
        //Process 2: Overdraft protection process
        // if totalbalance is more than withdrawing amount, the remaining amount in saving account is minus out the amount.
		if ((savB + checkB) >= amount) {  // if both account is more than amount to withdraw
			let remainingAmount = savB - amount; // then deduct amount from saving and store the remaining amount.	
			savB = 0; 
			checkB += remainingAmount;
		} else {
			alert("Sorry, you have not enough money to withdraw this amount $" +amount);
		}
	} 

	return [savB, checkB];	

}
// make it red or normal screen by adding and removing class //
const warningDisplay = function() {

	if (savingsBalance === 0){
		$('#savings-balance').addClass("zero");
	} else {
		$('#savings-balance').removeClass("zero");
	}

	if (checkingBalance === 0){
		$('#checking-balance').addClass("zero");
	} else {
		$('#checking-balance').removeClass("zero");
	}	
}

