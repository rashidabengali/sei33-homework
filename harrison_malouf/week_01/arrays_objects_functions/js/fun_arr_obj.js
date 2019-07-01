// Geometry Function Lab
// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
const rectangleA = {
  length: 4,
  width: 4
};

const rectangleB = {
  length: 3,
  width: 4
};


const isSquare = function (x) {
    if (x.length === x.width) {
    //   console.log("true");
      console.log('You have a Square');
    //   return true
    } else {
      console.log(`You don't have a square`)
    }
};


const calculateArea = function (x) {
  // we;ve placed a calculation of the area, broken down the calculation to ask specficallying area with the length * width
  const area = x.length * x.width;
  console.log(`the area of this square is ${area}`)
};

const calculatePerimeter = function (x) {
  const perimeter = x.length*2 + x.width*2
  console.log(`The perimeter of this square is ${perimeter}`)
};


isSquare(rectangleA);
calculateArea(rectangleA);
calculatePerimeter(rectangleA)









// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not


const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4,
  perimeter: 5.5
};

const isEquilateral = function (x) {
  if (x.sideA === x.sideB === x.sideC) {
    console.log( `This Triangle is a Equilateral`)
  } else {
    console.log( `This Triangle isn't a Equilateral`)
  }
};

const isIsoscles = function (x) {
  if ( x.sideA === x.sideB || x.sideB === x.sideC || x.sideC === x.sideA){
  console.log('This Triangle is a Isisoscles.');
  } else {
  console.log(`This Triangle isn't a Isisoscles.`);
  }
};

const isArea = function (x) {
  // we must use Math.sqrt(p	* (	p	−	a	) *	(	p	−	b	)	* (	p	−	c	) method in order to recieve the area of this triangle

  const area = Math.sqrt( x.perimeter * ( x.perimeter - x.sideA ) *  (	x.perimeter	- x.sideB	)	* (	x.perimeter - x.sideC	)) ;
    console.log( `The Area of this triangle is ${ area }`);
};

isEquilateral(triangleA);
isIsoscles(triangleA);
isArea(triangleA);



// equilateral needs to be a===b===c
// isosceles needs to be a || b || c
// area first needs the height after that i need to do the formula for area (slack)
// isObtuse
// each one of the above need to be their own functions calling and using the same const as its values









// refer to the  "others" on study note and make sure that i take out the values of the object inorder to a) turn them into numbers instead of strings b) then calculate the total sum.



// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
//
// // Input
debugger;

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// we can see that cartForParty has keys and values allowing us to use our OBJECT skills to remove the key and value Object.keys(objectName). Object.values(objectName)
// recognise that all the values are strings --> meaning we must convert our strings back into numbers using parseFloat()
// we now need to ad all the values up together by adding them together in a equation. we can access each value by myCats[0].age

const total = function (x) {
  // dont use this =;parseFloat(Object.values(cartForParty)); "that's the right function but firstly you need to call it for each item individually and secondly it just returns a value, it doesn't change the original."  "something like this would get you further:" he added the parseFloat() to the individual values below instead of using the line above.
  const sum =  parseFloat(x.banana) + parseFloat(x.handkerchief) + parseFloat(x.Tshirt) + parseFloat(x.apple) + parseFloat(x.nalgene) + parseFloat(x.proteinShake);
   console.log (`Your total is ${ sum }`);
};

total(cartForParty);


// // Output
// cashRegister(cartForParty)); // 60.55
