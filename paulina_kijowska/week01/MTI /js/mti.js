


// const Nline  = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
// const Lline  = ["8th", "6th", "Union Square", "3rd", "1st"];
// const Sline = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];


const lines = [

{name: "Nline", stops: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]},
{name:"Lline", stops: ["8th", "6th", "Union Square", "3rd", "1st"] },
{name: "Sline", stops: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]}
];



var planTrip = function(lineGetOn, stopGetOn, lineGetOff, stopGetOff ){
//console.log the name of the current line we should get on at
for (var i=0; i<=2; i++ ) {
if (lineGetOn === lines[i].name){
  var a = lines[i].name;
  //console.log name of the line
  console.log(a);

  //  //console.log nr of array we are looking at
//var e = lines[i].stops.indexOf(stopGetOn);

  //stored variable with the nr of stop we get on at
  var b = lines[i].stops.indexOf(stopGetOn);
  console.log(b);
  var listOfStops = lines[0].stops;

  var sumFirstTrip = lines[0].stops.length - b;
  console.log(sumFirstTrip);
  }


//check how many stops we need to take out from our function
//print out the array of stops we need to take
//shift the strings from arrays that are not on the list that we need to go through



//console.log which line we should get off at
if (lineGetOff === lines[i].name){
  var c = lines[i].name;
  console.log(c);
//console.log which stop we should get off at in our array (which number in the array?)
var d = lines[i].stops.indexOf(stopGetOff);
  console.log(d);

  //how many stops in the first line?
}


  if (a !== c) {

    console.log("Change at Union Square");
    for (var i=d+1; i<lines[0].stops.length; i++ ) {

console.log("Your journey continues through the following stops: " + ", " +lines[0].stops[i]);
console.log(lines[0].stops.length - d -1 + " stops in total");
    }
  }

  //
  //

}
}

planTrip('Sline', '33rd', 'Nline', '23rd');
//based on the name of the stop we iteriate through the loop to console.log the names of the stops we will pass



// var accounts= "";
// var b = lines[i].stops.indexOf(stopGetOn);
// for (var i = 0; i < lines[b].stops.length; i++) {
//
//
// console.log("You need to pass following stops "+ accounts);
