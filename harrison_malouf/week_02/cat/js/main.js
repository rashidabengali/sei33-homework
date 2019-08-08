// console.log('Hello');
//
//
console.log('run');
//
// debugger;
//
//
//let pixelPlacement = 10
//
const catImage = document.getElementById('walkingCat');
//
//
catImage.style.position = "absolute";
catImage.style.left = '0px';
//
// we need to make a function to hold all of the current processes.
const catty = function () {

  let oldLeft = parseInt(catImage.style.left);
  let newLeft = oldLeft + 10;
  catImage.style.left = newLeft + 'px';
  // if (movingCat <= innerWidth) {
  //   let pixelPlacement =  10;
  //   catImage.style.transform = "scaleX(1)";
  //   } else (movingCat >= innerWidth) {
  //     let pixelPlacement = -10;
  //     catImage.style.transform = "scaleX(-1)";
  //   }
}

// catMovement will be the event that moves the cat.
setInterval(catty, 50);
//catty();
