// Part 1, Rectangle
const recA = {
    length: 5,
    width: 4,
};

const isSquare = function () {
    return recA.length === recA.width;
}

const area = function () {
    return recA.length * recA.width;
}

const perimeter = function () {
    return 2 * ( recA.length + recA.width);
}

console.log (isSquare(recA)); //true;
console.log (area (recA)); //16
console.log (perimeter (recA)); //16





// Part 2, Triangle
const triArea = function ( sideA, sideB, sideC ) {
     const triangle = ( sideA + sideB + sideC )/2;
     const calTri = Math.sqrt (triangle * ( triangle - sideA ) * ( triangle - sideB ) * ( triangle - sideC ));
     return calTri;
}


const triA = {
    sideA: 3,
    sideB: 4,
    sideC: 4,
    triArea: function () {
        return triArea (this.sideA, this.sideB, this.sideC)
    },
    isEquilateral: function () {
        return (this.sideA === this.sideB === this.sideC);
    },
    isIsosceles: function () {
        return (this.sideA === this.sideB !== this.sideC || this.sideA !== this.sideB === this.sideC || this.side !== this.sideB === this.sideC)
    },
    };
    
console.log (triA.triArea());
console.log (triA.isEquilateral());
console.log (triA.isIsosceles ());

//obtuse question is not done yet.





// The Cash Register
//create an object
var cashRegister = {
    total: 0,
    input: function (name, price) {
        this.total += price;
    }
};

// list of input, should have a better way of doing this!
cashRegister.input (`banana`, 2.50);
cashRegister.input (`milk`, 4.50);
cashRegister.input (`chicken thigh`, 8.90);
cashRegister.input (`salmon fillet`, 14.50);

//print output
console.log (cashRegister.name)
console.log (`Your bill is $${cashRegister.total}`); // should show your bill is $30.4



//method
//validate card with many condition(if..)
const validSum = function (num) {
    let sum = 0;
    sum += num;

    return sum
}
const validateCard = function ( num ) {
    return (num.length === 16 && num.length-1 % 2 === 0 && validSum > 16)

    };


console.log (validateCard (1234567890123456));
//output, return true if the card is valid, return false otherwise.