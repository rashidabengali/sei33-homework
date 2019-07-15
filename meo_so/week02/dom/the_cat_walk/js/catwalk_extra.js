console.log("The Cat Walk")

const img = document.getElementById('walkingCat1');
img.style.top = '200px';
img.style.left = '200px';

const img2 = document.getElementById('walkingCat2');
img2.style.top = '200px';
img2.style.left = '200px';
const img3 = document.getElementById('walkingCat3');
img3.style.top = '200px';
img3.style.left = '0px';





let degreeDefault = 0;

const topRight = function() {
    const oldLeft = parseInt(img.style.left);
    const oldTop = parseInt(img.style.top);
    const newLeft = oldLeft + 5;
    const newTop = oldTop - 5;
    img.style.left = newLeft + 'px';
    img.style.top = newTop + 'px';
    degreeDefault += 30;
    rotate = "rotate(" + degreeDefault + "deg)";
    img.style.transform = rotate;
    if (parseInt(img.style.left) > 600) {
        img.style.left = '200px';
        img.style.top = '200px';
    };
};

let degree2 = 0;
const middle = function() {
    const oldLeft = parseInt(img2.style.left);
    const newLeft = oldLeft + 5;
    img2.style.left = newLeft + 'px';
    degree2 += 30;
    rotate = "rotate(" + degree2 + "deg)";
    img2.style.transform = rotate;
    if (parseInt(img2.style.left) > 1000) {
        img2.style.left = '200px';
    };
};

const start = function() {
    const oldLeft = parseInt(img3.style.left);
    const newLeft = oldLeft + 5;
    img3.style.left = newLeft + 'px';
    if (parseInt(img3.style.left) > 200) {
        img3.style.left = 0;
    };
};





// case 3
const moveForward = function() {
    const oldLeft = parseInt(img.style.left);
    const newLeft = oldLeft + 5;
    img.style.left = newLeft + 'px';
};

const moveBack = function() {
    const oldLeft = parseInt(img.style.left);
    const newLeft = oldLeft - 5;
    img.style.left = newLeft + 'px';
};

let direction = 'right';

const moveBackFor = function() {

    if (direction === 'right') {
        moveForward();
    } else{ 
        moveBack();
    }
    if (parseInt(img.style.left) > 1000) {
        img.style.transform = 'scaleX(-1)';
        direction = 'left';
    } else if (parseInt(img.style.left) < 0) {
        img.style.transform = 'scaleX(1)';
        direction = 'right';
    };
};

let walkTimer = window.setInterval(topRight, 30);
let walkTimer2 = window.setInterval(middle, 30);
let walkTimer3 = window.setInterval(start, 30);





