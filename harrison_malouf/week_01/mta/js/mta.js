// MTA Lab
// Objectives:
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation.
// Activity
// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Hints:
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)


// the first step is to create a object that holds the lines in place so I can create a function that is able to  extract these lines to be able to
// a) able to tell the start and stop of the first & second line.
// b) prints out the number of stops
// c) print out the journey
//

const trainLine =  {
//   // I don't need to change the keys into a string due to keys being turned into a strings from javascript.
//   // Extremely Important note! you must put a "," after an array!
//
  n: [ ' Timesquare',' 34th',' 28 th',' 23 rd',' Union Square Platform 0',' 8 th' ],
  l: [' 8th',' 6th', ' Union Square Platform 1', ' 3rd', ' 1st'] ,
  6: [ ' Grand Centeral', ' 33rd', ' 28th', ' 23rd', ' Union Square Platform 2', ' Astor Place' ]
};

//
// for now I'm going to spit out the start and end for a single line, afterwards I'll figure out how to connect two lines.
//

const route1 = function (start1, end1, start2, end2) {

//
// since i cant just ad the indexOf(trainLine.key[value]) inside the ${} on my console.log ill have to declare it a var

// we've done enough work to make sure the values we call all work interchangably. except for the total calculation of stops.
//

  console.log(`We're starting off at ${start1}, we'll have a total of ${ start1.indexOf(trainLine.n[0]) - end1.indexOf(trainLine.n[4])} stops before switching stations at ${end1}.
   From ${start2} we'll have a total of ${start2.indexOf(trainLine.l[2]) - end2.indexOf(trainLine.l[1])} stops to reach ${end2} being our final destination`)
}

//
//trainLine.l[2]
//when we call the n line we must specify our start1 and our end1
//

route1(trainLine.n[0], trainLine.n[4], trainLine.l[2], trainLine.l[1]);

//
// I'm making all the above commetted so I can see the difference I'm about to do for future reference. After a couple of pointers from Joel and other class mates I'm going to make some changes to my script.
// A) instead of pulling out individual values from my trainLine I can work with calling the actual index. from there I have the ability to input all of my commands WITHOUT hardcoding anything. --> this is the main reason
//B) I also want to remind myself by rewritting the values inside the array of trainLine to have no spaces inbetween the lettering.
//
// a) able to tell the start and stop of the first & second line.
// b) prints out the number of stops
// c) print out the journey


const trainLine =  {

  n: [ ' Timesquare',' 34th',' 28_th',' 23_rd',' UnionSquare',' 8_th' ],
  l: [' 8th',' 6th', ' UnionSquare', ' 3rd', ' 1st'] ,
  6: [ ' Grand_Centeral', ' 33rd', ' 28th', ' 23rd', ' UnionSquare', ' Astor_Place' ]
};

const route1 = function (line1, start1, line2, start2) {

  let tripOne = [];

  if (trainLine[line1].indexOf(start1) < trainLine[line1].indexOf(' UnionSquare')) {
    for (let i = trainLine[line1].indexOf(start1) + 1; i <= trainLine[line1].indexOf(' UnionSquare'); i++) {
      tripOne.push(trainLine[line1][i]);
    }
  } else if (trainLine[line1].indexOf(start1) > trainLine[line1].indexOf(' UnionSquare')) {
    for (let i = trainLine[line1].indexOf(start1); i > trainLine[line1].indexOf(' UnionSquare'); i--) {
      tripOne.push(trainLine[line1][i]);
    }
  }



  console.log(tripOne);

  const line1TotalStops = (trainLine[line1].indexOf(' UnionSquare') + 1) - (trainLine[line1].indexOf(start1) + 1)

  const line2TotalStops = (trainLine[line2].indexOf(start2) + 1) - (trainLine[line2].indexOf(' UnionSquare') + 1)

  if (line1TotalStops < 0 ) {
    line1TotalStops * (- 1) ;
  }

  if (line2TotalStops < 0 ) {
    line2TotalStops * (- 1) ;
  }

  const totalStops = line1TotalStops + line2TotalStops ;

    console.log(`We're starting off on train line ${line1} at ${start1}. We'll have a total of ${line1TotalStops} stops before we arrive at Union Square. We must then get on line ${line2} at Union Square. We have a total of ${line2TotalStops} stops untill we arrive at ${start2}. The total amount of stops to take for this trip is ${totalStops}`)
  }

route1('n', ' Timesquare', 'l', ' 3rd');
