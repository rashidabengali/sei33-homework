// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

const rectangleA = {
  length: 4,
  width: 4
};


const isSquare = function ( rectangle ) {

  if ( rectangle.length === rectangle.width ) {
    return true;
  } else {
    return false;
  }

};

const areaRectangle = function ( rectangle ) {
  return (rectangle.length)*(rectangle.width);
}

const perimiterRect = function ( rectangle ) {
  return (rectangle.length)+(rectangle.width);
}


// rectangle Objects
console.log(`RectangleA: \n length: ${rectangleA.length} \n  width: ${rectangleA.width}`);


// test isSquare function
console.log("Test isSquare function: ");
console.log(`- isSquare(rectangleA): ${isSquare(rectangleA)}`);

// test areaRectangle function
console.log("Test areaRectangle function: ");
console.log(`- areaRectangle(rectangleA): ${areaRectangle(rectangleA)}`);

// test perimiterRect function
console.log("Test perimiterRect function: ");
console.log(`- perimiterRect(rectangleA): ${perimiterRect(rectangleA)}`);

console.log("******************************")
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};


const isEquilateral = function ( triangle ) {
  const a = triangle.sideA;
  const b = triangle.sideB;
  const c = triangle.sideC;

  if ( a === b && a === c && b === c) {
    return true;
  }

  return false;
};

const isIsosceles = function ( triangle ) {
  const a = triangle.sideA;
  const b = triangle.sideB;
  const c = triangle.sideC;

  if ( a === b || a === c || b === c ) {
    return true;
  }

  return false;
};

// To compute the area of a triangle use the Herone's formula

const areaTriangle = function ( triangle ) {

  const a = triangle.sideA;
  const b = triangle.sideB;
  const c = triangle.sideC;

  // perimeter
  const p = a + b + c;

  return (Math.sqrt(p*(p-a)*(p-b)*(p-c))).toFixed(3);

};


const isObtuse = function ( triangle ) {

  const a = triangle.sideA;
  const b = triangle.sideB;
  const c = triangle.sideC;

  const ab = a*a + b*b;
  const ac = a*a + c*c;
  const bc = b*b + c*c;

  if ( a*a > bc ) {
    return true;
  } else if ( b*b > ac) {
    return true;
  } else if ( c*c > ab) {
    return true;
  } else {
    return false;
  }

};

console.log(`triangleA: \n sideA: ${triangleA.sideA} \n sideB: ${triangleA.sideB} \n sideC: ${triangleA.sideC}`);

// test isEquilateral function:
console.log("Test isEquilateral function: ");
console.log(`- isEquilateral(triangleA): ${isEquilateral(triangleA)}`);

// test isIsosceles function:
console.log("Test isIsosceles function: ");
console.log(`- isIsosceles(triangleA): ${isIsosceles(triangleA)}`);

// test area function:
console.log("Test area function: ");
console.log(`- areaTringle(triangleA): ${areaTriangle(triangleA)}`);

// test isObtuse function:
console.log("Test isObtuse function: ");
console.log(`- isObtuse(triangleA): ${isObtuse(triangleA)}`);
