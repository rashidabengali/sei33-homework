
//begin the game with a prompt saying it is X's turn
const game = {
  user1: "X",
  user2: "O",
  currentUser: "X",

  gameState: ["", "", "", "", "", "", "", "", ""],

  turn: function (place) {
    place = Number(place) - 1
    //when a place is clicked, add the X (or O)
    if (this.gameState[place] != "") {
      //already taken
      console.log("error: place already taken");
    }
    else {
      this.gameState[place] = this.currentUser;
      this.checker();
    }
  },

  matchCheck: function (one, two, three, winId) {
    one = Number(one) - 1;
    two = Number(two) - 1;
    three = Number(three) - 1;
    console.log(one);
    // check where that turn was placed, and check for any rows
    if (this.gameState[one] === this.gameState[two]
        && this.gameState[two] === this.gameState[three]
        && this.gameState[one] != "" && this.gameState[two] != "" && this.gameState[three] != "" ) {
          //add winner message
          $("#win").show();
          $('#win p').text(`the winner is ${this.gameState[one]}`);
          //add stroke
          $(".board").append("<div id='stroke'></div>");
          $("#stroke").addClass(winId);
          return true;
        }
    else {
      return false;
    }
  },

  checker: function () {
    //horizontal match
    if (this.matchCheck(1, 2, 3, "stroke strokeHoriz winHorizontal1") ||
    this.matchCheck(4, 5, 6, "stroke strokeHoriz winHorizontal2")||
    this.matchCheck(7, 8, 9, "stroke strokeHoriz winHorizontal3")||
    //vertical match
    this.matchCheck(1, 4, 7, "stroke strokeVert winVertical1")||
    this.matchCheck(2, 5, 8, "stroke strokeVert winVertical2")||
    this.matchCheck(3, 6, 9, "stroke strokeVert winVertical3")||
    //diagonal match
    this.matchCheck(1, 5, 9, "stroke winDiagonal1")||
    this.matchCheck(3, 5, 7, "stroke winDiagonal2")) {
    }
    else if (this.checkBoardFull() === true) {
      //if board true, call draw.
      //add winner message
      $("#win").show();
      $('#win p').text(`Draw!`);
    }
    else {
      this.nextTurn();
    }
  },

  checkBoardFull: function () {
    //TODO check if board is full
    for (let i=0; i < game.gameState.length; i++) {
      //for each item on the board, check if any are empty.
      if (game.gameState[i] === "") {
        console.log("gamestate " + game.gameState[i]);
        //if board not full, move along
        return false;
      }
    }//loop
    return true;
  },

  nextTurn: function () {
    //switch the current user for next turn
    if (this.currentUser === this.user1) {
      this.currentUser = this.user2;
    } else if (this.currentUser === this.user2) {
      this.currentUser = this.user1;
    }
  },

  match: function () {
    //on new game
    //remove stroke
    $(".stroke").remove();
    //reset gameState
    for (let i=0; i < 9; i++) {
      this.gameState[i] = "";
      render();
    }
  }
};

function addClicker (place, n) {
  $(place).on("click", function () {
    game.turn(n);
    render();
  });
}

addClicker(".one", "1");
addClicker(".two", "2");
addClicker(".three", "3");
addClicker(".four", "4");
addClicker(".five", "5");
addClicker(".six", "6");
addClicker(".seven", "7");
addClicker(".eight", "8");
addClicker(".nine", "9");

function render () {
  //render the board
  $(".one").text(game.gameState[0]);
  $(".two").text(game.gameState[1]);
  $(".three").text(game.gameState[2]);
  $(".four").text(game.gameState[3]);
  $(".five").text(game.gameState[4]);
  $(".six").text(game.gameState[5]);
  $(".seven").text(game.gameState[6]);
  $(".eight").text(game.gameState[7]);
  $(".nine").text(game.gameState[8]);
}

$("#win button").on("click", function () {
  game.match();
  $("#win").hide();
})

// on start
render();
$("#win").hide();
