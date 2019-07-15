// Create a new Javascript file and link to it with a script tag at the bottom. okay 

// Create a variable to store a reference to the img.okay 

// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.okay 

// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, 
// by changing the "left" style property. okay 

// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to 
// right. Hurrah!OKAY

// // Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). 
// So they should keep walking from left to right across the screen, forever and ever. - okay

// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They 
// should keep walking back and forth forever and ever. - okay

// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat 
// dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have 
// it continue the walk.

// Bonus #4: Pretty much go nuts or whatever.

const imageReference = document.querySelector('img');
let moveForward = true;

function catWalk() {
    const left = imageReference.style.left.replace("px", "");
    let newValue = Math.round(left, 0);

    // If the cat is walking from the left to the right
    // and the next position to move the image is greater than
    // the image of the screen - the cat image
    // we need to go back and turn left
    if (moveForward && (left > (window.innerWidth - imageReference.width))) {
        moveForward = false;
    }

    // If we are moving back, we should be moving until
    // we get to the zero position
    // after that, we should change `moveForward` to true
    // and change the direction to move right
    if (moveForward === false && (left <= 0)) {
        moveForward = true;
    }

    // If we are moving forward (going to the right), we are increasing the distance
    // If we are moving backwards (going to the left), we are decreasing the distance
    if (moveForward) {
        newValue = newValue + 10;
    } else {
        newValue = newValue - 10;
    }

    // Adding the distance value for the image element
    imageReference.style.left = newValue + 'px';

}

setInterval(catWalk, 50);



// window.innerWidth;1440