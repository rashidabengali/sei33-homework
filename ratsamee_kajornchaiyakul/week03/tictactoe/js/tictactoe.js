const winnerWays = ['012', '345', '678', '036', '147', '258', '048', '246'];
const USER = 'mark_by_user';
const AI = 'mark_by_ai';

const checkWay = function(positonList, way){
    let found = true;
    let waySplit = way.split("");
    for (let i = 0; i < waySplit.length; i++) {
        const element = waySplit[i];
        if (!positonList.includes(element)){
            found = false;
            break;
        }
    }
    
    return found;
}
const checkWinner = function(positionList, winnerName){
    if (positionList.length > 2){
        for (let i = 0; i < winnerWays.length; i++) {
            const way = winnerWays[i];
            if (checkWay(positionList, way)){
                tictactoe.winner.way = way;
                tictactoe.winner.name = winnerName;
                break;
            }
        }
    }
}

const tictactoe = {
    userWays: [],
    aiWays: [],
    totalCount: 0,
    winner: {
        name: "",
        way: ""
    },
    mark: function(positionId, markBy){
        if (this.userWays.includes(positionId) || this.aiWays.includes(positionId)){
            // positionId has already marked
            return false;
        }
        if (markBy === USER){
            this.userWays.push(positionId);
            checkWinner(this.userWays, USER);
            return true;
        }else{
            this.aiWays.push(positionId);
            checkWinner(this.aiWays, AI);
            return true;
        }
    }
}