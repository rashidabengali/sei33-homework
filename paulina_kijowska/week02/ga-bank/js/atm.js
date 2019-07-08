// $(document).ready(function () {
//
//
// //how much money the user put in the input bit
// const $inputcheck = $("#checking-amount").val();
//
// const $inputsav = $("#savings-amount").val()
//
// ///how much money inside
// const $totcheck = $("div #checking-balance").text();
// const $totsav = $("div #savings-balance").text();
// console.log($totcheck);
// console.log($totsav);
//
//
//
//       $('#checking-deposit').on('click', function() {
//          // var number = parseInt($totcheck);
//
//          var deposit = + $("#checking-amount").val();
//
//  var $tot = $("#checking-balance").html("$"+value);
//  // var $toti = $( "#checking-balance" ).append("<p>$toti<p>");
//  const totally = 0;
//
//
//
//
//   });
//
//   $(function(lol) {
//         $('#savings-deposit').on('click', function() {
//            // var number = parseInt($totcheck);
//            var value = $("#savings-amount").val();
//    var $tot = $("#savings-balance").html("$"+value);
//
//         });
//     });
//
//
//
//
// });
// // $("#checking-deposit").on("click", function){ $("#checking-balance").replaceWith($inputcheck)});

$(document).ready(function () {
  $('#checking-deposit').on('click', function () {
    const deposit = + $('#checking-amount').val();
    const currentBalance = + $('#checking-balance').text().slice(1);
    const newBalance = currentBalance + deposit;
    $('#checking-balance').text('$' + newBalance);
  });

  $('#checking-withdraw').on('click', function () {
    const deposit = + $('#checking-amount').val();
    const currentBalance = + $('#checking-balance').text().slice(1);

    const otherBalance = + $('#savings-balance').text().slice(1);
    const totalBalance = currentBalance + otherBalance;

    const newBalance = currentBalance - deposit;

    if (newBalance >= 0) {
      $('#checking-balance').text('$' + newBalance);
    } else if (deposit <= totalBalance) {
      $('#checking-balance').text('$0');
      $('#savings-balance').text('$' + (otherBalance + newBalance));
    }
  });

  $('#savings-deposit').on('click', function () {
    const deposit = + $('#savings-amount').val();
    const currentBalance = + $('#savings-balance').text().slice(1);
    const newBalance = currentBalance + deposit;
    $('#savings-balance').text('$' + newBalance);
  });

  $('#savings-withdraw').on('click', function () {
    const deposit = + $('#savings-amount').val();
    const currentBalance = + $('#savings-balance').text().slice(1);
    const newBalance = currentBalance - deposit;

    if (newBalance >= 0) {
      $('#savings-balance').text('$' + newBalance);
    }

  });

});
