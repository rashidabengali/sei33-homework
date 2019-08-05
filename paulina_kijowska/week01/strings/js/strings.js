

 const drEvil = function(num){
if (num != 1000000) {
return num + " dollars";
} else {
  return num + " dollars (pinky)";
 }
}
 drEvil(20000);

const mixUp = function(str1,str2){
const firstLet= str1.slice(0,1);
const restLet1= str1.slice(1);


const secLet= str2.slice(0,1);
const restLet2= str2.slice(1);

const final = secLet + restLet1;
const final1 = firstLet + restLet2;
console.log(final);
console.log(final1);
};


mixUp("lama", "dado");
mixUp("kangaroo", "peng");



const FixStart = function(str1){
let firstLet= str1.slice(1);
console.log(firstLet);
const rest = str1.slice(0,1);
const n = str1.indexOf(firstLet);
console.log(firstLet);

const length = str1.length;
console.log(str1.length);
console.log(str1[0]);

for (let i=0; i <str1.length; i++) {
if (firstLet[i]=== rest) {

  firstLet = firstLet.replace(firstLet[i], "*");

}
}
console.log(firstLet );

}

FixStart("bubble");


//
// function fixStart(stringy) {
//   const firstLetter = stringy[0].toLowerCase();
//   let endOfWord = stringy.slice(1)
//   for (let i = 0; i < endOfWord.length; i++) {
//     if (endOfWord[i] === firstLetter) {
//       endOfWord = endOfWord.replace(endOfWord[i], '*');
//     }
//   }
//   console.log(firstLetter + endOfWord);
// }
//
// fixStart("bubble")


const verbing = function(str) {
const whatislength = str.length;
console.log(whatislength);
if (whatislength >= 3 ) {
return str+"ing";

}else if ((str[str.lenght-1]) && (str[str.lenght-2]) && (str[str.lenght-3])){
  (str+"ly");

}else {
(str);
}

};
verbing("bumbi");



const notbad = function(str) {
const splitStr = str.split(" ");
console.log(splitStr.length);


for (var i=0; i <splitStr.length; i++) {
if (splitStr[i] === "not") //&& (splitStr[i] === "bad"))
{
console.log(splitStr[i]);
}
   if (splitStr[i] === "bad"){
 console.log(splitStr[i]);
 }
}
}


notbad("This dinner is not so bad");
