//This part make cat move forward from left side//
const blackCat = document.getElementsByTagName('img')[0];
blackCat.style.left = '0px';
blackCat.style.position = 'absolute';
decision = true ;

const walkBack = function () {
if(decision && (parseInt(blackCat.style.left) > 600)) {
    decision = false;
}
if(!decision && (parseInt(blackCat.style.left) < 0)) {
    decision = true;
}

if(decision) {
    blackCat.style.left = parseInt (blackCat.style.left) + 10 + 'px';
} else {
    blackCat.style.left = parseInt (blackCat.style.left) - 10 + 'px';
};

};
const catWalkBack = window.setInterval(walkBack, 100);







// const walkForward = function () {
//     let oldCat = parseInt(blackCat.style.left);
//     let newCat = oldCat + 5;
//     blackCat.style.left = newCat + 'px';

//     }


// const catWalk = window.setInterval(walkForward, 100);

// //node to make cat walk back and forth//


// //This is the method to make the cat move back//


// const walkBack = function () {
//         let oldCat = parseInt(blackCat.style.right);
//         let newCat =  oldCat + 5;
//         blackCat.style.right = newCat + 'px';
//     }
// // const catWalk = window.setInterval(moveRight, 100);
// const catWalkBack = window.setInterval(walkBack, 100); //save the call function into catwalk variable.


// // make cat stop walking at one point


// //function to make the cat stop walking
// // const moveLeft = function () {
// //     clearInterval(catWalk);
// // }

// //get the cat moving back to left
// //switch the img to the other side.
// //write (moveLeft)=> 