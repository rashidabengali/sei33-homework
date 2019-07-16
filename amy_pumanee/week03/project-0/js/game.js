
$(document).ready(function () {

  let playerOneTile = [];
  let playerTwoTile = [];
  let playerOne = true;
  let playerTwo = false;
  let winner = "";


  const findWinner = function (array) {

    if ( (array.includes("1") && array.includes("2") && array.includes("3")) ||
          (array.includes("1") && array.includes("4") && array.includes("7")) ||
          (array.includes("1") && array.includes("5") && array.includes("9")) ||
          (array.includes("2") && array.includes("5") && array.includes("8")) ||
          (array.includes("3") && array.includes("5") && array.includes("7")) ||
          (array.includes("3") && array.includes("6") && array.includes("9")) ||
          (array.includes("4") && array.includes("5") && array.includes("6")) ||
          (array.includes("7") && array.includes("8") && array.includes("9")) ) {

           $('.tile').off('click');
           return true;
    } else {
      return false;
    }
  };

  const checkStatus = function () {
    if (winner === 'x') {
        $('#message').text('The Winner is Player X').css("color", "#667fe4");
        return;
    } else if (winner === 'o') {
        $('#message').text('The Winner is Player O').css("color", "hotpink");
        return;
    } else if (winner === 'draw') {
        $('#message').text('DRAW!').css("color", "Gray");
        return;
    } else {
      return;
    }
  };

  const playGame = function () {

    if (playerOne === true) {
      $('#message').text('Player: O').css("color", "hotpink");
      playerOneTile.push( $(this).attr("id") );
      $(this).text("X").css("color", "#667fe4");
      //console.log('playerOneTile', playerOneTile);
      playerOne = false;
      playerTwo = true;
    } else {
      $('#message').text('Player: X').css("color", "#667fe4");
      playerTwoTile.push( $(this).attr("id") );
      $(this).text("O").css("color", "hotpink");
      //console.log('playerTwoTile', playerTwoTile);
      playerOne = true;
      playerTwo = false;
    }
      $(this).off('click');

      let x = findWinner(playerOneTile);
      let o = findWinner(playerTwoTile);

      if (x === true) {
        winner = 'x';
      }
      if (o === true) {
        winner ='o';
      }
      if ( playerTwoTile.length === 4 && playerOneTile.length === 5) {
        if (x === false & o === false) {
          console.log("draw");
          winner = 'draw';
        }
      }
      checkStatus();
  };


  const resetGame = function () {
    $('.tile').text('');
    $('#message').text("Start New Game!").css("color", "Red");
    $('.tile').on('click', playGame);
     playerOneTile = [];
     playerTwoTile = [];
     playerOne = true;
     playerTwo = false;
     winner = "";
  };


  $('.tile').on('click', playGame);

  $("#reset").on('click', resetGame);


});
