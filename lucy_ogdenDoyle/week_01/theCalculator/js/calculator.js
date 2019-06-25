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
  twoRemainder = two.slice(2, one.length);

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
  let array = one.split(" ");
  let not;
  let bad;
  let message;
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    if (array[i] === "not" && (not > i || not == null)) {
      not = i + 1;
    }
    if (array[i] == "bad" && (bad > i || bad == null)) {
      bad = i + 1;
    }
  }

  if (not < bad) {
    //then it's in the correct order
    array[not] = "good ";
    for (let i = 0; i < array.length; i++) {
      //while i is between not and bad,
      //replace the first with good, and remove the rest
      if ((i+1) > not && (i+1) <= bad) {
        array[i] = "";
      }
    }
  }
 message = array.join(" ");
  console.log(message);
}

notBad("This dinner is not that bad!");
