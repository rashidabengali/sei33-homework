// 1. alternate between players "x" and "o". okay 
// 2. Stopped game if all buttons were clicked. okay
// 3. Users shouldn't click the button more than once. okay
// 4. the game should restart after board is full. okay
// 5. 
let counter = 0;
// I can have 8 matches. (3 horizontals, 3 verticals, 2 diagonals)
let matches = [
    // horizontal matches.
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    // vertical matches.
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    // diagonal matches.
    [1, 5, 9],
    [7, 5, 3]
];
let totalOfMatches = function () {
    for (let index = 0; index < matches.length; index++) {
        const element = matches[index];
        console.log(element);

    }
}
let playerX = [];

// restart the game 
let restartGame = function () {
    counter = 0;
    $(".game-item").text("");
    $(".game-item").attr("disabled", false);
};
$(".game-item").click(function () {

    let text = "";
    if (counter % 2 === 0) {
        text = "x";
    } else {
        text = "o";
    }
    counter += 1;
    $(this).text(text);
    // To disable a submit button, you just need to add a disabled attribute to the submit button.
    $(this).attr("disabled", true);
    // If user clicks in all buttons the game should restart. 
    if (counter === 9) {
        alert("Game-Over");
        // restart the game 
        restartGame();

    }
});


