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
        player = "Hotdog";
    } else {
        ticTacData[string[0]][string[1]] = 1
        player = "Burger";
    };
    if (checkWin(ticTacData)) {
        return console.log(`Congratulations! ${ player } won.`);
    };
    if (turnNum >= 9) {
        return console.log("Draw Game.");
    };
};

const randomPosition = function(array) {
    const randomIndex1 = Math.floor(Math.random() * 3);
    const randomIndex2 = Math.floor(Math.random() * 3);
    if (isNaN(array[randomIndex1][randomIndex2])) {
        return String(randomIndex1) + String(randomIndex2);
    } else {
        randomPosition(array);
    };
};

const computerMove = function (array) {
    if (turnCount >= 9) {
        return
    };
    for (i = 0; i < 3; i++) {
        if (array[i][0] === array[i][1] && isNaN(array[i][2])) {
            return i+"2";
        } else if (array[i][1] === array[i][2] && isNaN(array[i][0])) {
            return i+"0";
        } else if (array[i][0] === array[i][2] && isNaN(array[i][1])) {
            return i+"1";
        } else if (array[0][i] === array[1][i] && isNaN(array[2][i])) {
            return "2"+i;
        } else if (array[0][i] === array[2][i] && isNaN(array[1][i])) {
            return "1"+i;
        } else if (array[1][i] === array[2][i] && isNaN(array[0][i])) {
            return "0"+i;
        };
    };
    if (array[0][0] === array[1][1] && isNaN(array[2][2])) {
        return "22";
    } else if (array[0][0] === array[2][2] && isNaN(array[1][1])) {
        return "11";
    } else if (array[1][1] === array[2][2] && isNaN(array[0][0])) {
        return "00";
    } else if (array[2][2] === array[1][1] && isNaN(array[2][0])) {
        return "20";
    } else if (array[0][2] === array[2][0] && isNaN(array[1][1])) {
        return "11"; 
    } else if (array[1][1] === array[2][0] && isNaN(array[0][2])) {
        return "02";
    };
    if (isNaN(array[1][1])) {
        return "11";
    };
    
    return randomPosition(array);
    
};

let turnCount = 1;
//get id when picture is clicked 
$('.gamebox').on('click', function () {
    // get id   
    if ($(this).attr('class') === "gamebox") {
        const id = $(this).attr("id");
        $("#burger").clone().appendTo(this);
        updateTic(id, turnCount);
        $(this).removeClass('gamebox');
        turnCount +=1;
           
        const computerId = computerMove(ticTacData);
        console.log(computerId);
        
        $("#hotdog").clone().appendTo(`#${ computerId }`);
        updateTic(computerId, turnCount);
        $(`#${ computerId }`).removeClass('gamebox');
        turnCount += 1;
    };
});