
// - Create a new Javascript file and link to it with a script tag at the bottom.
// - Create a variable to store a reference to the img.
const catImg = document.getElementsByTagName('img')[0];
const maxWindowWidth = window.innerWidth - 300;
// - Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
catImg.style.left = "0px";

const catWalkLeftToRight = function(left){
    catImg.style.left = (parseInt(left) + 5) + "px";
    if (catImg.style.left === ( maxWindowWidth + "px")){
        catImg.className = "flipImage";
    }
}
const catWalkRightToLeft = function(left){
    catImg.style.left = (parseInt(left) - 5) + "px";
    if (catImg.style.left === "0px"){
        catImg.className = "";
    }
}

// - Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
const catWalk = function(){
    const leftStyle = catImg.style.left;
    let left = leftStyle.slice(0, leftStyle.length-2);
    if (catImg.className === "flipImage"){
        // right to left
        catWalkRightToLeft(left);
    }else{
        // left to right
        catWalkLeftToRight(left);
    }
    
}
// - Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah! 
const walkTimer = setInterval(catWalk, 50);

// - Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). 
// So they should keep walking from left to right across the screen, forever and ever. 

// - Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. 
// They should keep walking back and forth forever and ever. 

// - Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, 
// keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

// - Bonus #4: Pretty much go nuts or whatever.