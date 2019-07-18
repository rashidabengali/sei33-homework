const checkForZero = function () {
  $('.zero').removeClass('zero');

  const checkingBalance = + $('#checking-balance').text().slice(1);
  if (checkingBalance === 0) {
    $('#checking-balance').addClass('zero');
  }

  const savingsBalance = + $('#savings-balance').text().slice(1);
  if (savingsBalance === 0) {
    $('#savings-balance').addClass('zero');
  }

};

$(document).ready(function () {
  checkForZero();

  $('#checking-deposit').on('click', function () {
    const deposit = parseInt( $('#checking-amount').val() );// + $('#checking-amount').val()
    const balance = parseInt( $('#checking-balance').html().replace('$', '') ); // + $('#checking-balance').text().slice(1);
    const updatedBalance = balance + deposit;
    $('#checking-balance').text('$' + updatedBalance); // $('#checking-balance').text('$' + updatedBalance);
    checkForZero();
  });

  $('#savings-deposit').on('click', function () {
    const deposit = parseInt( $('#savings-amount').val() );
    const balance = parseInt( $('#savings-balance').html().replace('$', '') );
    const updatedBalance = balance + deposit;
    $('#savings-balance').text('$' + updatedBalance);
    checkForZero();
  });

  $('#checking-withdraw').on('click', function () {
    const withdraw = parseInt( $('#checking-amount').val() );
    const checkingBalance = parseInt( $('#checking-balance').html().replace('$', '') );
    const totalBalance = parseInt( $('#checking-balance').html().replace('$', '') ) + parseInt( $('#savings-balance').html().replace('$', '') );
    const savingsBalance = parseInt( $('#savings-balance').html().replace('$', '') );

    if (withdraw > totalBalance) {
      console.log('You can not withdraw');
  //    $('#output').html('You can not withdraw');
    } else if (withdraw < checkingBalance){
        const updatedBalance = checkingBalance - withdraw;
        $('#checking-balance').text('$' + updatedBalance);

      } else if (withdraw === checkingBalance) {
          const updatedBalance = checkingBalance - withdraw;
          $('#checking-balance').text('$' + updatedBalance);

      } else if (withdraw > checkingBalance && withdraw <= totalBalance) {
          const updatedBalance = 0;
          const overdraftBalance = savingsBalance - (withdraw - checkingBalance);
          $('#checking-balance').text('$' + updatedBalance);
          $('#savings-balance').text('$' + overdraftBalance);
    }
    checkForZero();
  });

    $('#savings-withdraw').on('click', function () {
      const withdraw = parseInt( $('#savings-amount').val() );
      const savingsBalance = parseInt( $('#savings-balance').html().replace('$', '') );
      const totalBalance = parseInt( $('#checking-balance').html().replace('$', '') ) + parseInt( $('#savings-balance').html().replace('$', '') );
      const checkingBalance = parseInt( $('#checking-balance').html().replace('$', '') );

      if (withdraw > totalBalance) {
        console.log('You can not withdraw');
    //    $('#output').html('You can not withdraw');
      } else if (withdraw <= savingsBalance){
          const updatedBalance = savingsBalance - withdraw;
          $('#savings-balance').text('$' + updatedBalance);

        } else if (withdraw === savingsBalance) {
          const updatedBalance = savingsBalance - withdraw;
          $('#savings-balance').text('$' + updatedBalance);


        } else if (withdraw > savingsBalance && withdraw <= totalBalance) {
            const updatedBalance = 0;
            const overdraftBalance = checkingBalance - (withdraw - savingsBalance);
            $('#savings-balance').text('$' + updatedBalance);
            $('#checking-balance').text('$' + overdraftBalance);

      }
      checkForZero();
  });



});
