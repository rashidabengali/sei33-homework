console.log('run');

const raindrops = function (number) {

  let string = "";

  if (number % 3 === 0) {
    string = string + "Pling";
  }

  if (number % 5 === 0) {
    string += "Plang";
  }

  if (number % 7 === 0) {
    string += "Plong";
  }

  if (string.length === 0) {
    string += number;
  }

  const result = `Raindrop speaks for the number ${number} as ${string}`;

  return result;
}

console.log(raindrops(28));
console.log(raindrops(1755));
console.log(raindrops(34));
