const allCats = document.getElementsByTagName('img');

for (let i = 0; i < allCats.length; i++ ) {
  if (i !== 2) {
    allCats[i].style.visibility= 'hidden';
  }
}

let dancingCat = allCats[0];
let catPlays = allCats[1];
let walkingCat = allCats[2];
let runningCat = allCats[3];
let sleepyCat = allCats[4];

let middleCat = allCats[0];
let cat = allCats[2];

// cats initial position
cat.style.top= (Math.abs(cat.heigh - catPlays.height) + 'px').toString();
cat.style.left= '0px';

dancingCat.style.top= ((cat.height - dancingCat.height) + 'px').toString();
dancingCat.style.left= ((window.innerWidth-dancingCat.width)/2+'px').toString();

catPlays.style.top= (Math.abs(cat.height - catPlays.height) + 'px').toString();
catPlays.style.left= ((window.innerWidth-catPlays.width)/2+'px').toString();


for (let i = 0; i < 500; i++) {
  for (let j = 0; j < 500; j++) {

  }
}


// dancingCat.style.visibility= 'hidden';

const getMiddleCat = function() {
  const randomNum = Math.round(Math.random());
  console.log(randomNum);
  middleCat = allCats[randomNum];
}


let catWidth = cat.width;
let middleCatWidth = dancingCat.width;


let movement = 1;
// let windowLength = cat.style.width

console.log((window.innerWidth-catWidth)/2);


console.log(cat);

const danceCat = function() {
  middleCat.style.visibility= 'visible';
  cat.style.visibility= 'hidden';
  clearInterval(intervalID);
  timeoutID = setTimeout(startWalking, 5000);
}

const walk = function() {
  let newLeft = parseFloat(cat.style.left); //parseInt for whole numbers, parseFloat for decimals
  newLeft += movement;
  if (newLeft === ((window.innerWidth-catWidth)/2)) {
    getMiddleCat();
    danceCat();
  }
  else if (newLeft >= (window.innerWidth)) {
    const randomNum = Math.round(Math.random())+2;
    cat = allCats[randomNum];
    cat.style.visibility= 'visible';
    cat.style.transform= 'scaleX(-1)';
    movement = -1;
  }
  else if (newLeft <= 0) {
    cat.style.transform= 'scaleX(1)';
    movement = 1;
  }
  cat.style.left = newLeft + 'px';
}


// const walkRight = function() {
//
// }
//
// const walkLeft = function() {
//
// }

const startWalking = function() {
  middleCat.style.visibility= 'hidden';
  cat.style.visibility= 'visible';
  intervalID = setInterval(walk, 0.01);
}

startWalking();
