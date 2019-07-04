console.log("The Cat Walk")

const img = document.getElementById('walkingCat1');
img.style.top= '200px';
img.style.left= '0px';

const moveRight = function() {
    const oldLeft = parseInt(img.style.left);
    const newLeft = oldLeft + 5;
    img.style.left = newLeft + 'px';
    if (parseInt(img.style.left) > 1000) {
        window.clearInterval(walkTimer);
    };
};

const moveNonStop = function() {
    const oldLeft = parseInt(img.style.left);
    const newLeft = oldLeft + 5;
    img.style.left = newLeft + 'px';
    if (parseInt(img.style.left) > 1000) {
    img.style.left = 0;
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
let walkTimer = window.setInterval(moveBackFor, 30);





