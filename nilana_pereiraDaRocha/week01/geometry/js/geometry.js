// Geometry Function Lab
// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions:

// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
// const rectangleA = {
//   length: 4,
//   width: 4
// };

const rectangle = {
    length: 4,
    width: 4,
};

const isSquare = function () {
    return (rectangle.length === rectangle.width)
};
const areaOfRectangular = function () {
    return (rectangle.length === rectangle.width)
};
const perimeterOfRectangular = function () {
    return (rectangle.length * rectangle.width)
};

console.log(isSquare(rectangle)); // true
console.log(areaOfRectangular(rectangle));//true
console.log(perimeterOfRectangular(rectangle)); //16 


// Given the following a triangle object like the one below, write the following functions:

// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

const triangle = {
    sideA: 3,
    sideB: 4,
    sideC: 4
};

const isEquilateral = function (triangle) {
    return (triangle.sideA === triangle.sideB === triangle.sideC)
};
const isIsosceles = function (triangle) {
    if (triangle.sideA === triangle.sideB || triangle.sideA === triangle.sideC) {
        return true;
    }
    else if (triangle.sideB === triangle.sideC || triangle.sideB === triangle.sideA) {
        return true;
    }
    else if (triangle.sideC === triangle.sideB || triangle.sideC === triangle.sideA) {
        return true;
    } else {
        return false;
    }
};
const areaOfTriangle = function (triangle) {
    const area = ((triangle.sideA + triangle.sideB + triangle.sideC) / 2);
    return area;
};

console.log(isEquilateral(triangle));
console.log(isIsosceles(triangle));
console.log(areaOfTriangle(triangle)); 