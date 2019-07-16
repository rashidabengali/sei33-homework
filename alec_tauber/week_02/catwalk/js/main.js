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
   animate = setTimeout(moveRight, 20);    // call moveRight in 20 sec
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
