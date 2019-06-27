
// DrEvil

const DrEvil = function(amount) {
  let pinky;

  if (amount > 100000) {
      pinky = `dollar ${amount} pinky`;
  }
  else {
    pinky = `dollar ${amount}`;
  }

  return pinky;

};

 console.log(`DrEvil(10): ${DrEvil(10)}`);
 console.log(`DrEvil(1000000): ${DrEvil(1000000)}`);


// MixUp

const mixUp = function(str1, str2) {

  let nstr1 = str1.substring(0,2) +str2.substring(2);
  let nstr2 = str2.substring(0,2) + str1.substring(2);
  let result = nstr2 + " " + nstr1;

  return result;
};

console.log(mixUp("mix", "pod"));
console.log(mixUp("dog", "dinner"));
