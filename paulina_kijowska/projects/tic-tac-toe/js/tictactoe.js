




$(document).ready(function () {

// prompt("What is your name?");
//
// alert("Pick your picture");

// $(".one").click(function(){
//   $("td:first").addClass("pic");

// const randomnum = Math.floor(Math.random() * 7);

// const tiles = ["#zero", "#one", "#two", "#three", "#four", "#five", "#six", "#seven", "#eight"];
// let index = tiles.indexOf(tiles[randomnum]);
// if (index > -1) {
//   tiles.splice(index, 1);
// }
// console.log(tiles);


let playerOne = true;
let playerTwo = false;
let playerOneCombos = [];
let playerTwoCombos = [];

$('.box').on("click", function () {
if (playerOne) {
  //console.log($(this).attr("id"));

  //this.offclick
playerOneCombos.push($(this).attr("id"));

// $('.box').text($(this).attr('id'));
  playerOne = false;
  playerTwo = true;
  console.log('playerOneCombos', playerOneCombos);
  //decideWinner(playerOneCombos)
} else {
   playerTwoCombos.push($(this).attr("id"));
   console.log('playerTwoCombos', playerTwoCombos);
  playerOne = true;
  playerTwo = false;
  //console.log('playerTwoCombos', playerTwoCombos);
}

if (playerOneCombos.length === 5 && playerTwoCombos.length ===4) {
  //.offclick

  const hedge = timetocheck(playerOneCombos);
  const dog = timetocheck(playerTwoCombos);
  //console.log("winner 1");
  if (hedge) {
    console.log("player 1 wins");
  }
  if (dog) {
    console.log("player 2 wins");
  }
}

});

// const timetocheck = function() {
// if ((playerOneCombos.length === 3) && (playerOneCombos === option1)) {
//   console.log("winner");
//
// }else {
// console.log("do not give up");
// }
// }
// timetocheck();

const timetocheck = function (array) {
  if ( (array.includes("one") && array.includes("two") && array.includes("three")) ||
  (array.includes("four") && array.includes("five") && array.includes("six")) ||
  (array.includes("seven") && array.includes("eight") && array.includes("nine")) ||
  (array.includes("one") && array.includes("four") && array.includes("seven")) ||
  (array.includes("two") && array.includes("five") && array.includes("six")) ||
  (array.includes("three") && array.includes("six") && array.includes("nine")) ||
  (array.includes("one") && array.includes("five") && array.includes("nine")) ||
  (array.includes("three") && array.includes("five") && array.includes("seven")) ) {
    return true;
  }
};

// const option1 = ["four", "five", "six"];
// const option2 = ["seven", "eight", "nine"];
// const option3 = ["one", "four", "seven"];
// const option4 = ["two", "five", "eight"];
// const option5 = ["three", "six", "nine"];
// const option6 = ["one", "five", "nine"];
// const option7 = ["three", "five", "seven"];
// const option8 = ["one", "two", "three"];
});


// // // ||("seven"&"eight"&"nine")
// // ||("one"&"four"&"seven")
// // ||("two"&"five"&"eight")
// // ||("three"&"six"&"nine")
// // ||("one"&"five"&"nine")
// // ||("three"&"five"&"seven"))
// {
//
//   console.log("false");
// }
