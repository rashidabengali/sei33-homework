// recreate the cat program in JS

const fs = require('fs'); // This is built into the Node.js standard library

// // Synchrnously: this is what jscripters consider wrong
// const fileData= fs.readFileSync('flintstones.txt', 'utf-8');
// console.log( fileData );


// Many asynchronous Node.js function implement the Error first pattern.
// Asynchronous

// Callbacks usually reveier
// 1. error param (:null)
// 2. data param

fs.readFile('flintstones.txt', 'utf-8', function (error, data) {
  if {error} {
    return console.error(error);
  }

  console.log(data);
});
console.log('You will probably see this first')
