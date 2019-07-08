console.log('run');

const ticTacData = [ first = [NaN, NaN, NaN],
    second = [NaN, NaN, NaN],
    third = [NaN, NaN, NaN],
];

const checkWin = function (array) {
for (i = 0; i < 3; i++) {
    if ((array[i][0] === array[i][1] && array[i][1] === array[i][2]) || 
        (array[0][i] === array[1][i] && array[1][i] === array[2][i])) {
        return true;
    };
};
if ((array[0][0] === array[1][1] && array [1][1] === array[2][2]) ||
    (array [0][2] === array[1][1] && array [1][1] === array[2][0])) {
    return true;
};
return false;
};
//take in ID and change array
const updateTic = function (string, turnNum) {
    let player;  
    if (turnNum % 2 === 0) {
        ticTacData[string[0]][string[1]] = 2;
        player = 2;
    } else {
        ticTacData[string[0]][string[1]] = 1
        player = 1;
    };
    if (checkWin(ticTacData)) {
        return console.log(`Congratulations! Player ${ player } won.`);
    };
    if (turnNum >= 9) {
        return console.log("Draw Game.");
    };
};
// TODO: add repeat input guard

let turnCount = 1;
//get id when picture is clicked 
$('.game-board div').on('click', function () {
    // get id
    const id = $(this).attr("id");

    if (turnCount & 2 !== 0) {
    $("#burger").clone().appendTo(this);
    updateTic(id, turnCount);
    } else {
    $("#hotdog").clone().appendTo(this);
    updateTic(id, turnCount);
    }
    turnCount += 1;
});
//turn counter    

ticTacData1 = [ first = [0, 1, 0],
    second = [0, 0, 1],
    third = [1, 0, 1],
];

