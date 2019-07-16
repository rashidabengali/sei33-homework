
$(document).ready(function () {

  const resetGameHtml = function() {
    $('.message-board').html('');
    $('.score-board').html('');
    $('button').css('visibility','hidden');
  }

  const pickBox = function() {
    $('td').on('click', function() {
      // console.log('yes');
      row = this.dataset.row;
      column = this.dataset.col;
      tictactoe.pickBox( row, column );
      $(this).unbind();
      if (turn%2 === 0) {
        $(this).addClass('blue');
      }
      else {
        $(this).addClass('red');
      }
      if (gameOver && turn%2 === 0) {
        $('*').removeClass('red');
        $('tbody').addClass('gameOver');
        $('.message-board').html(`PlayerO won!`);
        $('.score-board').html(`${ updateScore() }`);
        $('button').css('visibility','visible');
        $('td').unbind();
      }
      else if (gameOver && turn%2 === 1) {
        $('*').removeClass('blue');
        $('tbody').addClass('gameOver');
        $('.message-board').html(`PlayerX won!`);
        $('.score-board').html(`${ updateScore() }`);
        $('button').css('visibility','visible');
        $('td').unbind();
      }
      else if (turn === 9) {
        $('*').removeClass('blue');
        $('*').removeClass('red');
        $('.message-board').html(`Draw!`);
        $('.score-board').html(`${ updateScore() }`);
        $('button').css('visibility','visible');
        $('td').unbind();
      }
    });
  }

  pickBox();


  $('button').on('click', function() {
    resetGameValues();
    $('*').removeClass('red');
    $('*').removeClass('blue');
    $('*').removeClass('gameOver');
    resetGameHtml();
    pickBox();
  });
});
