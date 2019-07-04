console.log('run');

const sergeSays = function (input) {
  //if (input === "" || input === null || input === undefined) {
  if (!input) {
    console.log("Fine, be that way.");
  } else if (input.endsWith("?")) {
    console.log("Sure.");
  } else if (input === input.toUpperCase()) {
    console.log("whoa! chill out!");
  } else {
    console.log("whatever");
  }
}

sergeSays("How are you?");
sergeSays("WHAT THE HELL");
sergeSays("hello");
sergeSays(undefined);
