

// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle



const isSquare = function(num1,num2) {
  const rectangleA = {
        length: num1,
        width: num2
      };
if (rectangleA.length === rectangleA.width) {

  console.log("This is 100% a square")
}

else {

console.log("This is defo not a square")

}
};
isSquare(4,4);
isSquare(4,5);



// area
const isSquared = function(num1,num2) {
  const rectangleA = {
        length: num1,
        width: num2
      };
console.log("The area is " + num1*num2);

};
isSquared(4,4);


//perimeter
const isSquarePer = function(num1,num2) {
  const rectangleA = {
        length: num1,
        width: num2
      };

      const perimeter = num1*2 + num2*2;
console.log("The perimeter is " + perimeter);

};
isSquarePer(2,2);
isSquarePer(1,7);

// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
const isTriangle = function(num1,num2, num3) {
const triangleA = {
  sideA: num1,
  sideB: num2,
  sideC: num3
};

if (triangleA.sideA === triangleA.sideB && triangleA.sideC) {

console.log("This triangle is equilateral")
}

else {

console.log("This is defo not equilateral")

}
};

isTriangle(4,4,4);

// isIsosceles - Returns whether the triangle is isosceles or not

const isIso = function(num1,num2, num3) {
const triangleA = {
  sideA: num1,
  sideB: num2,
  sideC: num3
};

if (triangleA.sideA === triangleA.sideB ||
triangleA.sideB === triangleA.sideC ||
triangleA.sideA === triangleA.sideC
) {

console.log("This triangle is isosceles")
}

else {

console.log("This is defo not isosceles")

}
};

isIso(4,8,9);
isIso(4,8,10);
isIso(4,8,4);

// area - Returns the area of the Triangle



const isArea = function(num1,num2, num3) {


  const triangleA = {
    sideA: num1,
    sideB: num2,
    sideC: num3
  };

const p = (num1 + num2 + num3)/2;
const area = Math.sqrt(p * (p - num1) * (p - num2) * (p - num3));
return area;
};

console.log(isArea(1,6,9));






// Input
const cart = {
  chocolate: "3.25",
  jeans: "99.99",
  Tshirt: "25.01",
  game: "21.99",
  shampoo: "3.34",
  proteinShake: "22.36"
};



function cashRegister(cart){
  var items = Object.keys(cart); // array of items by key
  var sum = 0;

  for (var i = 0; i < items.length; i++) {
    var itemName = items[i]; // get the name of the key for the item
    var itemPrice = cart[itemName]; // get the price for the item
    sum += Number.parseFloat(itemPrice); // convert the price to a float and add it to the sum
  }

  return sum;
}
cashRegister(cart);








const validateCreditCard = function(creditCardNr) {


  for (var i=0; i < validateCreditCard.length, i++) {
    const finalNum += validateCreditCard[i];

currentNumber = Number.parseInt(finalNum);

if ((!Number.isInteger(currentNumber)) && arguments.length !== 16 ) {


  return false;
}
}

  const what_I_care_about = arguments[arguments.length - 1];
}

 if (what_I_care_about % 2 !== 0) {
   return false;
 }


}


}
validateCreditCard(hgjghjhhj);
validateCreditCard("cop");
