// Create a variable to store a reference to the img.
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

let cat = document.getElementById('cat');

cat.style.left = "0px";
let step =10;
let interval;
const catWalk = function() {
  // console.log("left = "+cat.style.left);
  let oldLeft = parseInt(cat.style.left);
  if(oldLeft >1200){
    // oldLeft = 0;
    step = -10;
    cat.style.transform = "scaleX(-1)";
  }
  if(oldLeft ===600){
    cat.src="https://media.boingboing.net/wp-content/uploads/2019/01/giphy-3.gif";
    window.clearInterval(interval);
    setTimeout(activate , 10000);
  }
  if(oldLeft<0) {
    step = 10;
    cat.style.transform = "scaleX(1)";

  }
  let newLeft = oldLeft + step;
  cat.style.left = newLeft + 'px';
};

const activate = function() {
  cat.src= "http://www.anniemation.com/clip_art/images/cat-walk.gif";
  interval = window.setInterval(catWalk, 50);

}

interval = window.setInterval(catWalk, 50);
