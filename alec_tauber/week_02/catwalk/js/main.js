console.log("This works");
var imgObj = null;
var animate ;

const init = function () {
    imgObj = document.getElementById('myImage');
    imgObj.style.position= 'relative';
    imgObj.style.left = '0px';
}

const moveRight = function() {
   imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
   animate = setTimeout(moveRight,20);    // call moveRight in 20msec
}

const stop = function (){
    clearTimeout(animate);
    imgObj.style.left = '0px';
  }


  const faster = function() {
    imgObj.style.left = parseInt(imgObj.style.left) + 30 + 'px';
    animate = setTimeout(faster, 10); // call faster in 10 sec
  }
window.onload = init;
// var movePixels = 10;
// var delayMs = 50;
// var catTimer = null;
//
// function catWalk() {
//   var img = document.getElementsByTagName('img')[0];
//   var currentLeft = parseInt(img.style.left);
//   img.style.left = (currentLeft + movePixels) + 'px';
//   if (currentLeft > (window.innerWidth-img.width)) {
//     img.style.left = '0px';
//   }
// }
// function startCatWalk() {
//   catTimer = window.setInterval(catWalk, delayMs);
// }
//
// // #1
// function onStartClick() {
//     startCatWalk();
// }
// var startButton = document.getElementById('start-button');
// startButton.addEventListener('click', onStartClick);
//
// // #2
// function onStopClick() {
//    window.clearInterval(catTimer);
// }
// var stopButton = document.getElementById('stop-button');
// stopButton.addEventListener('click', onStopClick);
//
// // #3
// function onSpeedClick() {
//     movePixels += 5;
//     var speed = movePixels * (1000/50);
//     document.getElementById('info').innerHTML = 'Current speed: ' + speed + 'px/second';
// }
// var speedButton = document.getElementById('speed-button');
// speedButton.addEventListener('click', onSpeedClick);
