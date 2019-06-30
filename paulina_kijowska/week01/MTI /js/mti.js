


// const Nline  = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
// const Lline  = ["8th", "6th", "Union Square", "3rd", "1st"];
// const Sline = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];
//


const lines = [

{name: "Nline", stops: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"] },
{name:"Lline", stops: ["8th", "6th", "Union Square", "3rd", "1st"] },
{name: "Sline", stops: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]}
];

var planTrip = function(lineGetOn, stopGetOn, lineGetOff, stopGetOff ){

for (var i=0; i<=2; i++ ) {
if (lineGetOn === lines[i].name){
  console.log(lines[i].name);

}

}
console.log(lines[0].stops);
console.log(lines[0].stops);
console.log(lines[0].stops);
console.log(lines[0].stops);

};
planTrip('Sline', 'Times Square', '6', '33rd');
