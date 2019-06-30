console.log("wowie");

// RECTANGLE

const rectangleA = {
  length: 4,
  width: 4
};

function isSquare (rect) {
  let isSquare;
  let square;
  if (rect.length === rect.width) {
    isSquare = "is";
    square = true;
  }
  else {
    isSquare = "is not";
    square = false;
  }
  console.log(`The rectangle ${isSquare} a square`);
  return square;
}

isSquare(rectangleA);

function squareArea(r) {
  const area = r.length * r.width;

  console.log(`The area of the rectangle is ${area}.`);
  return area;
}

squareArea(rectangleA);

function squarePerimeter (r) {
  const p = (r.width * 2) + (r.length * 2);
  console.log(`The perimeter of the rectangle is ${p}.`);
  return p;
}

squarePerimeter(rectangleA);

// TRIANGLE

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};


function isEquilareral (t) {
  if (t.sideA === t.sideB === t.sideC) {
    console.log(`The triangle is equilateral`);
    return true;
  }
  else {
    console.log(`The triangle is not equilateral`);
    return false;
  }
}

isEquilareral(triangleA);

function isIscoceles (t) {
  const a = t.sideA;
  const b = t.sideB;
  const c = t.sideC;
  let equil = isEquilareral(t);

  if ((a === b || a === c || b === c) && equil === false) {
    console.log(`The triangle is isoceles`);
    return true;
  }
  else {
    console.log(`The triangle is not isoceles`);
    return false;
  }
}
isIscoceles(triangleA);

// area - Returns the area of the Triangle
function triangleArea (t) {
  const a = t.sideA;
  const b = t.sideB;
  const c = t.sideC;

  // Heron's Formula
const s = (a + b + c)/2;
const area = Math.sqrt(s*((s-a)*(s-b)*(s-c)));
console.log(`The area of the triangle is ${area}`);
return area;

}
triangleArea(triangleA);

// isObtuse - Returns whether the triangle is obtuse or not
// TODO
function isObtuse (t) {

  const obtuse = Math.pow(t.sideA, 2) > Math.pow(t.sideB, 2) + Math.pow(t.sideC, 2);
  console.log(`It is ${obtuse} that the triangle is obtuse`);
  return obtuse;
}
isObtuse(triangleA);
