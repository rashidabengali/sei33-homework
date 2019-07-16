
$(document).ready(function () {

// we need to make a withdraw function
 $("#checking-deposit").on("click" ,function () {
  const checkingBalance = + $("#checking-deposit").val();
  const checkingRawAmount = + $("#checking-balance").html().slice(1);
  const checkingTotal = checkingBalance + checkingRawAmount;
  // just missed out on this part and had to check, must remember!
  $("#checking-balance").html("$" + checkingTotal )
  console.log("#checking-balance")
  });

  $("#checking-withdraw").on("click" , function (){
    const checkingWithdraw = + $("#checking-withdraw").val();
    const checkingCurrentSum = + $("#checking-balance").html().slice(1);
    const checkingTotalSum = checkingCurrentSum - checkingWithdraw ;
  });

  $("#savings-deposit").on("click" ,function () {
   const savingsBalance = + $("#savings-deposit").html();
   const savingsRawAmount = + $("#savings-balance").html().slice(1);
   const savingsTotal = savingsBalance + savingsRawAmount;
   $("#savings-balance").html("$" + savingsTotal )
   });

   $("#savings-withdraw").on("click" , function (){
     const savingsWithdraw = + $("#savings-withdraw").val();
     const savingsCurrentSum = + $("#savings-balance").html().slice(1);
     const savingsTotalSum = savingsCurrentSum - savingsWithdraw
   });
});
