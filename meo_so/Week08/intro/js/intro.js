console.log( _.VERSION );

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// nums.forEach(function (n) {
//     console.log(n)
// });


// Ruby style
_(nums).each(function (n) {
    console.log( n );
});

// Functional style
// _.each( nums, function (n) {
//     console.log( n )
// })

const obj = {
    4: 'four',
    5: 'five!',
    6: 'six'
};

_(obj).each(function (value, key, entireObject) {
    console.log(`The key ${ key } has the value of ${ value }`);
})

const groucho = {
    name: 'Groucho Marx',
    instrument: 'guitar',
    vice: 'cigars'
};

_(groucho).each(function (value, key) {
    console.log(`${ key } is ${ value }.`);
})

// map 
console.log( nums );

const byFives = function (n) {
    return n * 5;
};

const multiplesOfFive = _(nums).map(byFives);
console.log( multiplesOfFive );

// map with objects
const grouchoFacts = _(groucho).map(function (v, k) {
    return `${ k } is ${ v }`;
})

console.log(grouchoFacts);

// .reduce()
const sum = _(nums).reduce(function (runningTotal, n) {
    return runningTotal + n;
})

// .reduce also works with objects. 

// .find()
const firstMultipleOfFive = _(nums).find(function (n) {
    console.log('considering', n, n % 5 === 0 )
    return n % 5 === 0; // return true or false
})

// .find() also works with objects 

// .filter() same as .select()
const isEven = function (n) {
    return n % 2 === 0
}

const evens = _(nums).select( isEven );
console.log(evens)

// .reject() 
const odds = _(nums).reject( isEven )

// .pluck()
const bros = [
    { name: 'Groucho Marx', instrument: 'guitar',vice: 'cigars' }, 
    { name: 'Harpo Marx', instrument: 'Harp',vice: 'cigars' }, 
    { name: 'Chico Marx', instrument: 'guitar',vice: 'cigars' }, 
];
console.log( _(bros).pluck('name') );

// .min()
console.log(_(nums).min() );
console.log(_(nums).max() );

// .sort()
console.log(_(bros).sortBy('instrument') );

// .suffle() and .sample() 
console.log( _(nums).shuffle() );
console.log( _(nums).sample() )


