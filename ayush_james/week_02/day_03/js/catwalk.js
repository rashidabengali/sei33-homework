// Create a variable to store a reference to the img.
const img = document.getElementById('cat');

// - Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
img.style.position = "absolute";
img.style.left = "0px";


// - Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// - Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!



// const catWalk = function () {
//   const oldleft = parseInt(img.style.left); //parseInt converts it into a number.
//   let newLeft = oldleft + 10;
//   cat.style.left = newLeft + 'px';
// };
// window.setInterval(catWalk, 50);

// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.

// const catWalk = function () {
//   const oldleft = parseInt(img.style.left); //parseInt converts it into a number.
//   let newLeft = oldleft + 10;
//   cat.style.left = newLeft + 'px';
//   if (oldleft > window.innerWidth) { //Having a specific pixel width here aint good. cause we are going specific size. so if the window is smaller or larger..it won't have the same effect.
//     cat.style.left  = "-10px";
//   }
// };
// window.setInterval(catWalk, 50);


// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.

const catWalk = function () {
  const oldLeft = parseInt(img.style.left); //parseInt converts it into a number.
  let newLeft = oldLeft + 10;
  cat.style.left = newLeft + 'px';
  if (oldLeft > window.innerWidth) { //this ain't good cause we are going specific size. so if the window is smaller or larger..it won't have the same effect.
    cat.style.left  = "-10px";
  }
};
window.setInterval(catWalk, 50);



// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//
// Bonus #4: Pretty much go nuts or whatever.
