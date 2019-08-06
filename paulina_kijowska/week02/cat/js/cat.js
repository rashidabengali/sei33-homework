
console.log("hello");

// Create a variable to store a reference to the img.

var img = document.getElementsByTagName('img')[0];

var doggo = document.getElementsByTagName('img')[1];

// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.

 img.style.top ="150px";
 img.style.left='0px';

doggo.style.right='200px';
doggo.style.top= "150px";
 // doggo.style.bottom ="0px";
 // doggo.style.right= "900px";
 //





img.style.left = '0px';

var walkForwards = true; // new variable walk forwards

function mokDance() {
  var left = parseInt(img.style.left); // assigns to left variable

  if (walkForwards && (left > (window.innerWidth-img.width))) {
    walkForwards = false; // when img hits end of screen, var becomes false
  }
  if (!walkForwards && (left <= 0)) {
    walkForwards = true; // if not walking forwards and left hits 0px (very lef of screen), walkingForwards become true and instructions below continues
  }

  if (walkForwards) {
    img.style.left = (left + 10) + 'px'; // move across screen 10 px at a time
  } else {
    img.style.left = (left - 10) + 'px'; // if not walking forward, go backwards by 10 pixels at a time
  }

}
window.setInterval(mokDance, 50);


//////////////////////////////////////
function doggoDance() {
  var right = parseInt(doggo.style.right); // assigns to left variable

  if (walkForwards && (right > (window.innerWidth-img.width)/2)) {
    walkForwards = false; // when img hits end of screen, var becomes false
  }
  if (!walkForwards && (right <= 0)) {
    walkForwards = true; // if not walking forwards and left hits 0px (very lef of screen), walkingForwards become true and instructions below continues
  }

  if (walkForwards) {
    doggo.style.right = (right + 10) + 'px'; // move across screen 10 px at a time
  } else {
    doggo.style.right = (right - 10) + 'px'; // if not walking forward, go backwards by 10 pixels at a time
  }

}
window.setInterval(doggoDance, 50);



// const newCat = function() {
// if (doggo.style.right & img.style.left === 800 + "px" ) {
//
// var catel = document.getElementsByClassName('cat1');
// catel.classList.remove("cat1");
//  }
// }
// newCat();

//
// var dogWalk = function() {
//
//   var oldDogRight = parseInt(img.style.right);
//   // var secondDogRight = newDogLeft -200;
//   var newRight = oldDogRight + 5;
//   img.style.right = newRight + 'px';
// //   if (img.style.right > "0px") {
// // (img.style.right = "450px")
//   }
// };
// var fadeTimer = window.setInterval(dogWalk, 150);

// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
