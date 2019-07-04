console.log("Hello");
console.log("");

// #1 function Walk Forward ////////////////////////////////////////////////////
const walkForward = function () {

  // #1 let them know we are walking forward
  // console.log("Walking forward");
  // console.log(`${parseInt(catImg.style.left)} >= ${maxWindowWidth}`);

  // #2 walk forward at 1px per 100 miliseconds // test at 5
  catNewLeft += 1;
  catImg.style.left = `${catNewLeft}px`;

  // until we completely disappear
  if (parseInt(catImg.style.left) == maxWindowWidth) {
    catNewLeft = -265;
    sc = setInterval(switchColour, 400);
    clearInterval(wf);
  }

}

// #2 function flash background colour /////////////////////////////////////////
switchColour = function () {

  if(isRed) {
    body.style.background = "white";
  }
  else {
  body.style.background = 'red';
  }
  isRed = !isRed;
  count++

  if (count >= 6) {
    clearInterval(sc);
    zc = true;
  }

  // 3) zuckCeption appears
  if (zc === true) {

    zuckCeptionImg.style.display = '';
    zuckCeptionImg.style.position = 'absolute';
    zuckCeptionImg.style.top = "0px";
    zuckCeptionImg.style.left = "640px";

    body.style.background = 'url(https://thumbs.gfycat.com/DifficultGlisteningChital-max-1mb.gif)'

    // play Evil laugh


    // 4) zuckerFuck walks his way into our hearts and minds
    nm = setInterval(nightmareAppears, 400);

  }

}

// #3 function zuckerberg walks into frame /////////////////////////////////////
const nightmareAppears = function () {

  // nightMareImg.style.display = '';
  nightMareImg.style.position = 'absolute';
  zuckCeptionImg.style.top = "100px";
  zuckCeptionImg.style.left = "640px";

  if(isNightmare) {
    nightMareImg.style.visibility = "hidden";
  }
  else {
    nightMareImg.style.visibility = 'visible';
  }
  isNightmare = !isNightmare;

  if (countNM > 10) {
    // clearInterval(nm);
    // zuckCeptionImg.style.display = 'none';
    zf = true
  }

  if (zf) {
    zw = setInterval(zuckerWalk, 100);
  }

  countNM++;

}

const zuckerWalk = function () {

  zuckerFuckImg.style.visibility = 'visible';
  zuckerFuckImg.style.postion = 'absolute';

  // #1 walk forward at 1px per 100 miliseconds // test at 5
  zfNewtop += 1;
  zuckerFuckImg.style.top = `${zfNewtop}px`;

  // until we completely disappear
  if (parseInt(zuckerFuckImg.style.top) === window.outerHeight) {
    zfNewtop = -50;
  }

}

////////////////////////////////////////////////////////////////////////////////
// starting conditions /////////////////////////////////////////////////////////
// get images
const catImg = document.getElementById('cat');
const zuckerFuckImg = document.getElementById('zuckerFuck');
const zuckCeptionImg = document.getElementById('zuckCeption');
const nightMareImg = document.getElementById('nightmare');

// get body
const body = document.querySelector('body');

// function parameters (globals) ///////////////////////////////////////////////
maxWindowWidth = window.outerWidth;

// Main function ///////////////////////////////////////////////////////////////

// 1) Walk forward until we completely disappear
// debugger;
catNewLeft = -265;
const walkSpeed = 1;
wf = setInterval(walkForward,walkSpeed);

// 2) background flashes red
// const body = document.querySelector('body');
isRed = false;
count = 0;

// 3) zuckCeption appears
// -> see walkForward Function
zc = false; // wait for zuckception to come in

// 4) nightmare on joel street appears
isNightmare = false;
countNM = 0;
nm = false;

// 5) zuckerFuck walks his way into our hearts and minds
zfNewtop = 50
zf = false;


////////////////////////////////////////////////////////////////////////////////

// let catNewLeft = 0
// const maxWidth = window.innerWidth -296; //296 is the length of the cat
// const newRight = maxWidth;
// let animateright;

// const walkBack = function() {
//
//  console.log('walking back')
//
//   catNewLeft = catNewLeft-10;
//   catImg.style.left = catNewLeft + 'px';
//
//     if(parseInt(catImg.style.left) === 0) {
//
//       clearInterval(animateright);
//       //clearInterval(animate);
//
//     }
//
//
// }

//
// const  catWalk = function() {
//
//     catNewLeft +=  10;
//     catImg.style.left = catNewLeft + 'px';
//
//     if (parseInt(catImg.style.left) >= maxWidth) {
//
//        // clearInterval(animate);
//         catImg.style.webkitTransform ="scaleX(-1)";
//         catImg.style.msTransform="scaleX(-1)";
//         catImg.style.transform = "scaleX(-1)";
//         animateright = setInterval(walkBack,100);
//         clearInterval(animate);
//
//     }
//
// };
//
// // Main function
// const animate = setInterval(catWalk,100);
// // var animateright = setInterval(walkBack,30);
//
//
//
// // window.screen.availWidth
