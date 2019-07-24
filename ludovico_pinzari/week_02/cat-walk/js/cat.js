//console.log('run');

// initialization of the cat's image position

const cat = document.getElementById('cat');
cat.style.left = '0px';
let new_pos = 0;

// screen borders and cat's image width

const maxRight = innerWidth;
const minLeft = 0;
const catWidth = cat.width;


const catWalk = function () {

  // base case:
  if ( new_pos > maxRight - catWidth ) {
    clearTimeout(timerId);
    timerId = null;
    cat.className = 'flip';
    catWalkBack();
    return;
  }

  let current_pos = cat.style.left;
  let pos = current_pos.slice(0,current_pos.length-2);
  new_pos = parseInt(pos) + 10;
  cat.style.left = new_pos + 'px';
  timerId = setTimeout(function(){catWalk();},50);

}

const catWalkBack = function () {

  // base case:
  if (new_pos < 0) {
    clearTimeout(timerId);
    timerId = null;
    cat.className = 'flip-back';
    catWalk();
    return;
  }

  let current_pos = cat.style.left;
  let pos = current_pos.slice(0,current_pos.length-2);
  new_pos = parseInt(pos) - 10;
  cat.style.left = new_pos + 'px';
  timerId = setTimeout(function(){catWalkBack();},50);
  
}


catWalk();
