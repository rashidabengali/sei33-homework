const cat1 = document.getElementById("cat1");
const cat2 = document.getElementById("cat2");
let amount = 0;
let amount2 = 100;
let state = "forward";

function catWalk2 () {

  amount2 -= 0.7;
  console.log(amount2);

  if (amount2 <= -100) {
    cat2.setAttribute("src", "#");
    clearInterval(cat2walk);
  }
  amount2px = `${amount2}px`
  cat2.style.left = amount2px;
  console.log(amount2px);

}

function catWalk () {


  if (state === "forward") {
      amount += 0.7;
  }
  else if (state === "backward") {
    amount -= 0.7;
  }

  if (amount >= (document.documentElement.clientWidth - 250) ) {
    state = "backward";
    cat1.classList.add("backward");
  }
  else if (amount <= 0) {
    state = "forward";
    cat1.classList.remove("backward");
  }
  amountpx = `${amount}px`
  cat1.style.left = amountpx;

}


const cat1walk = setInterval(catWalk, 5);
const cat2walk = setInterval(catWalk2, 5);
