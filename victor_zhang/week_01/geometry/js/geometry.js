console.log('geometry.js is running');

// # Geometry Function Lab
//
// ### Part 1, Rectangle
//
// Given the following a `rectangle` object like the one below, write the following functions:
//
// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle
//
const rectangleA = {
  length: 4,
  width: 4
};


const shapeInfo = function(shape) {
  isSquare(shape);
  area(shape);
  perimeter(shape);
};

const isSquare = function(shape) {
  const length = shape.length;
  const width = shape.width;
  if (length === width) {
    console.log(`The shape is a square`);
  }
  else {
    console.log(`The shape is NOT a square`);
  }
}

const area = function(shape) {
  const length = shape.length;
  const width = shape.width;
  console.log(`The area of the shape is ${ length * width }`);
}

const perimeter = function(shape) {
  const length = shape.length;
  const width = shape.width;
  console.log(`The perimeter of the shape is ${ 2 * (length + width) }`);
}


shapeInfo(rectangleA);

//
// ### Part 2, Triangle
//
// Given the following a `triangle` object like the one below, write the following functions:
//
// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not
//
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const triangleB = {
  sideA: 4,
  sideB: 5,
  sideC: 7
};


const triangleInfo = function(shape) {
  isEquilateral(shape);
  isIsosceles(shape);
  areaTriangle(shape);
  isObtuse(shape);
};

const isEquilateral = function(shape) {
  if (shape.sideA === shape.sideB === shape.sideC) {
    console.log(`The triangle is Equilateral`);
    return true;
  }
  else {
    console.log(`The triangle is NOT Equilateral`);
    return false;
  }
}

const isIsosceles = function(shape) {
  if (isEquilateral === true) {
    console.log(`The triangle is NOT an Isosceles`)
    return;
  }
  else if (shape.sideA === shape.sideB || shape.sideB === shape.sideC || shape.sideA === shape.sideC) {
    console.log(`The triangle is an Isosceles`)
  }
}

const areaTriangle = function(shape) {
  let area = 0;
  let p = (shape.sideA + shape.sideB + shape.sideC) / 2;
  area = Math.sqrt(p * (p - shape.sideA) * (p - shape.sideB) * (p - shape.sideC));
  console.log( area );
}

const isObtuse = function(shape) {
  let a2 = shape.sideA * shape.sideA;
  let b2 = shape.sideB * shape.sideB;
  let c2 = shape.sideC * shape.sideC;
  if (c2 > a2 + b2) {
    console.log (`This triangle is obtuse`);
  }
  else if (a2 > b2 + c2) {
    console.log (`This triangle is obtuse`);
  }
  else if (b2 > a2 + c2) {
    console.log (`This triangle is obtuse`);
  }
  else {
    console.log (`This triangle is not obtuse`);
  }
}

triangleInfo( triangleA );
triangleInfo( triangleB );
