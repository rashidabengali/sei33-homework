// const board = {
//
// }
//
// const box = {
//   row: ,
//   column:
// }
//
// for (let row = 0; row < 3; row++) {
//   for (let column = 0; column < 3, column++) {
//     box.row = row;
//     box.column = column;
//   }
// }
//
// for (let box = 0; box < 9; box++) {
//   box[box] = [row, column];
// }

let turn = 0;
let gameOver = false;
let pointsX = 0;
let pointsO = 0;
let score = '';

const resetGameValues = function() {
  turn = 0;
  gameOver = false;
  tictactoe.playerX = [];
  tictactoe.playerO = [];
};

const whosTurn = function() {
  turn = turn + 1;
  if (turn%2 === 0) {
    console.log('O');
    return 'O';
  }
  console.log('X');
  return 'X';
};

// const checkWin = function() {
//   let playerXcount = 0;
//   let playerOcount = 0;
//   for (let i = 1; i <= 8; i++) {
//     for (let j = 0; j < 3; j++) {
//       let playerX = tictactoe.playerX.includes(tictactoe.winCondition['win'+i][j])
//       let playerO = tictactoe.playerO.includes(tictactoe.winCondition['win'+i][j])
//       if (playerX) {
//         playerXcount = playerXcount + 1;
//       }
//       if (playerO) {
//         playerOcount = playerOcount + 1;
//       }
//     }
//     if (playerXcount === 3) {
//       console.log(`Player X You Won!`)
//     }
//     else if (playerOcount === 3) {
//       console.log(`Player O You Won!`)
//     }
//     playerXcount = 0;
//     playerOcount = 0;
//   }
// }

const playerXSelected = function(element) {
  return tictactoe.playerX.includes(element);
}

const playerOSelected = function(element) {
  return tictactoe.playerO.includes(element);
}

const updateScore = function() {
  score = `${ pointsX } - ${ pointsO }`;
  return score;
}

const checkWin = function() {
  for (let i = 1; i <= 8; i++) {
    if(turn%2 === 0) {
      if (tictactoe.winCondition['win'+i].every(playerOSelected)){
        console.log('playerO won');
        gameOver = true;
        pointsO = pointsO + 1;
        updateScore();
      }
    }
    else {
      if (tictactoe.winCondition['win'+i].every(playerXSelected)){
        console.log('playerX won');
        gameOver =  true;
        pointsX = pointsX + 1;
        updateScore();
      }
    }
  }
}

const tictactoe = {
//// version 2 /////////////////////////////////////////////////////////////////
  // boxes: {
  //   r0c0: { value: ''},
  //   r0c1: { value: ''},
  //   r0c2: { value: ''},
  //   r1c0: { value: ''},
  //   r1c1: { value: ''},
  //   r1c2: { value: ''},
  //   r2c0: { value: ''},
  //   r2c1: { value: ''},
  //   r2c2: { value: ''},
  // },
  // pickBox: function ( row, column ) {
  //   // console.log(tictactoe.boxes['box'+i].row);
  //   tictactoe.boxes[`r${ row }c${ column }`].value = whosTurn();
  //   console.log(`you picked ${ tictactoe.boxes[ `r${ row }c${ column }` ] }`);
  //   // checkWin();
  // },
////////////////////////////////////////////////////////////////////////////////

  winCondition: {
    win1: ['r0c0','r0c1','r0c2'],
    win2: ['r1c0','r1c1','r1c2'],
    win3: ['r2c0','r2c1','r2c2'],
    win4: ['r0c0','r1c0','r2c0'],
    win5: ['r0c1','r1c1','r2c1'],
    win6: ['r0c2','r1c2','r2c2'],
    win7: ['r0c0','r1c1','r2c2'],
    win8: ['r0c2','r1c1','r2c0'],
  },

  playerX: [],

  playerO: [],

  pickBox: function ( row, column ) {
    // console.log(tictactoe.boxes['box'+i].row);
    let playerTurn = 'player' + whosTurn()
    tictactoe[playerTurn].push(`r${row}c${column}`);
    console.log(tictactoe.playerX);
    console.log(tictactoe.playerO);
    checkWin();
  }

//// version 1 /////////////////////////////////////////////////////////////////
  // boxes: {
  //   box1: { row: 0, column: 0, value: ''},
  //   box2: { row: 0, column: 1, value: ''},
  //   box3: { row: 0, column: 2, value: ''},
  //   box4: { row: 1, column: 0, value: ''},
  //   box5: { row: 1, column: 1, value: ''},
  //   box6: { row: 1, column: 2, value: ''},
  //   box7: { row: 2, column: 0, value: ''},
  //   box8: { row: 2, column: 1, value: ''},
  //   box9: { row: 2, column: 2, value: ''},
  // },
  // pickBox: function ( row, column ) {
  //   for (let i = 1; i <= 9; i++) {
  //     // console.log(tictactoe.boxes['box'+i].row);
  //     if (tictactoe.boxes['box'+i].row === row && tictactoe.boxes['box'+i].column === column) {
  //       console.log(`you picked ${ tictactoe.boxes['box'+i] }`);
  //       tictactoe.boxes['box'+i].value = whosTurn();
  //       checkWin();
  //       console.log(tictactoe.boxes);
  //     }
  //   }
  // }
////////////////////////////////////////////////////////////////////////////////

// try later
  // boxes: {
  //   row: [0,1,2],
  //   column: [0,1,2]
  // },

  // boxes: {},
}



// console.log(tictactoe.boxes['box'+4].row);

// tictactoe.pickBox(2,2);
// tictactoe.pickBox(0,1);
// tictactoe.pickBox(0,2);
// tictactoe.pickBox(1,1);
// tictactoe.pickBox(0,0);
// tictactoe.pickBox(2,1);
// tictactoe.pickBox(1,0);
