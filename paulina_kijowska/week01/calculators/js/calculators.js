//
const squareNumber = function(num) {

const finalResult1 = num * num;

 console.log('The result of squaring the number ' + num + ' is ' + finalResult1);
return finalResult1;
}

squareNumber(27);
squareNumber(2);

//nr 2
const halfNumber = function(num) {
const finalResult2 = num / 2;

console.log("Half of " + num + " is " + finalResult2 );
return finalResult2;
}

halfNumber(238);

// //nr3

const percentOf = function(num1, num2) {

const whatPercent = (num1 * 100)/num2;
console.log(num1 + " is "+ whatPercent+ "% of " + num2);
return whatPercent;
}

percentOf(3,12);
percentOf(9,12);
percentOf(5,1);
percentOf(389,123);

/// nr 4

const areaOfCircle = function(radius){
const circumference = radius * Math.PI;
console.log("The area for a circle with radius " + radius + " is " + circumference);
return circumference;
}

areaOfCircle(9);


const part2 = function(num) {
const halfNum = halfNumber(num);
const squared = squareNumber(halfNum);
const finalArea = areaOfCircle(squared);
const percentageSquare = percentOf(squared, finalArea);
}
part2(122);


const raindrops = function(num){


  if (num%3 === 0 ){
    console.log("Ping");
  }
 if (num%5 === 0) {
    console.log("Plang");
  }
  if (num%7 === 0){
    console.log("Plong");
  }
  else console.log(String(num));
}
raindrops(10);
raindrops(28);
