const squareNumber = function (number) {
    const result = number * number;
    console.log(`The result of squaring the number ${number} is ${result}.`);
    return result;
};
// squareNumber(3);

const halfNumber = function (number) {
    const result = number / 2;
    console.log(`Half of ${number} is ${result}.`);
    return result;
};
// halfNumber(5);

const percentOf = function (first, second) {
    const result = first * 100 / second;
    console.log(`${first} is ${result}% of ${second}.`);
    return result;
};
// percentOf(2, 4);

const areaOfCircle = function (radius) {
    const result = (radius * radius * 3.14).toFixed(2);
    console.log(`The area for a circle with radius ${radius} is ${result}.`);
    return result;
};
// areaOfCircle(2); 


const part2 = function (number) {
    const halfOfNumber = halfNumber(number);
    const square = squareNumber(halfOfNumber);
    const area = areaOfCircle(square);
    const percentage = percentOf(area, square);
}

part2(2);
