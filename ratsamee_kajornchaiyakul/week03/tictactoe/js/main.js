
let objTictactoe = tictactoe;
let $resultShow;
$('document').ready(function(){
    $resultShow = $('.show-result');
    $resultShow.hide();
    $('.box').on('click', function(){
        // count click number
        objTictactoe.totalCount += 1;
        
        let markBy = (objTictactoe.totalCount % 2 === 0)?AI: USER;
        if (objTictactoe.mark(this.id, markBy)){
            // change write symbo to div
            if (markBy === USER){
                // click by user, write X to div
                this.innerText += "X"
            }else{
                // click by AI, write O to div
                this.innerText += "O";
            }
            if (objTictactoe.winner.way){
                $('.show-result')[0].innerText = `${objTictactoe.winner.name===USER?"Player X": "Player O"} is winner.`;
                $resultShow.show();
            }else if(objTictactoe.totalCount === 9){
                // no one win
                $('.show-result')[0].innerText = "No one win";
                $resultShow.show();
            }
            
        }
    })
})
