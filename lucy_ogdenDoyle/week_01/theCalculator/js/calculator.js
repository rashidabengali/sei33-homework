console.log("woah");


function squareNumber (num) {
  let squared = num * num;
  squared = squared.toFixed(2);
  const message = `The result of squaring the number ${num} is ${squared}.`;
  console.log(message);
  return squared;
}

function halfNumber (num) {
  let halved = num / 2;
  halved = halved.toFixed(2);
  const message = `Half of ${num} is ${halved}.`;
  console.log(message);
  return halved;
}

function percentOf (num1, num2) {
  let percentage = (num1/num2) * 100;
  percentage = percentage.toFixed(2);
  const message = `${num1} is ${percentage}% of ${num2}.`;
  console.log(message);
  return percentage;
}

function areaOfCircle (rad) {
  let area =  Math.PI * rad * rad;
  area = area.toFixed(2);
  const message = `The area of the circle is ${area}`;
  console.log(message);
  return area;
}

function part2 (num) {
  const halved = halfNumber(num);
  const squared = squareNumber(halved);
  const area = areaOfCircle(squared);
  const percentage = percentOf(area, squared);
}


function drEvil (num) {
  let message;
  message = `${num} dollars`;
  if (num == 1000000) {
    message = message + " (pinky)";
  }
  console.log(message);
}

function mixUp (one, two) {
  let mixed;

  oneFirst2 = one.slice(0, 2);
  oneRemainder = one.slice(2, one.length);
  twoFirst2 = two.slice(0, 2);
  twoRemainder = two.slice(2, two.length);

  mixed = twoFirst2 + oneRemainder + " " + oneFirst2 + twoRemainder;

  console.log(mixed)
  return mixed;
}

function fixStart (one) {
  const firstchar = one.slice(0, 1);
  let array = one.split("");
  for (let i = 0; i < array.length; i++) {
    if (array[i] == firstchar && i != 0) {
      array[i] = "*";
    }
  }

  array = array.join("");
  console.log(array);
  return array;
}

function verbing (one) {
  let verb;
  if (one.length >= 3) {
    if (one.slice(-3) === "ing") {
      let sliced = one.slice(0, one.length - 3);
      verb = sliced + "ly";
    }
    else {
        verb = one + "ing";
    }
  }
  console.log(verb);
}

function notBad (one) {
  let message;
  const not = one.indexOf("not");
  const bad = one.indexOf("bad");

//check that not exists (index > 0)
  if (not < bad && not > 0 && bad > 0) {
    //then it's in the correct order
    const start = one.slice(0, not);
    const end = one.slice(bad + 3, one.length);
    message = start + "good" + end;

    //alternate ide:
    //find distance between not and bad,
    //replace from not for distance length, and
    //replace it with not
  }
 else {
   message = one;
 }
  console.log(message);
}

squareNumber(5);
halfNumber(6);
percentOf(5, 6);
areaOfCircle(5);
part2(5);
drEvil(5);
mixUp("dig", "glob");
fixStart("bubble");
verbing("wowing");
verbing("wow");
notBad("This dinner is not that bad!");
notBad("This dinner is not that bd!");
notBad("This dinner is so that bad!");
