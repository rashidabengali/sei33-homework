console.log("The Cat Walk")

const cloneCat = function() {    
const img = document.querySelector('body img').cloneNode();
img.style.top = '200px';
img.style.left = '200px';
document.body.appendChild(img);
return img;
}

// const img2 = document.getElementById('walkingCat2');
// img2.style.top = '200px';
// img2.style.left = '200px';
// const img3 = document.getElementById('walkingCat3');
// img3.style.top = '200px';
// img3.style.left = '0px';

const cats = {};

const newCat = function(node){
    const cat = {
        node: node,
        direction: 'TR',
        degree: 30,
    };
    return cat;
}

const topRight = function(imgNode, degree) {
    const oldLeft = parseInt(imgNode.style.left);
    const oldTop = parseInt(imgNode.style.top);
    const newLeft = oldLeft + 5;
    const newTop = oldTop - 7;
    imgNode.style.left = newLeft + 'px';
    imgNode.style.top = newTop + 'px';
    rotate = "rotate(" + degree + "deg)";
    imgNode.style.transform = rotate;
};

const btmRight = function(imgNode, degree) {
    const oldLeft = parseInt(imgNode.style.left);
    const oldTop = parseInt(imgNode.style.top);
    const newLeft = oldLeft + 5;
    const newTop = oldTop + 7;
    imgNode.style.left = newLeft + 'px';
    imgNode.style.top = newTop + 'px';
    rotate = "rotate(" + degree + "deg)";
    imgNode.style.transform = rotate;
};

const btmLeft = function(imgNode, degree) {
    const oldLeft = parseInt(imgNode.style.left);
    const oldTop = parseInt(imgNode.style.top);
    const newLeft = oldLeft - 5;
    const newTop = oldTop + 7;
    imgNode.style.left = newLeft + 'px';
    imgNode.style.top = newTop + 'px';
    rotate = "rotate(" + degree + "deg)";
    imgNode.style.transform = rotate;
};

const topLeft = function(imgNode, degree) {
    const oldLeft = parseInt(imgNode.style.left);
    const oldTop = parseInt(imgNode.style.top);
    const newLeft = oldLeft - 5;
    const newTop = oldTop - 7;
    imgNode.style.left = newLeft + 'px';
    imgNode.style.top = newTop + 'px';
    rotate = "rotate(" + degree + "deg)";
    imgNode.style.transform = rotate;
};

const bounce = function(id) {
    let cat = cats[id];
    if (cat.direction === 'TL') {
        topLeft(cat.node, cat.degree);
    } else if (cat.direction === 'TR') { 
        topRight(cat.node, cat.degree);
    } else if (cat.direction === 'BL') {
        btmLeft(cat.node, cat.degree);
    } else if (cat.direction === 'BR') {
        btmRight(cat.node, cat.degree);
    }
    if (cat.degree === 360){
        cat.degree += 0;
    }else{
        cat.degree += 30;
    }

    const random = Math.random();
    if (parseInt(cat.node.style.left) > 1200 && random > 0.5) {
        cat.direction = 'BL';
    } else if (parseInt(cat.node.style.left) > 1200 && random <= 0.5) {
        cat.direction = 'TL'; 
    } else if (parseInt(cat.node.style.top) >600 && random >0.5) {
        cat.direction = 'TR';
    } else if (parseInt(cat.node.style.top) >600 && random <= 0.5) {
        cat.direction = 'TL';
    }  else if (parseInt(cat.node.style.left) < 0 && random >0.5) {
        cat.direction = 'BR';
    } else if (parseInt(cat.node.style.left) < 0 && random <= 0.5) {
        cat.direction = 'TR';
    } else if (parseInt(cat.node.style.top) <0 && random >0.5) {
        cat.direction = 'BL';
    } else if (parseInt(cat.node.style.top) <0 && random <= 0.5) {
        cat.direction = 'BR';
    };
};

const button = document.getElementById('cannon');
let ids = 0;
const onClick = function() {
    newNode = cloneCat();
    let cat = newCat(newNode);
    let id = 'cat'+ids++;
    cats[id]=cat;
    
    window.setInterval(bounce, 50, id);
}
button.addEventListener('click', onClick);







