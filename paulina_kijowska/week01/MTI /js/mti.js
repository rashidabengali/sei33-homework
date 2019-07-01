


// const Nline  = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
// const Lline  = ["8th", "6th", "Union Square", "3rd", "1st"];
// const Sline = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];
//


const lines = [

{name: "Nline", stops: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]},
{name:"Lline", stops: ["8th", "6th", "Union Square", "3rd", "1st"] },
{name: "Sline", stops: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]}
];



var planTrip = function(lineGetOn, stopGetOn, lineGetOff, stopGetOff ){
//console.log the name of the current line we should get on at
for (var i=0; i<=2; i++ ) {
if (lineGetOn === lines[i].name){
  console.log(lines[i].name);
  //console.log where is the stop we should get on at in our array
  console.log(lines[i].stops.indexOf(stopGetOn));
}


//console.log which line we should get off at
if (lineGetOff === lines[i].name){
  console.log(lines[i].name);
//console.log which stop we should get off at in our array (which number in the array?)
  console.log(lines[i].stops.indexOf(stopGetOff));
  }

}
}
planTrip('Nline', 'Times Square', 'Sline', '33rd');
//based on the name of the stop we iteriate through the loop to console.log the names of the stops we will pass



// var accounts= "";
// var b = lines[i].stops.indexOf(stopGetOn);
// for (var i = 0; i < lines[b].stops.length; i++) {
//
//
// console.log("You need to pass following stops "+ accounts);
